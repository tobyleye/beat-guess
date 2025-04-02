package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	urlLib "net/url"
	"strings"

	"github.com/gorilla/sessions"
	"github.com/tobyleye/beat-guess/models"
	"gorm.io/gorm"
)

type Token struct {
	AccessToken string `json:"access_token"`
	TokenType   string `json:"token_type"`
	ExpiresIn   int    `json:"expires_in"`
}

type Handlers struct {
	Db           *gorm.DB
	SessionStore *sessions.CookieStore
	Config       *Config
}

type SpotifyUserProfile struct {
	DisplayName string `json:"display_name"`
	Email       string `json:"email"`
	Images      []struct {
		Height int    `json:"height"`
		URL    string `json:"url"`
		Width  int    `json:"width"`
	} `json:"images"`
	Country string `json:"country"`
	ID      string `json:"id"`
}

func respondWithJson(w http.ResponseWriter, statusCode int, data interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	err := json.NewEncoder(w).Encode(data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func readJsonBody(body io.ReadCloser, arg any) error {
	resBody, err := io.ReadAll(body)
	if err != nil {
		return err
	}

	err = json.Unmarshal(resBody, arg)
	if err != nil {
		return err
	}

	return nil
}

func (h Handlers) loginWithSpotify(w http.ResponseWriter, r *http.Request) {
	scope := "user-read-email"

	params := urlLib.Values{
		"client_id":     {h.Config.spotifyClientId},
		"redirect_uri":  {SPOTIFY_REDIRECT_URI},
		"response_type": {"code"},
		"scope":         {scope},
	}

	url := "https://accounts.spotify.com/authorize?" + params.Encode()

	http.Redirect(w, r, url, http.StatusFound)
}

func (h Handlers) spotifyLoginCallback(w http.ResponseWriter, r *http.Request) {

	code := r.URL.Query().Get("code")

	// get token

	tokenReq, err := http.Post(
		"https://accounts.spotify.com/api/token",
		"application/x-www-form-urlencoded",
		strings.NewReader("grant_type=authorization_code&redirect_uri="+SPOTIFY_REDIRECT_URI+"&code="+code+"&client_id="+h.Config.spotifyClientId+"&client_secret="+h.Config.spotifyClientSecret),
	)

	if err != nil {
		log.Print("unable to fetch profile", err)
		w.Write([]byte("unable to fetch profile"))
		return
	}

	defer tokenReq.Body.Close()

	var token Token

	err = readJsonBody(tokenReq.Body, &token)

	if err != nil {
		log.Print("unable to fetch profile", err)
		w.Write([]byte("unable to fetch profile"))
	}

	profileReq, _ := http.NewRequest(http.MethodGet, "https://api.spotify.com/v1/me", nil)

	profileReq.Header.Add("Authorization", "Bearer "+token.AccessToken)

	profileRes, err := http.DefaultClient.Do(profileReq)

	// fetch profile

	if err != nil {
		log.Print("unable to fetch profile", err)
		w.Write([]byte("unable to fetch profile"))
		return
	}

	defer profileRes.Body.Close()

	var profile SpotifyUserProfile

	err = readJsonBody(profileRes.Body, &profile)

	if err != nil {
		log.Print("unable to fetch profile", err)
		w.Write([]byte("unable to fetch profile"))
	}

	var existingUser models.User

	h.Db.Where("email = ?", profile.Email).First(&existingUser)

	if existingUser.UserId == "" {
		// create session
		picture := ""
		if len(profile.Images) > 0 {
			picture = profile.Images[0].URL
		}

		newUser := models.User{
			UserId:      profile.ID,
			Email:       profile.Email,
			DisplayName: profile.DisplayName,
			Picture:     picture,
		}
		h.Db.Create(&newUser)
		existingUser = newUser
	}

	// create user session
	session, err := h.SessionStore.Get(r, "sess")

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Set some session values.
	session.Values["UserId"] = existingUser.UserId
	session.Values["Email"] = existingUser.Email
	session.Values["DisplayName"] = existingUser.DisplayName
	session.Values["Picture"] = existingUser.Picture

	// Save it before we write to the response/return from the handler.
	err = session.Save(r, w)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	fmt.Fprint(w, "logged in successfully")
}

func (h Handlers) GetSession(w http.ResponseWriter, r *http.Request) {
	session, err := h.SessionStore.Get(r, "sess")
	fmt.Printf("session: %v\n", session)
	fmt.Printf("err: %v\n", err)

	if err == nil {

		user := map[string]interface{}{
			"userId":      session.Values["UserId"],
			"email":       session.Values["Email"],
			"displayName": session.Values["DisplayName"],
			"picture":     session.Values["Picture"],
		}

		if user["userId"] != nil {
			respondWithJson(w, http.StatusOK, user)
			return
		}
	}

	respondWithJson(w, http.StatusUnauthorized, map[string]string{})
}
