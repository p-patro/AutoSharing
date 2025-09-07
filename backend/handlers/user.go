package handlers

import (
	"crypto/rand"
	"crypto/sha256"
	"database/sql"
	"encoding/base64"
	"fmt"
	"log"
	"time"

	"github.com/backend/autosharing-backend/models"
	"gofr.dev/pkg/gofr"
	"golang.org/x/crypto/bcrypt"
)

// Add these helper functions at the top of the file
func generateOTP() (string, error) {
	b := make([]byte, 3)
	if _, err := rand.Read(b); err != nil {
		return "", err
	}
	num := int(b[0])<<16 | int(b[1])<<8 | int(b[2])
	otp := fmt.Sprintf("%06d", num%1000000)
	return otp, nil
}

func hashOTP(otp string) string {
	hash := sha256.Sum256([]byte(otp))
	return base64.StdEncoding.EncodeToString(hash[:])
}

// Update the SignIn function with debug logging
func SignIn(db *sql.DB) gofr.Handler {
	return func(ctx *gofr.Context) (interface{}, error) {
		var req struct {
			Phone string `json:"phone"`
		}
		if err := ctx.Bind(&req); err != nil {
			log.Printf("Bind error: %v", err)
			return map[string]interface{}{
				"data": map[string]interface{}{
					"success": false,
					"message": "Invalid request",
				},
			}, nil
		}

		// Debug log
		log.Printf("Attempting signin for phone: %s", req.Phone)

		var exists bool
		err := db.QueryRow("SELECT EXISTS(SELECT 1 FROM users WHERE phone = ?)", req.Phone).Scan(&exists)
		if err != nil {
			log.Printf("Database error checking user: %v", err)
			return map[string]interface{}{
				"data": map[string]interface{}{
					"success": false,
					"message": "Database error",
				},
			}, nil
		}
		if !exists {
			log.Printf("Phone number not found: %s", req.Phone)
			return map[string]interface{}{
				"data": map[string]interface{}{
					"success": false,
					"message": "Phone number not found. Please create an account first.",
				},
			}, nil
		}

		otp, err := generateOTP()
		if err != nil {
			log.Printf("OTP generation error: %v", err)
			return map[string]interface{}{
				"data": map[string]interface{}{
					"success": false,
					"message": "Failed to generate OTP",
				},
			}, nil
		}

		otpHash := hashOTP(otp)
		expiry := time.Now().Add(5 * time.Minute)

		otpModel := &models.OTP{
			UserID:    req.Phone,
			OTPHash:   otpHash,
			ExpiresAt: expiry,
		}

		if err := otpModel.Save(db); err != nil {
			log.Printf("Failed to save OTP: %v", err)
			return map[string]interface{}{
				"data": map[string]interface{}{
					"success": false,
					"message": "Failed to process signin",
				},
			}, nil
		}

		// Log OTP for development
		log.Printf("Development: OTP for %s: %s", req.Phone, otp)

		return map[string]interface{}{
			"success": true,
			"message": "OTP sent successfully",
		}, nil
	}
}

// VerifySignIn validates OTP and completes signin
func VerifySignIn(db *sql.DB) gofr.Handler {
	return func(ctx *gofr.Context) (interface{}, error) {
		var req struct {
			Phone string `json:"phone"`
			OTP   string `json:"otp"`
		}

		if err := ctx.Bind(&req); err != nil {
			return map[string]interface{}{
				"data": map[string]interface{}{
					"success": false,
					"message": "Invalid request",
				},
			}, nil
		}

		// Verify OTP
		otpHash := hashOTP(req.OTP)
		var storedOTP models.OTP
		err := db.QueryRow(
			"SELECT id, user_id, otp_hash, expires_at FROM otps WHERE user_id = ? AND otp_hash = ?",
			req.Phone, otpHash,
		).Scan(&storedOTP.ID, &storedOTP.UserID, &storedOTP.OTPHash, &storedOTP.ExpiresAt)

		if err == sql.ErrNoRows {
			return map[string]interface{}{
				"data": map[string]interface{}{
					"success": false,
					"message": "Invalid OTP",
				},
			}, nil
		}

		if time.Now().After(storedOTP.ExpiresAt) {
			return map[string]interface{}{
				"data": map[string]interface{}{
					"success": false,
					"message": "OTP expired",
				},
			}, nil
		}

		// Delete used OTP
		_, err = db.Exec("DELETE FROM otps WHERE id = ?", storedOTP.ID)
		if err != nil {
			log.Printf("Failed to delete used OTP: %v", err)
		}

		// Get user details
		var user models.User
		err = db.QueryRow(
			"SELECT id, first_name, last_name, email, phone FROM users WHERE phone = ?",
			req.Phone,
		).Scan(&user.ID, &user.FirstName, &user.LastName, &user.Email, &user.Phone)

		if err != nil {
			return map[string]interface{}{
				"data": map[string]interface{}{
					"success": false,
					"message": "Failed to get user details",
				},
			}, nil
		}

		return map[string]interface{}{
			"success": true,
			"message": "Signed in successfully",
			"user":    user,
		}, nil
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
