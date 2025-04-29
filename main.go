package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	mysqlDriver "github.com/go-sql-driver/mysql"
	"github.com/gorilla/sessions"
	"github.com/gorilla/websocket"
	"github.com/joho/godotenv"
	"github.com/markbates/goth"

	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/spotify"
	"github.com/rs/cors"
	"github.com/tobyleye/beat-guess/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var SPOTIFY_REDIRECT_URI = "http://localhost:1234/spotify/callback"

type Message struct {
	Type string      `json:"type"`
	Data interface{} `json:"data"`
}

type IncomingMessage struct {
	Type   string      `json:"type"`
	Data   interface{} `json:"data"`
	Sender *client
}

func findRoom(rooms []*Room, roomId string) *Room {
	for _, room := range rooms {
		if room.ID == roomId {
			return room
		}
	}
	return nil
}

type Config struct {
	spotifyClientId     string
	spotifyClientSecret string
}

func loadConfig() (*Config, error) {
	err := godotenv.Load("./.env")

	if err != nil {
		log.Println("error loading config..", err)
		return nil, err
	}
	config := &Config{
		spotifyClientId:     os.Getenv("SPOTIFY_CLIENT_ID"),
		spotifyClientSecret: os.Getenv("SPOTIFY_CLIENT_SECRET"),
	}
	return config, nil
}

func main() {

	config, _ := loadConfig()

	// config.
	fmt.Println("config..", config)

	fmt.Printf("config: %v\n", config)

	dbConfig := mysqlDriver.Config{
		User:                 "root",
		Passwd:               "root",
		DBName:               "guessTheSongGo",
		Net:                  "tcp",
		Addr:                 fmt.Sprintf("%s:%s", "localhost", "3307"),
		AllowNativePasswords: true,
		ParseTime:            true,
	}
	dbConnUrl := dbConfig.FormatDSN()

	fmt.Println("mysql connection url", dbConnUrl)
	db, _ := gorm.Open(mysql.Open(dbConnUrl), &gorm.Config{})

	db.AutoMigrate(&models.User{})

	// SessionStore := sessions.NewCookieStore([]byte("secretss.."))

	rooms, err := createRooms(db)

	if err != nil {
		log.Fatal("unable to read rooms", err)
	}

	// start rooms
	for _, room := range rooms {
		go room.Start()
	}

	fmt.Println(`starting game server with rooms:`, len(rooms))

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5188"},
		AllowCredentials: true,
		Debug:            true,
	})

	// initialize goth
	goth.UseProviders(
		spotify.New(
			config.spotifyClientId,
			config.spotifyClientSecret,
			SPOTIFY_REDIRECT_URI,
		),
	)

	key := os.Getenv("SESSION_KEY")

	// maxAge := 86400 * 30 // 30 days
	// isProd := false      // Set to true when serving over https

	store := sessions.NewCookieStore([]byte(key))

	// store.MaxAge(maxAge)
	// store.Options.Path = "/"
	// store.Options.HttpOnly = true // HttpOnly should always be enabled
	// store.Options.Secure = isProd

	gothic.Store = store

	// initialize game server
	server := GameServer{
		rooms:        rooms,
		connections:  map[string]*websocket.Conn{},
		SessionStore: store,
		message:      make(chan IncomingMessage),
		db:           db,
	}

	go server.run()

	handlers := Handlers{
		Db:           db,
		SessionStore: store,
		Config:       config,
	}

	http.HandleFunc("/login/spotify", handlers.loginWithSpotify)
	http.HandleFunc("/spotify/callback", handlers.spotifyLoginCallback)

	http.HandleFunc("/connect/{id}", server.handleConnection)
	http.HandleFunc("/currentUser", handlers.GetSession)

	defaultHandler := c.Handler(http.DefaultServeMux)

	log.Println("Server started at localhost:1234")

	// stop := make(chan os.Signal, 1)
	// signal.Notify(stop, os.Interrupt, syscall.SIGTERM, syscall.SIGABRT, os.Kill)

	err = http.ListenAndServe(":1234", defaultHandler)

	if err != nil {
		log.Fatal(err)
	}

	// <-stop

}
