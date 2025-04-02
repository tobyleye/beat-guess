package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	mysqlDriver "github.com/go-sql-driver/mysql"
	"github.com/gorilla/sessions"
	"github.com/gorilla/websocket"
	"github.com/joho/godotenv"
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

func parseMessage(message []byte) Message {
	var msg Message
	json.Unmarshal(message, &msg)
	return msg
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
	err := godotenv.Load()

	if err != nil {
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

	SessionStore := sessions.NewCookieStore([]byte("secretss.."))

	rooms, err := ReadRooms()
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

	server := GameServer{
		rooms:        rooms,
		connections:  map[string]*websocket.Conn{},
		SessionStore: SessionStore,
	}

	handlers := Handlers{
		Db:           db,
		SessionStore: SessionStore,
		Config:       config,
	}

	http.HandleFunc("/login/spotify", handlers.loginWithSpotify)
	http.HandleFunc("/spotify/callback", handlers.spotifyLoginCallback)

	http.HandleFunc("/connect/{id}", server.handleConnection)
	http.HandleFunc("/currentUser", handlers.GetSession)

	defaultHandler := c.Handler(http.DefaultServeMux)

	fmt.Println("Server started at localhost:1234")

	// stop := make(chan os.Signal, 1)
	// signal.Notify(stop, os.Interrupt, syscall.SIGTERM, syscall.SIGABRT, os.Kill)

	err = http.ListenAndServe(":1234", defaultHandler)

	if err != nil {
		log.Fatal(err)
	}

	// <-stop

}
