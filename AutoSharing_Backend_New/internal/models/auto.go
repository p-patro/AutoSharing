package models

type Auto struct {
    ID       int    `json:"id"`
    Driver   string `json:"driver"`
    RouteFrom string `json:"route_from"`
    RouteTo   string `json:"route_to"`
}
