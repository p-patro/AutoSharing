package models

type Pickup struct {
	ID             int    `json:"id"`
	PickupLocation string `json:"pickup_location"`
	DropLocation   string `json:"drop_location"`
	TimeFrom       string `json:"time_from"` // ISO 8601 string, e.g. "15:00"
	TimeTo         string `json:"time_to"`
	NumPeople      int    `json:"num_people"`
}
