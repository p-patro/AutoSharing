package models

import (
    "database/sql"
    "time"
)

type OTP struct {
    ID        int
    UserID    string
    OTPHash   string
    ExpiresAt time.Time
}

// Store OTP in DB
func (o *OTP) Save(db *sql.DB) error {
    _, err := db.Exec(
        "INSERT INTO otps (user_id, otp_hash, expires_at) VALUES (?, ?, ?)",
        o.UserID, o.OTPHash, o.ExpiresAt,
    )
    return err
}

// Find OTP by user_id and hash
func FindOTP(db *sql.DB, userID, otpHash string) (*OTP, error) {
    row := db.QueryRow("SELECT id, user_id, otp_hash, expires_at FROM otps WHERE user_id = ? AND otp_hash = ?", userID, otpHash)
    var otp OTP
    err := row.Scan(&otp.ID, &otp.UserID, &otp.OTPHash, &otp.ExpiresAt)
    if err != nil {
        return nil, err
    }
    return &otp, nil
}

// Delete OTP after verification
func DeleteOTP(db *sql.DB, userID, otpHash string) error {
    _, err := db.Exec("DELETE FROM otps WHERE user_id = ? AND otp_hash = ?", userID, otpHash)
    return err
}