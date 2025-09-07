Website link - https://auto-sharing.vercel.app/

# AutoSharing

A full-stack ride-sharing application with a Go (Gofr) backend, SQLite database, and a modern JavaScript frontend. Users can create accounts, sign in with OTP, and book rides by selecting pickup and drop locations on a map.

---

## Features

- **User Registration & Sign-In**
  - Create account with first name, last name, email, phone, and password
  - OTP-based sign-in for secure authentication

- **Ride Booking**
  - Select pickup and drop locations using Google Maps
  - Store and use precise latitude and longitude for locations
  - Specify pickup time (with AM/PM) and number of people
  - Book rides and store all details in the database

- **Tech Stack**
  - **Backend:** Go (Gofr framework), SQLite
  - **Frontend:** Vanilla JavaScript, Google Maps API, Tailwind CSS
  - **API:** RESTful JSON endpoints

---

## Getting Started

### Prerequisites

- Go 1.25+ installed
- Node.js and pnpm (for frontend)
- [Google Maps API Key](GOOGLE_MAPS_SETUP.md)
- (Optional) [DB Browser for SQLite](https://sqlitebrowser.org/) for inspecting the database

### Backend Setup

1. **Install dependencies:**
   ```powershell
   cd backend
   go mod tidy
   ```

2. **Run the backend server:**
   ```powershell
   go run main.go
   ```
   The server runs on `http://localhost:8000`.

3. **Database:**
   - SQLite database file: `backend/users.db`
   - Tables: `users`, `pickups`, `otps`

### Frontend Setup

1. **Install dependencies:**
   ```powershell
   pnpm install
   ```

2. **Set up Google Maps API key:**
   - See [GOOGLE_MAPS_SETUP.md](GOOGLE_MAPS_SETUP.md) for instructions.

3. **Start the frontend (if using a dev server):**
   ```powershell
   pnpm start
   ```
   Or open `index.html` directly in your browser.

---

## Project Structure

```
AutoSharing/
  backend/
    db/
      db.go           # Database initialization and schema
    handlers/
      user.go         # User account and sign-in handlers
      pickup.go       # Ride booking handlers
    models/
      users.go        # User model
      pickup.go       # Pickup (ride) model
      otp.go          # OTP model
    main.go           # Entry point for backend server
    users.db          # SQLite database file
  src/
    createaccount.js  # Create account page logic
    signin.js         # Sign-in and OTP logic
    travel-form.js    # Ride booking form and map integration
    pickup.js         # Pickup page logic
    travel.js         # Travel page logic
    styles.css        # Styles (Tailwind CSS)
  index.html          # Main HTML file
  GOOGLE_MAPS_SETUP.md# Google Maps API setup instructions
  package.json        # Frontend dependencies
  tailwind.config.js  # Tailwind CSS config
```

---

## API Endpoints

- `POST /create-account` — Create a new user account
- `POST /signin` — Request OTP for sign-in
- `POST /api/verify-signin` — Verify OTP and sign in
- `POST /pickup` — Book a ride (send pickup/drop locations, time, people)
- `POST /rides/search` — Search for available rides

---

## How to Verify Your Setup

1. **Create an account** via the frontend.
2. **Sign in** using your phone number and OTP.
3. **Book a ride** by selecting locations on the map and submitting the form.
4. **Check the backend** for success messages.
5. **Inspect the database** (`pickups` table) to confirm your ride is stored.

---

## License

MIT License

---

## Credits

- [Gofr.dev](https://gofr.dev/) for backend framework
- [Google Maps Platform](https://developers.google.com/maps) for map integration