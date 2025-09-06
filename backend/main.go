package main

import (
	"github.com/backend/autosharing-backend/db"
	"github.com/backend/autosharing-backend/handlers"
	"gofr.dev/pkg/gofr"
)

func main() {
	app := gofr.New()
	database := db.InitDB()
	app.POST("/create-account", handlers.CreateAccount(database))
	app.POST("/signin", handlers.SignIn(database))
	app.POST("/pickup", handlers.CreatePickup(database))
	app.POST("/rides/search", handlers.SearchRides(database))
	app.GET("/", func(ctx *gofr.Context) (interface{}, error) {
		return map[string]string{"message": "Backend is running"}, nil
	})
	app.Run()

}
