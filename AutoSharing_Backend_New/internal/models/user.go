package models

type UserRequest struct {
    Pickup      string  `json:"pickup"`
    Destination string  `json:"destination"`
}
