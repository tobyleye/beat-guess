package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/sessions"
	"github.com/gorilla/websocket"
)

type GameServer struct {
	connections  map[string]*websocket.Conn
	rooms        []*Room
	SessionStore *sessions.CookieStore
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func (server GameServer) handleConnection(w http.ResponseWriter, r *http.Request) {
	c, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade error: ", err)
		return
	}

	session, _ := server.SessionStore.Get(r, "sess")

	// userId will be null if user is a guest
	userId, _ := session.Values["UserId"].(string)
	userName, _ := session.Values["DisplayName"].(string)

	connectionId := r.PathValue("id")

	fmt.Println("connection id:", connectionId)

	num := len(server.connections) + 1

	c.WriteJSON(Message{Type: "greetings",
		Data: fmt.Sprintf("Hello, client!, you are number %d in our list\n. I'm more that an echo server and i'm at your disposal", num)})

	server.connections[connectionId] = c
	joinedRoom := ""
	fmt.Println("join room:", joinedRoom)

	handlers := newEventHandlers()

	handlers.AddEvent("getRooms", func(data interface{}) {
		type RoomInfo struct {
			Name   string   `json:"name"`
			ID     string   `json:"id"`
			Images []string `json:"images"`
		}
		rooms := []RoomInfo{}

		for _, room := range server.rooms {
			first5Tracks := room.Tracks[:5]
			images := []string{}
			for _, track := range first5Tracks {
				images = append(images, track.Images[0].URL)
			}
			rooms = append(rooms, RoomInfo{
				ID:     room.ID,
				Name:   room.Name,
				Images: images,
			})

		}
		response := Message{
			Type: "rooms",
			Data: map[string]interface{}{
				"rooms": rooms,
			},
		}

		c.WriteJSON(response)
	})

	handlers.AddEvent("joinRoom", func(data interface{}) {
		fmt.Println("joinRoom data", data)
		args := data.(map[string]interface{})
		roomId := args["roomId"].(string)

		playerName := ""

		if userId != "" {
			playerName = userName
		} else {
			playerName, _ = args["userName"].(string)
		}

		fmt.Println("joining room", roomId)
		joinStatus := false
		room := findRoom(server.rooms, roomId)

		if room != nil {

			joinStatus = room.Join(
				connectionId,
				playerName,
				userId,
				c,
			)

		}
		fmt.Println("join status", joinStatus)

		if !joinStatus {

			c.WriteJSON(Message{
				Type: "joinRoomError",
				Data: map[string]interface{}{
					"message": "unable to join room",
				},
			})

		} else {
			joinedRoom = roomId
			// add room events
			handlers.AddEvent("submitGuess", func(data interface{}) {
				parsedData, _ := data.(map[string]interface{})
				fmt.Printf("parsedData: %v\n", parsedData)
				artistGuess, _ := parsedData["artistGuess"].(string)
				titleGuess, _ := parsedData["titleGuess"].(string)

				room.submitGuess(connectionId, titleGuess, artistGuess)
			})

		}
	})

	handlers.AddEvent("leaveRoom", func(data interface{}) {
		roomID := data.(string)
		fmt.Println("leaving room", roomID)
		room := findRoom(server.rooms, roomID)
		if room != nil {
			room.Leave(connectionId)
		}

	})

	for {
		_, message, err := c.ReadMessage()

		if err != nil {
			log.Println("error reading message from client:", err)
			break
		}

		fmt.Println("message...", string(message))

		msg := parseMessage(message)

		ok := handlers.HandleEvent(msg.Type, msg.Data)

		if !ok {
			c.WriteMessage(websocket.TextMessage, []byte("I'm just an echo server, I don't understand your message"))
		}

	}

}
