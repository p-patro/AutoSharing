package handlers

import (
    "encoding/json"
    "net/http"
    "AutoSharing_Backend_/internal/models"
    "AutoSharing-backend/internal/services"
)

func FindAutosHandler(w http.ResponseWriter, r *http.Request) {
    var req models.UserRequest
    json.NewDecoder(r.Body).Decode(&req)

    matches := services.FindMatchingAutos(req.Pickup, req.Destination)

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(matches)
}
