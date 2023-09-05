package main

import (
	"context"
	"encoding/base64"
	"errors"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/UnAfraid/wg-ui/api"
	"github.com/UnAfraid/wg-ui/auth"
	"github.com/UnAfraid/wg-ui/config"
	"github.com/UnAfraid/wg-ui/datastore"
	"github.com/UnAfraid/wg-ui/datastore/bbolt"
	"github.com/UnAfraid/wg-ui/manage"
	"github.com/UnAfraid/wg-ui/peer"
	"github.com/UnAfraid/wg-ui/server"
	"github.com/UnAfraid/wg-ui/subscription"
	"github.com/UnAfraid/wg-ui/user"
	"github.com/UnAfraid/wg-ui/wg"
	"github.com/golang-jwt/jwt/v5"
	"github.com/sirupsen/logrus"
	"go.uber.org/automaxprocs/maxprocs"
)

const (
	appName = "wg-ui"
)

func main() {
	logrus.SetFormatter(&logrus.JSONFormatter{
		FieldMap: logrus.FieldMap{
			logrus.FieldKeyTime:  "timestamp",
			logrus.FieldKeyLevel: "severity",
			logrus.FieldKeyMsg:   "message",
		},
		TimestampFormat: time.RFC3339,
	})

	conf, err := config.Load(appName)
	if err != nil {
		logrus.
			WithError(err).
			Fatal("failed to initialize config")
		return
	}

	shutdownChan := make(chan os.Signal, 1)
	signal.Notify(shutdownChan, syscall.SIGTERM, syscall.SIGINT)

	if _, err := maxprocs.Set(maxprocs.Logger(logrus.Printf)); err != nil {
		logrus.
			WithError(err).
			Error("failed to set maxprocs")
		return
	}

	debugServer := &http.Server{
		Addr: conf.DebugServer.Address(),
	}

	if conf.DebugServer.Enabled {
		go func() {
			logrus.WithField("address", conf.DebugServer.Address()).Info("Starting serving debug server")
			if err := debugServer.ListenAndServe(); err != nil {
				logrus.
					WithError(err).
					Fatal("Failed to serve debug")
				return
			}
		}()
	}

	logrus.Info("initializing database..")
	db, err := datastore.NewBBoltDB(conf.BoltDB.Path, conf.BoltDB.Timeout)
	if err != nil {
		logrus.
			WithError(err).
			Fatal("failed initialize datastore")
		return
	}

	jwtSecretBytes, err := base64.StdEncoding.DecodeString(conf.JwtSecret)
	if err != nil {
		logrus.
			WithError(err).
			Fatal("failed to base64 decode jwt secret")
		return
	}

	subscriptionImpl := subscription.NewInMemorySubscription()

	serverRepository := bbolt.NewServerRepository(db)
	serverService := server.NewService(serverRepository, subscriptionImpl)

	peerRepository := bbolt.NewPeerRepository(db)
	peerService := peer.NewService(peerRepository, serverService, subscriptionImpl)

	userRepository := bbolt.NewUserRepository(db)
	userService, err := user.NewService(userRepository, subscriptionImpl, conf.Initial.Email, conf.Initial.Password)
	if err != nil {
		logrus.
			WithError(err).
			Fatal("failed to initialize user service")
		return
	}

	wgService, err := wg.NewService(serverService, peerService)
	if err != nil {
		logrus.
			WithError(err).
			Fatal("failed to initialize WireGuard service")
		return
	}
	defer wgService.Close()

	authService := auth.NewService(jwt.SigningMethodHS256, jwtSecretBytes, jwtSecretBytes, conf.JwtDuration)

	manageService := manage.NewService(userService, serverService, peerService, wgService)

	router := api.NewRouter(
		conf,
		authService,
		userService,
		serverService,
		peerService,
		wgService,
		manageService,
	)

	httpServer := http.Server{
		Addr:    conf.HttpServer.Address(),
		Handler: router,
	}

	go func() {
		logrus.WithField("address", conf.HttpServer.Address()).Info("Starting serving http server")
		if err := httpServer.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			logrus.
				WithError(err).
				Fatal("failed to listen and serve http server")
		}
	}()

	<-shutdownChan
	logrus.Info("Shutting down")

	logrus.Info("Shutting down http server")
	httpServerShutdownTimeoutCtx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	if err := httpServer.Shutdown(httpServerShutdownTimeoutCtx); err != nil && !errors.Is(err, http.ErrServerClosed) {
		logrus.
			WithError(err).
			Fatal("failed to shutdown http server")
		return
	}

	if conf.DebugServer.Enabled {
		logrus.Info("Shutting down debug http server")
		debugHttpServerShutdownTimeoutCtx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
		defer cancel()
		if err := debugServer.Shutdown(debugHttpServerShutdownTimeoutCtx); err != nil && !errors.Is(err, http.ErrServerClosed) {
			logrus.
				WithError(err).
				Fatal("failed to shutdown debug server")
			return
		}
	}
}
