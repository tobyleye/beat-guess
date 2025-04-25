package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/sessions"
	"github.com/gorilla/websocket"
	"gorm.io/gorm"
)

type GameServer struct {
	connections  map[string]*websocket.Conn
	rooms        []*Room
	SessionStore *sessions.CookieStore
	message      chan IncomingMessage
	db           *gorm.DB
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func (server *GameServer) handleConnection(w http.ResponseWriter, r *http.Request) {
	c, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade error: ", err)
		return
	}

	session, err := server.SessionStore.Get(r, "sess")

	clientId := r.PathValue("id")

	newClient := client{
		Id:        clientId,
		Websocket: c,
	}

	// if err != nil {
	// 	return
	// }

	fmt.Println("session store error --", err)

	if err == nil {
		user := map[string]interface{}{}
		userId, _ := session.Values["UserId"].(string)
		userName, _ := session.Values["DisplayName"].(string)

		user["id"] = userId
		user["username"] = userName

		newClient.UserData = user

	}

	fmt.Println("connection id:", clientId)

	num := len(server.connections) + 1

	c.WriteJSON(Message{Type: "greetings",
		Data: fmt.Sprintf("Hello, client!, you are number %d in our list\n. I'm more that an echo server and i'm at your disposal", num)})

	server.connections[clientId] = c

	defer c.Close()

	for {

		var msg IncomingMessage
		err := c.ReadJSON(&msg)

		fmt.Println("message received...", msg)

		if err != nil {
			log.Println("message couldn't be parsed ", err)
		} else {
			msg.Sender = &newClient
			server.message <- msg

		}

	}

}

func (server *GameServer) run() {
	fmt.Print("server is running...")
	for {
		msg := <-server.message
		fmt.Println("a message was received ..")
		fmt.Printf("message type: %s\nclient id: %s\n", msg.Type, msg.Sender.Id)

		switch msgType := msg.Type; msgType {

		case "getRooms":
			roomInfos := []RoomInfo{}

			for _, room := range server.rooms {

				roomInfo := room.GetInfo()
				roomInfos = append(roomInfos, roomInfo)

			}
			response := Message{
				Type: "rooms",
				Data: map[string]interface{}{
					"rooms": roomInfos,
				},
			}

			msg.Sender.Websocket.WriteJSON(response)

		case "joinRoom":
			args, _ := msg.Data.(map[string]interface{})
			fmt.Println("args..", args)
			roomId, _ := args["roomId"].(string)

			fmt.Println("joining room", roomId)
			joinStatus := false

			room := findRoom(server.rooms, roomId)

			if room != nil {
				joinStatus = room.Join(
					msg.Sender,
				)

			}
			fmt.Println("join status", joinStatus)

			if !joinStatus {

				msg.Sender.Websocket.WriteJSON(Message{
					Type: "joinRoomError",
					Data: map[string]interface{}{
						"message": "unable to join room",
					},
				})

			} else {
				// user joined room successfully
				msg.Sender.Room = room
			}

		case "submitGuess":

			if msg.Sender.Room != nil {
				parsedData, _ := msg.Data.(map[string]interface{})
				fmt.Printf("parsedData: %v\n", parsedData)
				artistGuess, _ := parsedData["artist"].(string)
				titleGuess, _ := parsedData["title"].(string)

				msg.Sender.Room.submitGuess(msg.Sender.Id, titleGuess, artistGuess)

			} else {
				fmt.Println("sorry you are not in a room yet..")
			}

		case "leaveRoom":
			if msg.Sender.Room != nil {
				roomID := msg.Data.(string)
				fmt.Println("leaving room", roomID)
				msg.Sender.Room.Leave(msg.Sender.Id)

			}

		}

	}
}
