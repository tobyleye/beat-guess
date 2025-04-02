package main

import "github.com/gorilla/websocket"

type Player struct {
	Websocket *websocket.Conn
	Name      string
	Score     int
	UserId    string
}

func (p *Player) Format() map[string]interface{} {
	return map[string]interface{}{
		"name":  p.Name,
		"score": p.Score,
	}
}
