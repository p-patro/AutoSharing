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
	// app.POST("/api/generate-otp", handlers.GenerateOTPHandler(database))
	// app.POST("/api/verify-otp", handlers.VerifyOTPHandler(database))
	app.POST("/api/signin", handlers.SignIn(database))
	app.POST("/api/verify-signin", handlers.VerifySignIn(database))

	app.GET("/", func(ctx *gofr.Context) (interface{}, error) {
		return map[string]string{"message": "Backend is running"}, nil
	})
	app.Run()

}
