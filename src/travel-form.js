// Travel Form component
export function createTravelFormPage() {
  return `
    <div class="travel-form-page">
      <!-- Header -->
      <div class="travel-form-header">
        <div class="travel-title">Travel</div>
        <div class="header-actions">
          <div class="header-icons">
            <svg class="chat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_21_97)">
                <path d="M16.8 19L14 22.5L11.2 19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V7.103C5 6.83778 5.10536 6.58343 5.29289 6.39589C5.48043 6.20836 5.73478 6.103 6 6.103H22C22.2652 6.103 22.5196 6.20836 22.7071 6.39589C22.8946 6.58343 23 6.83778 23 7.103V18C23 18.2652 22.8946 18.5196 22.7071 18.7071C22.5196 18.8946 22.2652 19 22 19H16.8ZM2 2H19V4H3V15H1V3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2Z" fill="#03061F"/>
              </g>
              <defs>
                <clipPath id="clip0_21_97">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <svg class="notification-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_21_98)">
                <path d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z" fill="#03061F"/>
              </g>
              <defs>
                <clipPath id="clip0_21_98">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="profile-avatar">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/6a7580b1354adea54aab0443b752feb874992f93?width=80" alt="Profile" class="avatar-image">
            <div class="avatar-border"></div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="travel-form-content">
        <!-- Form Section -->
        <div class="form-section">
          <!-- Pickup Location -->
          <div class="location-field-container">
            <div class="location-input-with-label">
              <div class="field-label">Pickup Location</div>
              <div class="location-input-wrapper">
                <div class="location-input-content">
                  <input type="text" id="pickupLocation" class="location-text-input" placeholder="House number, locality, road">
                </div>
              </div>
            </div>
            <button class="select-from-map-button" onclick="openMapModal('pickup')">
              <svg class="map-pin-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="select-from-map-text">Select from map</span>
            </button>
          </div>

          <!-- Drop Location -->
          <div class="location-field-container">
            <div class="location-input-with-label">
              <div class="field-label">Drop Location</div>
              <div class="location-input-wrapper">
                <div class="location-input-content">
                  <input type="text" id="dropLocation" class="location-text-input" placeholder="House number, locality, road">
                </div>
              </div>
            </div>
            <button class="select-from-map-button" onclick="openMapModal('drop')">
              <svg class="map-pin-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="select-from-map-text">Select from map</span>
            </button>
          </div>

          <!-- Pick up Time -->
          <div class="time-field-container">
            <div class="field-label">Pick up Time</div>
            <div class="time-selectors-container">
              <div class="time-input-group">
                <div class="time-display-box" onclick="openTimeModal('time')">
                  <span class="time-display-text">9 : 30</span>
                </div>
              </div>
              <div class="period-display-box" onclick="openTimeModal('period')">
                <span class="period-display-text">AM</span>
              </div>
            </div>
          </div>

          <!-- Number of people -->
          <div class="people-field-container">
            <div class="field-label">Number of people</div>
            <div class="people-input-wrapper">
              <div class="people-input-content">
                <input type="number" id="numberOfPeople" class="people-text-input" placeholder="1" min="1" max="8">
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <button class="travel-submit-button" onclick="submitTravelForm()">
            <span class="submit-button-text">Submit</span>
          </button>
        </div>

        <!-- Illustration Section -->
        <div class="illustration-section">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/e9b6728136f6cca62b632b249588c1f43c0721ef?width=1440" alt="Order ride illustration" class="travel-illustration">
        </div>
      </div>

      <!-- Map Modal -->
      <div id="mapModal" class="map-modal">
        <div class="map-modal-overlay" onclick="closeMapModal()"></div>
        <div class="map-modal-content">
          <div class="map-modal-header">
            <h3 class="map-modal-title">Select Location</h3>
            <button class="map-modal-close" onclick="closeMapModal()">&times;</button>
          </div>
          <div class="map-modal-body">
            <div class="location-search-container">
              <input type="text" id="locationSearch" class="location-search-input" placeholder="Search for location...">
              <div id="searchSuggestions" class="search-suggestions"></div>
            </div>
            <div id="mapContainer" class="map-container"></div>
          </div>
          <div class="map-modal-footer">
            <button class="map-cancel-button" onclick="closeMapModal()">Cancel</button>
            <button class="map-confirm-button" onclick="confirmLocationSelection()">Confirm Location</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Travel Form logic
export function initializeTravelFormPage() {
  // Initialize Google Maps API
  loadGoogleMapsAPI();
  
  // Initialize form validation
  setupFormValidation();
}

// Google Maps API integration
let map = null;
let marker = null;
let selectedLocation = null;
let currentInputType = null; // 'pickup' or 'drop'
let autocompleteService = null;
let placesService = null;

function loadGoogleMapsAPI() {
  // Add Google Maps API script if not already loaded

  if (!window.google) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_googleAPIkey}&libraries=places&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    // Set global callback
    window.initGoogleMaps = initGoogleMaps;
  } else {
    initGoogleMaps();
  }
}

function initGoogleMaps() {
  // Initialize autocomplete service
  autocompleteService = new google.maps.places.AutocompleteService();
  
  // Initialize the map (hidden initially)
  const mapContainer = document.getElementById('mapContainer');
  if (mapContainer) {
    map = new google.maps.Map(mapContainer, {
      center: { lat: 20.1481, lng: 85.6753 }, // Default to NIT Rourkela
      zoom: 15,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ]
    });
    
    placesService = new google.maps.places.PlacesService(map);
    
    // Add click listener to map
    map.addListener('click', (event) => {
      handleMapClick(event.latLng);
    });
  }
}

function openMapModal(inputType) {
  currentInputType = inputType;
  const modal = document.getElementById('mapModal');
  const searchInput = document.getElementById('locationSearch');
  
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  // Clear previous search
  searchInput.value = '';
  document.getElementById('searchSuggestions').innerHTML = '';
  
  // Focus on search input
  setTimeout(() => searchInput.focus(), 100);
  
  // Setup search functionality
  setupLocationSearch();
  
  // Resize map after modal is shown
  setTimeout(() => {
    if (map) {
      google.maps.event.trigger(map, 'resize');
    }
  }, 300);
}

function closeMapModal() {
  const modal = document.getElementById('mapModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  selectedLocation = null;
  currentInputType = null;
}

function setupLocationSearch() {
  const searchInput = document.getElementById('locationSearch');
  const suggestionsContainer = document.getElementById('searchSuggestions');
  
  let searchTimeout;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    
    clearTimeout(searchTimeout);
    
    if (query.length < 2) {
      suggestionsContainer.innerHTML = '';
      return;
    }
    
    searchTimeout = setTimeout(() => {
      searchLocations(query);
    }, 300);
  });
}

function searchLocations(query) {
  if (!autocompleteService) return;
  
  const request = {
    input: query,
    componentRestrictions: { country: 'in' }, // Restrict to India
    types: ['geocode'] // Only geocoded results
  };
  
  autocompleteService.getPlacePredictions(request, (predictions, status) => {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    
    if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
      suggestionsContainer.innerHTML = '';
      
      predictions.slice(0, 5).forEach(prediction => {
        const suggestionElement = document.createElement('div');
        suggestionElement.className = 'search-suggestion-item';
        suggestionElement.innerHTML = `
          <div class="suggestion-main-text">${prediction.structured_formatting.main_text}</div>
          <div class="suggestion-secondary-text">${prediction.structured_formatting.secondary_text || ''}</div>
        `;
        
        suggestionElement.addEventListener('click', () => {
          selectSuggestion(prediction);
        });
        
        suggestionsContainer.appendChild(suggestionElement);
      });
    } else {
      suggestionsContainer.innerHTML = '<div class="no-suggestions">No locations found</div>';
    }
  });
}

function selectSuggestion(prediction) {
  const request = {
    placeId: prediction.place_id,
    fields: ['geometry', 'name', 'formatted_address']
  };
  
  placesService.getDetails(request, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const location = place.geometry.location;
      
      selectedLocation = {
        lat: location.lat(),
        lng: location.lng(),
        address: place.formatted_address,
        name: place.name
      };
      
      // Update map
      map.setCenter(location);
      map.setZoom(16);
      
      // Update marker
      if (marker) {
        marker.setMap(null);
      }
      
      marker = new google.maps.Marker({
        position: location,
        map: map,
        title: place.name,
        animation: google.maps.Animation.DROP
      });
      
      // Update search input
      document.getElementById('locationSearch').value = place.formatted_address;
      document.getElementById('searchSuggestions').innerHTML = '';
    }
  });
}

function handleMapClick(latLng) {
  selectedLocation = {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
  
  // Update marker
  if (marker) {
    marker.setMap(null);
  }
  
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    animation: google.maps.Animation.DROP
  });
  
  // Reverse geocoding to get address
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ location: latLng }, (results, status) => {
    if (status === 'OK' && results[0]) {
      selectedLocation.address = results[0].formatted_address;
      document.getElementById('locationSearch').value = results[0].formatted_address;
    }
  });
}

function confirmLocationSelection() {
  if (!selectedLocation) {
    showNotification('Please select a location first');
    return;
  }
  
  // Update the appropriate input field
  const inputId = currentInputType === 'pickup' ? 'pickupLocation' : 'dropLocation';
  const inputElement = document.getElementById(inputId);
  
  if (inputElement && selectedLocation.address) {
    inputElement.value = selectedLocation.address;
  }
  
  closeMapModal();
  showNotification('Location selected successfully');
}

function setupFormValidation() {
  const form = document.querySelector('.form-section');
  if (!form) return;
  
  // Add input event listeners for real-time validation
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('blur', validateInput);
    input.addEventListener('input', clearValidationErrors);
  });
}

function validateInput(event) {
  const input = event.target;
  const value = input.value.trim();
  
  // Remove existing error styling
  input.classList.remove('error');
  
  // Basic validation
  if (input.required && !value) {
    input.classList.add('error');
    return false;
  }
  
  if (input.type === 'number' && value) {
    const num = parseInt(value);
    if (num < 1 || num > 8) {
      input.classList.add('error');
      return false;
    }
  }
  
  return true;
}

function clearValidationErrors(event) {
  event.target.classList.remove('error');
}

function submitTravelForm() {
  const pickupLocation = document.getElementById('pickupLocation').value.trim();
  const dropLocation = document.getElementById('dropLocation').value.trim();
  const numberOfPeople = document.getElementById('numberOfPeople').value;
  
  // Basic validation
  if (!pickupLocation) {
    showNotification('Please enter pickup location');
    return;
  }
  
  if (!dropLocation) {
    showNotification('Please enter drop location');
    return;
  }
  
  if (!numberOfPeople || numberOfPeople < 1) {
    showNotification('Please enter number of people');
    return;
  }
  
  // Create booking data
  const bookingData = {
    pickup: pickupLocation,
    drop: dropLocation,
    people: numberOfPeople,
    time: document.querySelector('.time-display-text').textContent,
    period: document.querySelector('.period-display-text').textContent,
    timestamp: new Date().toISOString()
  };
  
  console.log('Booking submitted:', bookingData);
  showNotification('Ride booked successfully!');
  
  // Here you would typically send the data to your backend
  // For now, we'll just show a success message
}

// Time picker functionality (simplified for now)
function openTimeModal(type) {
  // This would open a time picker modal
  // For now, just cycle through common times
  if (type === 'time') {
    const timeDisplay = document.querySelector('.time-display-text');
    const times = ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '1:00', '1:30', '2:00'];
    const currentIndex = times.indexOf(timeDisplay.textContent.replace(' ', ''));
    const nextIndex = (currentIndex + 1) % times.length;
    timeDisplay.textContent = times[nextIndex].replace(':', ' : ');
  } else if (type === 'period') {
    const periodDisplay = document.querySelector('.period-display-text');
    periodDisplay.textContent = periodDisplay.textContent === 'AM' ? 'PM' : 'AM';
  }
}

// Utility function to show notifications
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--orange);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-family: Inter, sans-serif;
    font-size: 14px;
    z-index: 1001;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: slideInFromRight 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutToRight 0.3s ease-in forwards';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Make functions globally available
window.openMapModal = openMapModal;
window.closeMapModal = closeMapModal;
window.confirmLocationSelection = confirmLocationSelection;
window.openTimeModal = openTimeModal;
window.submitTravelForm = submitTravelForm;
