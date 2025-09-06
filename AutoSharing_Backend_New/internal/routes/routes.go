package routes

import (
	"net/http"

	"AutoSharing_Backend_New/internal/handlers"
	"AutoSharing_Backend_New/internal/services"
)

// RegisterRoutes sets up all routes
func RegisterRoutes() http.Handler {
	// Initialize services
	autoService := services.NewAutoService()

	// Initialize handlers
	autoHandler := handlers.NewAutoHandler(autoService)
	userHandler := handlers.NewUserHandler(autoService)

	// Create a new ServeMux (router)
	mux := http.NewServeMux()

	// Routes
	mux.HandleFunc("/find-autos", autoHandler.HandleFindAutos) // GET /find-autos?pickup=...&destination=...
	mux.HandleFunc("/user/find-autos", userHandler.FindAutosHandler) // POST with JSON body

	return mux
}
