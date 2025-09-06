package handlers

import (
	"encoding/json"
	"net/http"

	"AutoSharing_Backend_New/internal/models"
	"AutoSharing_Backend_New/internal/services"
)

type UserHandler struct {
	AutoService *services.AutoService
}

// Constructor
func NewUserHandler(service *services.AutoService) *UserHandler {
	return &UserHandler{AutoService: service}
}

func (h *UserHandler) FindAutosHandler(w http.ResponseWriter, r *http.Request) {
	var req models.UserRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	matches := h.AutoService.FindAutos(req.Pickup, req.Destination)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(matches)
}
