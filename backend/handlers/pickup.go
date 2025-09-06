package handlers

import (
	"database/sql"

	"github.com/backend/autosharing-backend/models"
	"gofr.dev/pkg/gofr"
)

func CreatePickup(db *sql.DB) gofr.Handler {
	return func(ctx *gofr.Context) (interface{}, error) {
		var req models.Pickup
		if err := ctx.Bind(&req); err != nil {
			return nil, err
		}
		_, err := db.Exec(
			"INSERT INTO pickups (pickup_location, drop_location, time_from, time_to, num_people) VALUES (?, ?, ?, ?, ?)",
			req.PickupLocation, req.DropLocation, req.TimeFrom, req.TimeTo, req.NumPeople,
		)
		if err != nil {
			return nil, err
		}
		return map[string]string{"message": "Pickup request created"}, nil
	}
}

type RideSearchRequest struct {
	PickupLocation string `json:"pickup_location"`
	DropLocation   string `json:"drop_location"`
	TimeFrom       string `json:"time_from"`
	TimeTo         string `json:"time_to"`
}

func SearchRides(db *sql.DB) gofr.Handler {
	return func(ctx *gofr.Context) (interface{}, error) {
		var req RideSearchRequest
		if err := ctx.Bind(&req); err != nil {
			return nil, err
		}

		rows, err := db.Query(`
            SELECT id, pickup_location, drop_location, time_from, time_to, num_people
            FROM pickups
            WHERE pickup_location = ? AND drop_location = ?
            AND (
                (time_from <= ? AND time_to >= ?) OR
                (time_from >= ? AND time_from <= ?)
            )
        `, req.PickupLocation, req.DropLocation, req.TimeTo, req.TimeFrom, req.TimeFrom, req.TimeTo)
		if err != nil {
			return nil, err
		}
		defer rows.Close()

		var rides []map[string]interface{}
		for rows.Next() {
			var id, numPeople int
			var pickupLoc, dropLoc, timeFrom, timeTo string
			rows.Scan(&id, &pickupLoc, &dropLoc, &timeFrom, &timeTo, &numPeople)
			rides = append(rides, map[string]interface{}{
				"id": id, "pickup_location": pickupLoc, "drop_location": dropLoc,
				"time_from": timeFrom, "time_to": timeTo, "num_people": numPeople,
			})
		}
		return rides, nil
	}
}
