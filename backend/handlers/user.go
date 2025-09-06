package handlers

import (
	"database/sql"
	"log"

	"github.com/backend/autosharing-backend/models"

	"gofr.dev/pkg/gofr"
	"golang.org/x/crypto/bcrypt"

	"math/rand"
	"time"
)

func SignIn(db *sql.DB) gofr.Handler {
	return func(ctx *gofr.Context) (interface{}, error) {
		var req struct {
			Phone string `json:"phone"`
		}
		if err := ctx.Bind(&req); err != nil {
			return map[string]string{"error": "Invalid request"}, nil
		}

		var exists bool
		err := db.QueryRow("SELECT EXISTS(SELECT 1 FROM users WHERE phone = ?)", req.Phone).Scan(&exists)
		if err != nil {
			return map[string]string{"error": "Database error"}, nil
		}
		if !exists {
			return map[string]string{"error": "Phone number not found. Please create an account first."}, nil
		}

		rand.Seed(time.Now().UnixNano())
		otp := rand.Intn(900000) + 100000
		log.Printf("OTP for %s: %d", req.Phone, otp)

		return map[string]interface{}{"message": "OTP sent", "otp": otp}, nil
	}
}

func CreateAccount(db *sql.DB) gofr.Handler {
	return func(ctx *gofr.Context) (interface{}, error) {
		var user models.User
		if err := ctx.Bind(&user); err != nil {
			return nil, err
		}
		hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
		_, err := db.Exec("INSERT INTO users (first_name, last_name, email, password, phone) VALUES (?, ?, ?, ?, ?)",
			user.FirstName, user.LastName, user.Email, string(hashedPassword), user.Phone)
		if err != nil {
			return nil, err
		}
		return map[string]string{"message": "Account created"}, nil
	}
}
