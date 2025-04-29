package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/gorilla/sessions"
	"github.com/markbates/goth/gothic"
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

func injectSpotifyProvider(r *http.Request) {
	query := r.URL.Query()
	query.Add("provider", "spotify")
	r.URL.RawQuery = query.Encode()
}

func (h Handlers) loginWithSpotify(w http.ResponseWriter, r *http.Request) {
	// scope := "user-read-email"
	injectSpotifyProvider(r)
	gothic.BeginAuthHandler(w, r)

}

func (h Handlers) spotifyLoginCallback(w http.ResponseWriter, r *http.Request) {

	injectSpotifyProvider(r)

	user, err := gothic.CompleteUserAuth(w, r)

	fmt.Println("raw data:", user.RawData)

	if err != nil {
		log.Print("unable to fetch profile", err)
		w.Write([]byte("unable to fetch profile"))
		return
	}

	var existingUser models.User

	h.Db.Where("email = ?", user.Email).First(&existingUser)

	if existingUser.UserId == "" {
		// create user
		log.Printf("creating user with avatar %s\n", user.AvatarURL)
		newUser := models.User{
			UserId:      user.UserID,
			Email:       user.Email,
			DisplayName: user.Name,
			Picture:     user.AvatarURL,
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

	w.Header().Set("Location", "http://localhost:5188")
	w.WriteHeader(http.StatusTemporaryRedirect)
}

func (h Handlers) GetSession(w http.ResponseWriter, r *http.Request) {
	session, err := h.SessionStore.Get(r, "sess")

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
