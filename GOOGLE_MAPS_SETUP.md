# Google Maps API Setup

To use the map functionality in the travel form, you need to set up Google Maps API:

## Steps:

1. **Get Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable the following APIs:
     - Maps JavaScript API
     - Places API
     - Geocoding API
   - Create credentials (API Key)
   - Restrict the API key to your domain for security

2. **Add API Key to the project:**
   - Open `src/travel-form.js`
   - Find line with `YOUR_API_KEY`
   - Replace `YOUR_API_KEY` with your actual Google Maps API key

3. **Test the functionality:**
   - Run `pnpm dev`
   - Click on "Select from map" buttons
   - Search for locations or click on the map
   - Confirm location selection

## Security Note:
For production, make sure to:
- Restrict API key to your domain
- Set up proper CORS headers
- Monitor API usage to avoid unexpected charges

## Features included:
- ✅ Location search with autocomplete
- ✅ Interactive map with click-to-select
- ✅ Google Places integration
- ✅ Reverse geocoding
- ✅ Mobile responsive design
- ✅ Modal overlay with smooth animations
