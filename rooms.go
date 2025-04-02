package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"os"
	"strings"
	"time"

	"github.com/gorilla/websocket"
)

var TRACKS_PER_ROUND = 15
var DELAY_SECONDS = 5
var PREVIEW_SECONDS = 30

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
	Players           map[string]Player
	PlayedTracks      []Track `json:"playedTracks"`
	currentTrack      *Track
	roundTracks       []Track
	currentTrackIndex int
	State             string `json:"state"`
	Score             map[string]*GuessState
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

func (r *Room) Join(playerId string, playerName string, userId string, conn *websocket.Conn) bool {
	player := Player{
		Name:      playerName,
		Score:     0,
		Websocket: conn,
		UserId:    userId,
	}

	// initialize players map if it's nil
	if r.Players == nil {
		r.Players = make(map[string]Player)
	}

	r.Players[playerId] = player
	fmt.Println("joined this room!", len(r.Players))

	// send the player the room info

	r.Broadcast(Message{
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
	}, nil)
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
}

func (r *Room) Start() {
	for {

		r.NewRound()
		// round over
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
			fmt.Println(">>> inside title guess...")
			playerGuessState.GuessedTitle = true
			player.Score += 5

			player.Websocket.WriteJSON(
				Message{
					Type: "guessResult",
					Data: map[string]interface{}{
						"score":   5,
						"correct": true,
						"players": r.FormatPlayers(),
						"state":   playerGuessState,
					},
				},
			)

			r.Broadcast(Message{
				Type: "players",
				Data: map[string]interface{}{
					"player": player.Format(),
				},
			}, player.Websocket)

		} else if artistGuess != "" && isCorrectArtist(artistGuess, r.currentTrack.Artists) {
			// artist guest is correct

			playerGuessState.GuessedArtist = true
			player.Score += 10

			player.Websocket.WriteJSON(
				Message{
					Type: "guessResult",
					Data: map[string]interface{}{
						"score":   10,
						"correct": true,
						"players": r.FormatPlayers(),
						"state":   playerGuessState,
					},
				},
			)

			r.Broadcast(Message{
				Type: "players",
				Data: map[string]interface{}{
					"player": player.Format(),
				},
			}, player.Websocket)

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

func ReadRooms() ([]*Room, error) {
	tracksFile, err := os.ReadFile("./tracks.json")
	if err != nil {
		return nil, err
	}

	var rooms []*Room

	json.Unmarshal(tracksFile, &rooms)

	return rooms, nil
}
