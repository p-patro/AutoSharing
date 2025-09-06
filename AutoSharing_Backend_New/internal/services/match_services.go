package services

import "AutoSharing_Backend_New/internal/models"

// Fake DB of autos
var autos = []models.Auto{
	{ID: 1, Driver: "Ramesh", RouteFrom: "Station", RouteTo: "Market"},
	{ID: 2, Driver: "Suresh", RouteFrom: "Temple", RouteTo: "Mall"},
}

// AutoService provides methods to interact with autos
type AutoService struct{}

// Constructor
func NewAutoService() *AutoService {
	return &AutoService{}
}

// Method on AutoService (instead of free function)
func (s *AutoService) FindAutos(pickup, destination string) []models.Auto {
	var matches []models.Auto
	for _, auto := range autos {
		if auto.RouteFrom == pickup && auto.RouteTo == destination {
			matches = append(matches, auto)
		}
	}
	return matches
}
