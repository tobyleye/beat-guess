package main

import (
	"github.com/gorilla/websocket"
)

type client struct {
	Websocket *websocket.Conn
	Id        string
	UserData  map[string]interface{}
	Room      *Room
}

// func (c *client) Read() {
// 	for {
// 		_, message, err := c.Websocket.ReadMessage()

// 		if err != nil {
// 			log.Println("error reading message from client:", err)
// 			break
// 		}

// 		fmt.Println("message...", string(message))

// 		// msg := parseMessage(message)

// 		// ok := handlers.HandleEvent(msg.Type, msg.Data)

// 		// if !ok {
// 		// 	c.WriteMessage(websocket.TextMessage, []byte("I'm just an echo server, I don't understand your message"))
// 		// }

// 	}

// }
