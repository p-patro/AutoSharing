package handlers

import (
	"encoding/json"
	"net/http"

	//"AutoSharing_Backend_New/internal/models"
	"AutoSharing_Backend_New/internal/services"
)

type AutoHandler struct {
	AutoService *services.AutoService	
}

// Constructor
func NewAutoHandler(service *services.AutoService) *AutoHandler {
	return &AutoHandler{AutoService: service}
}

// HandleFindAutos handles GET /find-autos?pickup=...&destination=...
func (h *AutoHandler) HandleFindAutos(w http.ResponseWriter, r *http.Request) {
	pickup := r.URL.Query().Get("pickup")
	destination := r.URL.Query().Get("destination")

	if pickup == "" || destination == "" {
		http.Error(w, "pickup and destination are required", http.StatusBadRequest)
		return
	}

	autos := h.AutoService.FindAutos(pickup, destination)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(autos)
}
