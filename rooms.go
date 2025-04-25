package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"os"
	"strings"
	"time"

	"github.com/gorilla/websocket"
	"github.com/tobyleye/beat-guess/models"
	"gorm.io/gorm"
)

var TRACKS_PER_ROUND = 4
var DELAY_SECONDS = 5
var PREVIEW_SECONDS = 30
var DELAY_BETWEEN_ROUNDS_SECONDS = 8

type Artists = []struct {
	ExternalUrls struct {
		Spotify string `json:"spotify"`
	} `json:"external_urls"`
	Href string `json:"href"`
	ID   string `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
	URI  string `json:"uri"`
}

type Track struct {
	Artists    Artists     `json:"artists"`
	PreviewURL interface{} `json:"preview_url"`
	Name       string      `json:"name"`
	Images     []struct {
		Height int    `json:"height"`
		URL    string `json:"url"`
		Width  int    `json:"width"`
	} `json:"images"`
}

type GuessState struct {
	GuessedTitle  bool `json:"guessedTitle"`
	GuessedArtist bool `json:"guessedArtist"`
}

type Room struct {
	ID                string  `json:"id"`
	Name              string  `json:"name"`
	Tracks            []Track `json:"tracks"`
	Players           map[string]*Player
	PlayedTracks      []Track `json:"playedTracks"`
	currentTrack      *Track
	roundTracks       []Track
	currentTrackIndex int
	State             string `json:"state"`
	Score             map[string]*GuessState
	db                *gorm.DB
}

type RoomInfo struct {
	Name   string   `json:"name"`
	ID     string   `json:"id"`
	Images []string `json:"images"`
}

func selectRoundTracks(tracks []Track) []Track {
	randomTracks := []Track{}
	for range TRACKS_PER_ROUND {
		// Seed the random number generator
		rand.Seed(time.Now().UnixNano())
		randomTrackIndex := rand.Intn(len(tracks))
		randomTrack := tracks[randomTrackIndex]
		nextSliceStartIndex := min(randomTrackIndex+1, len(tracks))
		tracks = append(tracks[0:randomTrackIndex], tracks[nextSliceStartIndex:]...)
		randomTracks = append(randomTracks, randomTrack)
	}
	return randomTracks

}

func (r *Room) Join(client *client) bool {
	playerId := client.Id
	playerName, _ := client.UserData["name"].(string)
	if playerName == "" {
		playerName = fmt.Sprintf("player %d", len(r.Players)+1)
	}

	player := Player{
		Name:      playerName,
		Score:     0,
		Websocket: client.Websocket,
		UserId:    client.Id,
	}

	// initialize players map if it's nil
	if r.Players == nil {
		r.Players = make(map[string]*Player)
	}

	r.Players[playerId] = &player
	fmt.Printf("player %s joined room %s (%d)", playerName, r.Name, len(r.Players))

	// send the player the room info
	player.Websocket.WriteJSON(
		Message{
			Type: "room",
			Data: map[string]interface{}{
				"players":           r.FormatPlayers(),
				"player":            player.Format(),
				"tracksPerRound":    TRACKS_PER_ROUND,
				"currentTrackIndex": r.currentTrackIndex,
				"previewSeconds":    PREVIEW_SECONDS,
				"delaySeconds":      DELAY_SECONDS,
				"state":             r.State,
			},
		},
	)

	// broadcast join
	r.Broadcast(Message{
		Type: "newPlayer",
		Data: map[string]interface{}{
			"player":  player.Format(),
			"players": r.FormatPlayers(),
		},
	}, player.Websocket)

	return true
}

func (r *Room) FormatPlayers() []map[string]interface{} {

	players := []map[string]interface{}{}

	for _, player := range r.Players {
		players = append(players, player.Format())
	}

	return players
}

func (r *Room) Leave(playerId string) bool {

	delete(r.Players, playerId)
	return true
}

func (r *Room) Broadcast(data interface{}, sender *websocket.Conn) {
	fmt.Printf("broadcasting to %d players\n", len(r.Players))
	for _, player := range r.Players {
		// if broadcast by a sender, don't send to the sender. hehe
		if sender != nil && player.Websocket == sender {
			continue
		}
		player.Websocket.WriteJSON(data)
	}
}

func (r *Room) NewRound() {

	// reset players score
	// initialize round tracks

	roundTracks := selectRoundTracks(r.Tracks)
	r.roundTracks = roundTracks

	for i, track := range r.roundTracks {
		r.currentTrack = &track
		r.currentTrackIndex = i

		r.State = "playing"
		fmt.Println("playing track", track.Name, "in room", r.ID)
		r.Broadcast(Message{
			Type: "playTrack",
			Data: track,
		}, nil)

		// preview wait
		time.Sleep(time.Duration(PREVIEW_SECONDS) * time.Second)
		r.State = "idle"
		// reset room score
		r.Score = map[string]*GuessState{}
		// wait before playing next track
		time.Sleep(time.Duration(DELAY_SECONDS) * time.Second)
	}

	r.savePlayersScore()
	r.Broadcast(Message{
		Type: "roundOver",
		Data: map[string]interface{}{
			"message": "game over! here's how you did",
			"players": r.FormatPlayers(),
		},
	}, nil)
	r.State = "waiting"

	time.Sleep(time.Duration(DELAY_BETWEEN_ROUNDS_SECONDS) * time.Second)
}

func (r *Room) savePlayersScore() {
	for _, player := range r.Players {
		if player.UserId != "" {
			// save player details in room
			r.db.Save(&models.User{
				UserId: player.UserId,
				Score:  player.Score,
			})
		}

	}
}

func (r *Room) Start() {
	// start rounds
	go func() {
		for {

			r.NewRound()
		}
	}()

}

func (r *Room) GetInfo() RoomInfo {

	sampleTracks := r.Tracks[:5]
	images := []string{}
	for _, track := range sampleTracks {
		images = append(images, track.Images[0].URL)
	}

	return RoomInfo{
		ID:     r.ID,
		Name:   r.Name,
		Images: images,
	}

}

func (r *Room) submitGuess(playerId string, titleGuess string, artistGuess string) {

	fmt.Printf("player %s submitted\ntitle guess: %s\nartist guess: %s\n", playerId, titleGuess, artistGuess)

	artistGuess = strings.ToLower(artistGuess)
	titleGuess = strings.ToLower(titleGuess)

	player, playerExists := r.Players[playerId]

	isCorrectArtist := func(guessedArtist string, artists Artists) bool {
		for _, a := range artists {
			artistName := strings.ToLower(a.Name)
			if guessedArtist == artistName {
				return true
			}
		}
		return false
	}

	if playerExists && r.currentTrack.Name != "" && r.State == "playing" {
		trackTitle := strings.ToLower(r.currentTrack.Name)
		fmt.Println("track title:", trackTitle)

		playerGuessState, ok := r.Score[playerId]
		if !ok {
			playerGuessState = &GuessState{
				GuessedTitle:  false,
				GuessedArtist: false,
			}
		}

		r.Score[playerId] = playerGuessState

		if titleGuess != "" && playerGuessState.GuessedTitle ||
			artistGuess != "" && playerGuessState.GuessedArtist {
			//guess already submitted
			player.Websocket.WriteJSON(
				Message{
					Type: "guessResult",
					Data: map[string]interface{}{
						"score":           0,
						"alreadyAnswered": true,
						"correct":         false,
						"state":           playerGuessState,
					},
				},
			)

		} else if titleGuess != "" && titleGuess == trackTitle {
			// title guess is correct
			playerGuessState.GuessedTitle = true
			player.Score += 5

			player.Websocket.WriteJSON(
				Message{
					Type: "guessResult",
					Data: map[string]interface{}{
						"score":   5,
						"correct": true,
						"player":  player.Format(),
						"state":   playerGuessState,
					},
				},
			)

			r.Broadcast(Message{
				Type: "players",
				Data: map[string]interface{}{
					"players": r.FormatPlayers(),
				},
			}, nil)

		} else if artistGuess != "" && isCorrectArtist(artistGuess, r.currentTrack.Artists) {
			// artist guess is correct

			playerGuessState.GuessedArtist = true
			player.Score += 10

			player.Websocket.WriteJSON(
				Message{
					Type: "guessResult",
					Data: map[string]interface{}{
						"score":   10,
						"correct": true,
						"player":  player.Format(),
						"state":   playerGuessState,
					},
				},
			)

			r.Broadcast(Message{
				Type: "players",
				Data: map[string]interface{}{
					"players": r.FormatPlayers(),
				},
			}, nil)

		} else {
			// guess is wrong
			player.Websocket.WriteJSON(
				Message{
					Type: "guessResult",
					Data: map[string]interface{}{
						"score":   0,
						"correct": false,
						"state":   playerGuessState,
					},
				},
			)

		}
	}
}

func createRooms(db *gorm.DB) ([]*Room, error) {
	tracksFile, err := os.ReadFile("./tracks.json")
	if err != nil {
		return nil, err
	}

	var rooms []*Room

	json.Unmarshal(tracksFile, &rooms)

	// initialize room players
	for _, room := range rooms {
		room.db = db
		room.Players = make(map[string]*Player)
	}

	return rooms, nil
}
