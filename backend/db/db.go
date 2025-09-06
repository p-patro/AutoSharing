package db

import (
    "database/sql"
    _ "github.com/mattn/go-sqlite3"
    "log"
)

func InitDB() *sql.DB {
    db, err := sql.Open("sqlite3", "./users.db")
    if err != nil {
        log.Fatal(err)
    }
    createTable := `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        phone TEXT
    );`
    _, err = db.Exec(createTable)
    if err != nil {
        log.Fatal(err)
    }
    return db
}