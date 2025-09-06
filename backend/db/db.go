package db

import (
	"database/sql"
	"log"

	_ "modernc.org/sqlite"
)

func InitDB() *sql.DB {
	db, err := sql.Open("sqlite", "./users.db")
	if err != nil {
		log.Fatal(err)
	}
	createTable := `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT,
        last_name TEXT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        phone TEXT
    );`
	_, err = db.Exec(createTable)
	if err != nil {
		log.Fatal(err)
	}

	createPickupTable := `
    CREATE TABLE IF NOT EXISTS pickups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        pickup_location TEXT NOT NULL,
        drop_location TEXT NOT NULL,
        time_from TEXT NOT NULL,
        time_to TEXT NOT NULL,
        num_people INTEGER NOT NULL
    );`
	_, err = db.Exec(createPickupTable)
	if err != nil {
		log.Fatal(err)
	}
	return db
}
