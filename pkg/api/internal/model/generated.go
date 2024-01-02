// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"time"

	"github.com/99designs/gqlgen/graphql"
)

type Node interface {
	IsNode()
	GetID() ID
}

type NodeChangedEvent interface {
	IsNodeChangedEvent()
}

type CreatePeerInput struct {
	ClientMutationID    graphql.Omittable[*string]          `json:"clientMutationId,omitempty"`
	ServerID            ID                                  `json:"serverId"`
	Name                string                              `json:"name"`
	Description         graphql.Omittable[*string]          `json:"description,omitempty"`
	PublicKey           string                              `json:"publicKey"`
	AllowedIPs          []string                            `json:"allowedIPs"`
	Endpoint            graphql.Omittable[*string]          `json:"endpoint,omitempty"`
	PresharedKey        graphql.Omittable[*string]          `json:"presharedKey,omitempty"`
	PersistentKeepalive graphql.Omittable[*int]             `json:"persistentKeepalive,omitempty"`
	Hooks               graphql.Omittable[[]*PeerHookInput] `json:"hooks,omitempty"`
}

type CreatePeerPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	Peer             *Peer   `json:"peer,omitempty"`
}

type CreateServerInput struct {
	ClientMutationID graphql.Omittable[*string]            `json:"clientMutationId,omitempty"`
	Name             string                                `json:"name"`
	Description      graphql.Omittable[*string]            `json:"description,omitempty"`
	Enabled          graphql.Omittable[*bool]              `json:"enabled,omitempty"`
	PrivateKey       graphql.Omittable[*string]            `json:"privateKey,omitempty"`
	PublicKey        graphql.Omittable[*string]            `json:"publicKey,omitempty"`
	ListenPort       graphql.Omittable[*int]               `json:"listenPort,omitempty"`
	FirewallMark     graphql.Omittable[*int]               `json:"firewallMark,omitempty"`
	Address          string                                `json:"address"`
	DNS              graphql.Omittable[[]string]           `json:"dns,omitempty"`
	Mtu              graphql.Omittable[*int]               `json:"mtu,omitempty"`
	Hooks            graphql.Omittable[[]*ServerHookInput] `json:"hooks,omitempty"`
}

type CreateServerPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	Server           *Server `json:"server,omitempty"`
}

type CreateUserInput struct {
	ClientMutationID graphql.Omittable[*string] `json:"clientMutationId,omitempty"`
	Email            string                     `json:"email"`
	Password         string                     `json:"password"`
}

type CreateUserPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	User             *User   `json:"user"`
}

type DeletePeerInput struct {
	ClientMutationID graphql.Omittable[*string] `json:"clientMutationId,omitempty"`
	ID               ID                         `json:"id"`
}

type DeletePeerPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	Peer             *Peer   `json:"peer,omitempty"`
}

type DeleteServerInput struct {
	ClientMutationID graphql.Omittable[*string] `json:"clientMutationId,omitempty"`
	ID               ID                         `json:"id"`
}

type DeleteServerPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	Server           *Server `json:"server,omitempty"`
}

type DeleteUserInput struct {
	ClientMutationID graphql.Omittable[*string] `json:"clientMutationId,omitempty"`
	ID               ID                         `json:"id"`
}

type DeleteUserPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	User             *User   `json:"user,omitempty"`
}

type ForeignInterface struct {
	Name      string   `json:"name"`
	Addresses []string `json:"addresses"`
	Mtu       int      `json:"mtu"`
}

type ForeignPeer struct {
	PublicKey                   string     `json:"publicKey"`
	Endpoint                    *string    `json:"endpoint,omitempty"`
	AllowedIps                  []string   `json:"allowedIps,omitempty"`
	PersistentKeepAliveInterval int        `json:"persistentKeepAliveInterval"`
	LastHandshakeTime           *time.Time `json:"lastHandshakeTime,omitempty"`
	ReceiveBytes                float64    `json:"receiveBytes"`
	TransmitBytes               float64    `json:"transmitBytes"`
	ProtocolVersion             int        `json:"protocolVersion"`
}

type ForeignServer struct {
	ForeignInterface *ForeignInterface `json:"foreignInterface"`
	Name             string            `json:"name"`
	Type             string            `json:"type"`
	PublicKey        string            `json:"publicKey"`
	ListenPort       int               `json:"listenPort"`
	FirewallMark     int               `json:"firewallMark"`
	Peers            []*ForeignPeer    `json:"peers"`
}

type GenerateWireguardKeyInput struct {
	ClientMutationID graphql.Omittable[*string] `json:"clientMutationId,omitempty"`
}

type GenerateWireguardKeyPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	PrivateKey       string  `json:"privateKey"`
	PublicKey        string  `json:"publicKey"`
}

type ImportForeignServerInput struct {
	ClientMutationID graphql.Omittable[*string] `json:"clientMutationId,omitempty"`
	Name             string                     `json:"name"`
}

type ImportForeignServerPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	Server           *Server `json:"server,omitempty"`
}

type Mutation struct {
}

type Peer struct {
	ID                  ID          `json:"id"`
	Server              *Server     `json:"server"`
	Name                string      `json:"name"`
	Description         string      `json:"description"`
	PublicKey           string      `json:"publicKey"`
	AllowedIPs          []string    `json:"allowedIPs,omitempty"`
	Endpoint            string      `json:"endpoint"`
	PresharedKey        string      `json:"presharedKey"`
	PersistentKeepalive *int        `json:"persistentKeepalive,omitempty"`
	Hooks               []*PeerHook `json:"hooks,omitempty"`
	Stats               *PeerStats  `json:"stats,omitempty"`
	CreateUser          *User       `json:"createUser,omitempty"`
	UpdateUser          *User       `json:"updateUser,omitempty"`
	DeleteUser          *User       `json:"deleteUser,omitempty"`
	CreatedAt           time.Time   `json:"createdAt"`
	UpdatedAt           time.Time   `json:"updatedAt"`
	DeletedAt           *time.Time  `json:"deletedAt,omitempty"`
}

func (Peer) IsNode()        {}
func (this Peer) GetID() ID { return this.ID }

type PeerChangedEvent struct {
	Node   *Peer  `json:"node"`
	Action string `json:"action"`
}

func (PeerChangedEvent) IsNodeChangedEvent() {}

type PeerHook struct {
	Command     string `json:"command"`
	RunOnCreate bool   `json:"runOnCreate"`
	RunOnUpdate bool   `json:"runOnUpdate"`
	RunOnDelete bool   `json:"runOnDelete"`
}

type PeerHookInput struct {
	Command     string `json:"command"`
	RunOnCreate bool   `json:"runOnCreate"`
	RunOnUpdate bool   `json:"runOnUpdate"`
	RunOnDelete bool   `json:"runOnDelete"`
}

type PeerStats struct {
	LastHandshakeTime *time.Time `json:"lastHandshakeTime,omitempty"`
	ReceiveBytes      float64    `json:"receiveBytes"`
	TransmitBytes     float64    `json:"transmitBytes"`
	ProtocolVersion   int        `json:"protocolVersion"`
}

type Query struct {
}

type Server struct {
	ID             ID                    `json:"id"`
	Name           string                `json:"name"`
	Description    string                `json:"description"`
	Enabled        bool                  `json:"enabled"`
	Running        bool                  `json:"running"`
	PublicKey      string                `json:"publicKey"`
	ListenPort     *int                  `json:"listenPort,omitempty"`
	FirewallMark   *int                  `json:"firewallMark,omitempty"`
	Address        string                `json:"address"`
	DNS            []string              `json:"dns,omitempty"`
	Mtu            int                   `json:"mtu"`
	Hooks          []*ServerHook         `json:"hooks,omitempty"`
	Peers          []*Peer               `json:"peers,omitempty"`
	InterfaceStats *ServerInterfaceStats `json:"interfaceStats,omitempty"`
	CreateUser     *User                 `json:"createUser,omitempty"`
	UpdateUser     *User                 `json:"updateUser,omitempty"`
	DeleteUser     *User                 `json:"deleteUser,omitempty"`
	CreatedAt      time.Time             `json:"createdAt"`
	UpdatedAt      time.Time             `json:"updatedAt"`
	DeletedAt      *time.Time            `json:"deletedAt,omitempty"`
}

func (Server) IsNode()        {}
func (this Server) GetID() ID { return this.ID }

type ServerChangedEvent struct {
	Node   *Server `json:"node"`
	Action string  `json:"action"`
}

func (ServerChangedEvent) IsNodeChangedEvent() {}

type ServerHook struct {
	Command     string `json:"command"`
	RunOnCreate bool   `json:"runOnCreate"`
	RunOnUpdate bool   `json:"runOnUpdate"`
	RunOnDelete bool   `json:"runOnDelete"`
	RunOnStart  bool   `json:"runOnStart"`
	RunOnStop   bool   `json:"runOnStop"`
}

type ServerHookInput struct {
	Command     string `json:"command"`
	RunOnCreate bool   `json:"runOnCreate"`
	RunOnUpdate bool   `json:"runOnUpdate"`
	RunOnDelete bool   `json:"runOnDelete"`
	RunOnStart  bool   `json:"runOnStart"`
	RunOnStop   bool   `json:"runOnStop"`
}

type ServerInterfaceStats struct {
	RxPackets         float64 `json:"rxPackets"`
	TxPackets         float64 `json:"txPackets"`
	RxBytes           float64 `json:"rxBytes"`
	TxBytes           float64 `json:"txBytes"`
	RxErrors          float64 `json:"rxErrors"`
	TxErrors          float64 `json:"txErrors"`
	RxDropped         float64 `json:"rxDropped"`
	TxDropped         float64 `json:"txDropped"`
	Multicast         float64 `json:"multicast"`
	Collisions        float64 `json:"collisions"`
	RxLengthErrors    float64 `json:"rxLengthErrors"`
	RxOverErrors      float64 `json:"rxOverErrors"`
	RxCrcErrors       float64 `json:"rxCrcErrors"`
	RxFrameErrors     float64 `json:"rxFrameErrors"`
	RxFifoErrors      float64 `json:"rxFifoErrors"`
	RxMissedErrors    float64 `json:"rxMissedErrors"`
	TxAbortedErrors   float64 `json:"txAbortedErrors"`
	TxCarrierErrors   float64 `json:"txCarrierErrors"`
	TxFifoErrors      float64 `json:"txFifoErrors"`
	TxHeartbeatErrors float64 `json:"txHeartbeatErrors"`
	TxWindowErrors    float64 `json:"txWindowErrors"`
	RxCompressed      float64 `json:"rxCompressed"`
	TxCompressed      float64 `json:"txCompressed"`
}

type SignInInput struct {
	ClientMutationID graphql.Omittable[*string] `json:"clientMutationId,omitempty"`
	Email            string                     `json:"email"`
	Password         string                     `json:"password"`
}

type SignInPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	// Token you can use this token in Authorization header as bearer type
	Token string `json:"token"`
	// Session expiration date time
	ExpiresAt time.Time `json:"expiresAt"`
	// Session expiration duration relative to current time in seconds
	ExpiresIn int `json:"expiresIn"`
}

type StartServerInput struct {
	ClientMutationID graphql.Omittable[*string] `json:"clientMutationId,omitempty"`
	ID               ID                         `json:"id"`
}

type StartServerPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	Server           *Server `json:"server"`
}

type StopServerInput struct {
	ClientMutationID graphql.Omittable[*string] `json:"clientMutationId,omitempty"`
	ID               ID                         `json:"id"`
}

type StopServerPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	Server           *Server `json:"server,omitempty"`
}

type Subscription struct {
}

type UpdatePeerInput struct {
	ClientMutationID    graphql.Omittable[*string]          `json:"clientMutationId,omitempty"`
	ID                  ID                                  `json:"id"`
	Name                graphql.Omittable[*string]          `json:"name,omitempty"`
	Description         graphql.Omittable[*string]          `json:"description,omitempty"`
	PublicKey           graphql.Omittable[*string]          `json:"publicKey,omitempty"`
	Endpoint            graphql.Omittable[*string]          `json:"endpoint,omitempty"`
	AllowedIPs          graphql.Omittable[[]string]         `json:"allowedIPs,omitempty"`
	PresharedKey        graphql.Omittable[*string]          `json:"presharedKey,omitempty"`
	PersistentKeepalive graphql.Omittable[*int]             `json:"persistentKeepalive,omitempty"`
	Hooks               graphql.Omittable[[]*PeerHookInput] `json:"hooks,omitempty"`
}

type UpdatePeerPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	Peer             *Peer   `json:"peer,omitempty"`
}

type UpdateServerInput struct {
	ClientMutationID graphql.Omittable[*string]            `json:"clientMutationId,omitempty"`
	ID               ID                                    `json:"id"`
	Description      graphql.Omittable[*string]            `json:"description,omitempty"`
	Enabled          graphql.Omittable[*bool]              `json:"enabled,omitempty"`
	PublicKey        graphql.Omittable[*string]            `json:"publicKey,omitempty"`
	PrivateKey       graphql.Omittable[*string]            `json:"privateKey,omitempty"`
	ListenPort       graphql.Omittable[*int]               `json:"listenPort,omitempty"`
	FirewallMark     graphql.Omittable[*int]               `json:"firewallMark,omitempty"`
	Address          graphql.Omittable[*string]            `json:"address,omitempty"`
	DNS              graphql.Omittable[[]string]           `json:"dns,omitempty"`
	Mtu              graphql.Omittable[*int]               `json:"mtu,omitempty"`
	Hooks            graphql.Omittable[[]*ServerHookInput] `json:"hooks,omitempty"`
}

type UpdateServerPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	Server           *Server `json:"server,omitempty"`
}

type UpdateUserInput struct {
	ClientMutationID graphql.Omittable[*string] `json:"clientMutationId,omitempty"`
	ID               ID                         `json:"id"`
	Email            graphql.Omittable[*string] `json:"email,omitempty"`
	Password         graphql.Omittable[*string] `json:"password,omitempty"`
}

type UpdateUserPayload struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	User             *User   `json:"user"`
}

type User struct {
	ID        ID        `json:"id"`
	Email     string    `json:"email"`
	Servers   []*Server `json:"servers,omitempty"`
	Peers     []*Peer   `json:"peers,omitempty"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

func (User) IsNode()        {}
func (this User) GetID() ID { return this.ID }

type UserChangedEvent struct {
	Node   *User  `json:"node"`
	Action string `json:"action"`
}

func (UserChangedEvent) IsNodeChangedEvent() {}
