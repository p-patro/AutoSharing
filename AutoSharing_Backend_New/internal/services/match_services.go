package services

import "AutoSharing-backend/internal/models"

// Fake DB of autos
var autos = []models.Auto{
    {ID: 1, Driver: "Ramesh", RouteFrom: "Station", RouteTo: "Market"},
    {ID: 2, Driver: "Suresh", RouteFrom: "Temple", RouteTo: "Mall"},
}

func FindMatchingAutos(pickup, destination string) []models.Auto {
    var matches []models.Auto
    for _, auto := range autos {
        if auto.RouteFrom == pickup && auto.RouteTo == destination {
            matches = append(matches, auto)
        }
    }
    return matches
}
