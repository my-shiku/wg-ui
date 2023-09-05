package peer

import (
	"context"
	"encoding/json"
	"fmt"
	"net"
	"net/netip"
	"path"
	"strconv"
	"strings"
	"time"

	"github.com/UnAfraid/wg-ui/server"
	"github.com/UnAfraid/wg-ui/subscription"
	"github.com/google/uuid"
	"github.com/sirupsen/logrus"
)

var subscriptionPath = path.Join("node", "Peer")

type Service interface {
	FindPeer(ctx context.Context, options *FindOneOptions) (*Peer, error)
	FindPeers(ctx context.Context, options *FindOptions) ([]*Peer, error)
	CreatePeer(ctx context.Context, serverId string, options *CreateOptions, userId string) (*Peer, error)
	UpdatePeer(ctx context.Context, peerId string, options *UpdateOptions, fieldMask *UpdateFieldMask, userId string) (*Peer, error)
	DeletePeer(ctx context.Context, peerId string, userId string) (*Peer, error)
	Subscribe(ctx context.Context) (_ <-chan *ChangedEvent, err error)
	HasSubscribers() bool
}

type service struct {
	peerRepository Repository
	serverService  server.Service
	subscription   subscription.Subscription
	publicIp       string
}

func NewService(
	peerRepository Repository,
	serverService server.Service,
	subscription subscription.Subscription,
	publicIp string,
) Service {
	return &service{
		peerRepository: peerRepository,
		serverService:  serverService,
		subscription:   subscription,
		publicIp:       publicIp,
	}
}

func (s *service) FindPeer(ctx context.Context, options *FindOneOptions) (*Peer, error) {
	if err := options.Validate(); err != nil {
		return nil, err
	}
	return s.peerRepository.FindOne(ctx, options)
}

func (s *service) FindPeers(ctx context.Context, options *FindOptions) ([]*Peer, error) {
	return s.peerRepository.FindAll(ctx, options)
}

func (s *service) CreatePeer(ctx context.Context, serverId string, options *CreateOptions, userId string) (*Peer, error) {
	srv, err := s.findServerById(ctx, serverId)
	if err != nil {
		return nil, err
	}

	existingPeers, err := s.findPeersByServerId(ctx, serverId)
	if err != nil {
		return nil, err
	}

	for _, peer := range existingPeers {
		if strings.EqualFold(peer.Name, options.Name) {
			return nil, ErrPeerNameAlreadyInUse
		}
		if strings.EqualFold(peer.PublicKey, options.PublicKey) {
			return nil, ErrPublicKeyAlreadyExists
		}
	}

	peer, err := processCreatePeer(srv, options, s.publicIp, userId)
	if err != nil {
		return nil, err
	}

	if err := peer.validate(nil); err != nil {
		return nil, err
	}

	createdPeer, err := s.peerRepository.Create(ctx, peer)
	if err != nil {
		return nil, err
	}

	if err := createdPeer.runHooks(HookActionCreate); err != nil {
		logrus.
			WithError(err).
			WithField("peer", peer.Name).
			Error("failed to run hooks on peer create")
	}

	err = s.notify(&ChangedEvent{
		Action: ChangedActionCreated,
		Peer:   createdPeer,
	})
	if err != nil {
		logrus.WithError(err).Error("failed to notify peer created event")
	}

	return createdPeer, nil
}

func (s *service) UpdatePeer(ctx context.Context, peerId string, options *UpdateOptions, fieldMask *UpdateFieldMask, userId string) (*Peer, error) {
	peer, err := s.findPeerById(ctx, peerId)
	if err != nil {
		return nil, err
	}

	existingPeers, err := s.findPeersByServerId(ctx, peer.ServerId)
	if err != nil {
		return nil, err
	}

	if err = processUpdatePeer(existingPeers, peer, options, fieldMask, userId); err != nil {
		return nil, err
	}

	if err := peer.validate(fieldMask); err != nil {
		return nil, err
	}

	updatedPeer, err := s.peerRepository.Update(ctx, peer, fieldMask)
	if err != nil {
		return nil, err
	}

	if err := updatedPeer.runHooks(HookActionUpdate); err != nil {
		logrus.
			WithError(err).
			WithField("peer", peer.Name).
			Error("failed to run hooks on peer update")
	}

	err = s.notify(&ChangedEvent{
		Action: ChangedActionUpdated,
		Peer:   updatedPeer,
	})
	if err != nil {
		logrus.WithError(err).Error("failed to notify peer updated event")
	}

	return updatedPeer, nil
}

func (s *service) DeletePeer(ctx context.Context, peerId string, userId string) (*Peer, error) {
	peer, err := s.findPeerById(ctx, peerId)
	if err != nil {
		return nil, err
	}

	deletedPeer, err := s.peerRepository.Delete(ctx, peer.Id, userId)
	if err != nil {
		return nil, err
	}

	if err := deletedPeer.runHooks(HookActionDelete); err != nil {
		logrus.
			WithError(err).
			WithField("peer", peer.Name).
			Error("failed to run hooks on peer delete")
	}

	err = s.notify(&ChangedEvent{
		Action: ChangedActionDeleted,
		Peer:   deletedPeer,
	})
	if err != nil {
		logrus.WithError(err).Error("failed to notify peer deleted event")
	}

	return deletedPeer, nil
}

func (s *service) findServerById(ctx context.Context, serverId string) (*server.Server, error) {
	srv, err := s.serverService.FindServer(ctx, &server.FindOneOptions{
		IdOption: &server.IdOption{
			Id: serverId,
		},
	})
	if err != nil {
		return nil, err
	}
	if srv == nil {
		return nil, ErrServerNotFound
	}
	return srv, nil
}

func (s *service) findPeerById(ctx context.Context, peerId string) (*Peer, error) {
	peer, err := s.peerRepository.FindOne(ctx, &FindOneOptions{
		IdOption: &IdOption{
			Id: peerId,
		},
	})
	if err != nil {
		return nil, err
	}
	if peer == nil {
		return nil, ErrPeerNotFound
	}
	return peer, nil
}

func (s *service) findPeersByServerId(ctx context.Context, serverId string) ([]*Peer, error) {
	return s.peerRepository.FindAll(ctx, &FindOptions{
		ServerId: &serverId,
	})
}

func newId() (string, error) {
	id, err := uuid.NewRandom()
	if err != nil {
		return "", err
	}
	return id.String(), nil
}

func processCreatePeer(server *server.Server, options *CreateOptions, publicIp string, userId string) (*Peer, error) {
	if options == nil {
		return nil, ErrCreatePeerOptionsRequired
	}

	if len(strings.TrimSpace(options.Endpoint)) == 0 && server.ListenPort != nil {
		options.Endpoint = net.JoinHostPort(publicIp, strconv.Itoa(*server.ListenPort))
	}

	if options.Endpoint != "" {
		endpointAddrPort, err := netip.ParseAddrPort(options.Endpoint)
		if err != nil {
			return nil, fmt.Errorf("invalid endpoint: %w", err)
		}
		options.Endpoint = endpointAddrPort.String()
	}

	id, err := newId()
	if err != nil {
		return nil, fmt.Errorf("failed to generate new id: %w", err)
	}

	now := time.Now()

	return &Peer{
		Id:                  id,
		ServerId:            server.Id,
		Name:                options.Name,
		Description:         options.Description,
		PublicKey:           options.PublicKey,
		Endpoint:            options.Endpoint,
		AllowedIPs:          options.AllowedIPs,
		PresharedKey:        options.PresharedKey,
		PersistentKeepalive: options.PersistentKeepalive,
		Hooks:               options.Hooks,
		CreateUserId:        userId,
		CreatedAt:           now,
		UpdatedAt:           now,
		DeletedAt:           nil,
	}, nil
}

func processUpdatePeer(existingPeers []*Peer, peer *Peer, options *UpdateOptions, fieldMask *UpdateFieldMask, userId string) error {
	if options == nil {
		return ErrUpdatePeerOptionsRequired
	}

	if fieldMask == nil {
		return ErrUpdatePeerFieldMaskRequired
	}

	if fieldMask.Name {
		for _, existingPeer := range existingPeers {
			if strings.EqualFold(existingPeer.Name, options.Name) && existingPeer.Id != peer.Id {
				return ErrPeerNameAlreadyInUse
			}
		}
	}

	if fieldMask.PublicKey {
		for _, existingPeer := range existingPeers {
			if strings.EqualFold(existingPeer.PublicKey, options.PublicKey) && existingPeer.Id != peer.Id {
				return ErrPublicKeyAlreadyExists
			}
		}
	}

	if userId != "" {
		peer.UpdateUserId = userId
		fieldMask.UpdateUserId = true
	}
	peer.update(options, fieldMask)
	peer.UpdatedAt = time.Now()
	return nil
}

func (s *service) notify(changedEvent *ChangedEvent) error {
	bytes, err := json.Marshal(changedEvent)
	if err != nil {
		return err
	}

	if err := s.subscription.Notify(bytes, path.Join(subscriptionPath, changedEvent.Peer.Id)); err != nil {
		return fmt.Errorf("failed to notify peer changed event: %w", err)
	}
	return nil
}

func (s *service) Subscribe(ctx context.Context) (_ <-chan *ChangedEvent, err error) {
	bytesChannel, err := s.subscription.Subscribe(ctx, path.Join(subscriptionPath, "*"))
	if err != nil {
		return nil, err
	}

	observerChan := make(chan *ChangedEvent)
	go func() {
		defer close(observerChan)

		for bytes := range bytesChannel {
			var changedEvent *ChangedEvent
			if err := json.Unmarshal(bytes, &changedEvent); err != nil {
				logrus.WithError(err).Error("failed to decode peer changed event")
				return
			}
			observerChan <- changedEvent
		}
	}()

	return observerChan, nil
}

func (s *service) HasSubscribers() bool {
	return s.subscription.HasSubscribers(path.Join(subscriptionPath, "*"))
}
