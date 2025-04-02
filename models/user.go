package models

import "time"

type User struct {
	UserId      string    `gorm:"primaryKey;size:200;unique" json:"user_id"`
	Email       string    `gorm:"size:200;unique" json:"username"`
	DisplayName string    `gorm:"size:200" json:"name"`
	Picture     string    `json:"picture"`
	CreatedAt   time.Time `json:"created_at"`
}
