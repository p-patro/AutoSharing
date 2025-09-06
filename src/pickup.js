// Pickup page component
export function createPickupPage() {
  return `
    <div class="pickup-container">
      <!-- Header -->
      <div class="pickup-header">
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
      <div class="pickup-content">
        <!-- Form Section -->
        <div class="pickup-form-section">
          <form class="pickup-form" id="pickupForm">
            <!-- Pickup Location -->
            <div class="location-field">
              <div class="location-input-group">
                <label class="location-label">Pickup Location</label>
                <input type="text" 
                       class="location-input" 
                       id="pickupLocation"
                       placeholder="House number, locality, road">
              </div>
              <button type="button" class="map-button">
                <svg class="map-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="map-text">Select from map</span>
              </button>
            </div>

            <!-- Drop Location -->
            <div class="location-field">
              <div class="location-input-group">
                <label class="location-label">Drop Location</label>
                <input type="text" 
                       class="location-input" 
                       id="dropLocation"
                       placeholder="House number, locality, road">
              </div>
              <button type="button" class="map-button">
                <svg class="map-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="map-text">Select from map</span>
              </button>
            </div>

            <!-- Pick up Time Range -->
            <div class="time-field">
              <label class="time-label">Pick up Time Range</label>
              <div class="time-range-container">
                <div class="time-range-item">
                  <label class="time-range-label">From</label>
                  <div class="time-selectors">
                    <div class="time-input-container">
                      <button type="button" class="time-input" id="fromTimeSelector">
                        <span id="displayFromTime">9 : 30</span>
                      </button>
                    </div>
                    <button type="button" class="period-input" id="fromPeriodSelector">
                      <span id="displayFromPeriod">AM</span>
                    </button>
                  </div>
                </div>
                <div class="time-range-item">
                  <label class="time-range-label">To</label>
                  <div class="time-selectors">
                    <div class="time-input-container">
                      <button type="button" class="time-input" id="toTimeSelector">
                        <span id="displayToTime">11 : 00</span>
                      </button>
                    </div>
                    <button type="button" class="period-input" id="toPeriodSelector">
                      <span id="displayToPeriod">AM</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Number of people -->
            <div class="people-field">
              <label class="people-label">Number of people</label>
              <input type="number" 
                     class="people-input" 
                     id="numberOfPeople"
                     placeholder="1"
                     min="1"
                     max="8"
                     value="1">
            </div>

            <!-- Submit Button -->
            <button type="submit" class="pickup-submit-button">Submit</button>
          </form>
        </div>

        <!-- Illustration Section -->
        <div class="pickup-illustration-section">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/e9b6728136f6cca62b632b249588c1f43c0721ef?width=1440"
               alt="Order ride illustration"
               class="pickup-illustration">
        </div>
      </div>

      <!-- Time Picker Modal -->
      <div id="timePickerModal" class="time-picker-modal">
        <div class="time-picker-overlay" id="timePickerOverlay"></div>
        <div class="time-picker-content">
          <div class="time-picker-header">
            <h3 class="time-picker-title" id="timePickerTitle">Select Time</h3>
            <button type="button" class="time-picker-close" id="timePickerClose">×</button>
          </div>
          <div class="time-picker-body">
            <div class="time-picker-section">
              <label class="time-picker-label">Hour</label>
              <div class="time-picker-scroll" id="hourPicker">
                ${Array.from({ length: 12 }, (_, i) => `
                  <div class="time-picker-option ${i === 8 ? 'selected' : ''}" data-value="${i + 1}">
                    ${String(i + 1).padStart(2, '0')}
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="time-picker-section">
              <label class="time-picker-label">Minute</label>
              <div class="time-picker-scroll" id="minutePicker">
                ${Array.from({ length: 60 }, (_, i) => `
                  <div class="time-picker-option ${i === 30 ? 'selected' : ''}" data-value="${i}">
                    ${String(i).padStart(2, '0')}
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="time-picker-section">
              <label class="time-picker-label">Period</label>
              <div class="time-picker-scroll" id="periodPicker">
                <div class="time-picker-option selected" data-value="AM">AM</div>
                <div class="time-picker-option" data-value="PM">PM</div>
              </div>
            </div>
          </div>
          <div class="time-picker-footer">
            <button type="button" class="time-picker-cancel" id="timePickerCancel">Cancel</button>
            <button type="button" class="time-picker-confirm" id="timePickerConfirm">Confirm</button>
          </div>
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
    showNotification('Please select a location first', 'error');
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

// Pickup page logic
export function initializePickupPage() {
  // Initialize Google Maps API
  loadGoogleMapsAPI();
  const form = document.getElementById('pickupForm');
  const pickupLocationInput = document.getElementById('pickupLocation');
  const dropLocationInput = document.getElementById('dropLocation');
  const numberOfPeopleInput = document.getElementById('numberOfPeople');
  const mapButtons = document.querySelectorAll('.map-button');

  // Time picker elements
  const fromTimeSelector = document.getElementById('fromTimeSelector');
  const fromPeriodSelector = document.getElementById('fromPeriodSelector');
  const toTimeSelector = document.getElementById('toTimeSelector');
  const toPeriodSelector = document.getElementById('toPeriodSelector');
  const timePickerModal = document.getElementById('timePickerModal');
  const timePickerOverlay = document.getElementById('timePickerOverlay');
  const timePickerClose = document.getElementById('timePickerClose');
  const timePickerCancel = document.getElementById('timePickerCancel');
  const timePickerConfirm = document.getElementById('timePickerConfirm');
  const timePickerTitle = document.getElementById('timePickerTitle');
  const displayFromTime = document.getElementById('displayFromTime');
  const displayFromPeriod = document.getElementById('displayFromPeriod');
  const displayToTime = document.getElementById('displayToTime');
  const displayToPeriod = document.getElementById('displayToPeriod');

  // Current selected time values
  let fromHour = 9;
  let fromMinute = 30;
  let fromPeriod = 'AM';
  let toHour = 11;
  let toMinute = 0;
  let toPeriod = 'AM';

  // Track which time selector is currently being edited
  let currentSelector = null; // 'from' or 'to'
  let selectedHour = 9;
  let selectedMinute = 30;
  let selectedPeriod = 'AM';

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const pickupLocation = pickupLocationInput.value.trim();
    const dropLocation = dropLocationInput.value.trim();
    const numberOfPeople = numberOfPeopleInput.value;
    const pickupTimeFrom = `${fromHour}:${String(fromMinute).padStart(2, '0')} ${fromPeriod}`;
    const pickupTimeTo = `${toHour}:${String(toMinute).padStart(2, '0')} ${toPeriod}`;
    const pickupTimeRange = `${pickupTimeFrom} - ${pickupTimeTo}`;

    if (!pickupLocation) {
      alert('Please enter pickup location');
      pickupLocationInput.focus();
      return;
    }

    if (!dropLocation) {
      alert('Please enter drop location');
      dropLocationInput.focus();
      return;
    }

    if (!numberOfPeople || numberOfPeople < 1) {
      alert('Please enter valid number of people');
      numberOfPeopleInput.focus();
      return;
    }

    // Show success message
    showNotification('Ride request submitted successfully!');

    // Here you would typically make an API call to submit the ride request
    console.log('Ride request:', {
      pickupLocation,
      dropLocation,
      pickupTimeRange,
      numberOfPeople: parseInt(numberOfPeople)
    });

    // Redirect to travel page after a short delay
    setTimeout(() => {
      window.showTravelPage();
    }, 1000);
  });

  // Handle map button clicks
  mapButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const inputType = index === 0 ? 'pickup' : 'drop';
      openMapModal(inputType);
    });
  });

  // Handle number input validation
  numberOfPeopleInput.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    if (value < 1) {
      e.target.value = 1;
    } else if (value > 8) {
      e.target.value = 8;
    }
  });

  // Time picker functionality
  function openTimePicker(selectorType) {
    currentSelector = selectorType;
    timePickerModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Update modal title
    timePickerTitle.textContent = `Select ${selectorType === 'from' ? 'From' : 'To'} Time`;

    // Set current values based on selector type
    if (selectorType === 'from') {
      selectedHour = fromHour;
      selectedMinute = fromMinute;
      selectedPeriod = fromPeriod;
    } else {
      selectedHour = toHour;
      selectedMinute = toMinute;
      selectedPeriod = toPeriod;
    }

    // Update selected values in picker
    updatePickerSelections();
  }

  function closeTimePicker() {
    timePickerModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentSelector = null;
  }

  function updatePickerSelections() {
    // Update hour picker
    const hourOptions = document.querySelectorAll('#hourPicker .time-picker-option');
    hourOptions.forEach(option => {
      option.classList.remove('selected');
      if (parseInt(option.dataset.value) === selectedHour) {
        option.classList.add('selected');
        option.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    });

    // Update minute picker
    const minuteOptions = document.querySelectorAll('#minutePicker .time-picker-option');
    minuteOptions.forEach(option => {
      option.classList.remove('selected');
      if (parseInt(option.dataset.value) === selectedMinute) {
        option.classList.add('selected');
        option.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    });

    // Update period picker
    const periodOptions = document.querySelectorAll('#periodPicker .time-picker-option');
    periodOptions.forEach(option => {
      option.classList.remove('selected');
      if (option.dataset.value === selectedPeriod) {
        option.classList.add('selected');
      }
    });
  }

  function updateDisplayTimes() {
    displayFromTime.textContent = `${fromHour} : ${String(fromMinute).padStart(2, '0')}`;
    displayFromPeriod.textContent = fromPeriod;
    displayToTime.textContent = `${toHour} : ${String(toMinute).padStart(2, '0')}`;
    displayToPeriod.textContent = toPeriod;
  }

  function validateTimeRange() {
    // Convert times to minutes for comparison
    const fromTotalMinutes = (fromPeriod === 'PM' && fromHour !== 12 ? fromHour + 12 : fromHour === 12 && fromPeriod === 'AM' ? 0 : fromHour) * 60 + fromMinute;
    const toTotalMinutes = (toPeriod === 'PM' && toHour !== 12 ? toHour + 12 : toHour === 12 && toPeriod === 'AM' ? 0 : toHour) * 60 + toMinute;

    return toTotalMinutes > fromTotalMinutes;
  }

  // Event listeners for time picker
  fromTimeSelector.addEventListener('click', () => openTimePicker('from'));
  fromPeriodSelector.addEventListener('click', () => openTimePicker('from'));
  toTimeSelector.addEventListener('click', () => openTimePicker('to'));
  toPeriodSelector.addEventListener('click', () => openTimePicker('to'));
  timePickerOverlay.addEventListener('click', closeTimePicker);
  timePickerClose.addEventListener('click', closeTimePicker);
  timePickerCancel.addEventListener('click', closeTimePicker);

  timePickerConfirm.addEventListener('click', () => {
    // Update the appropriate time values based on current selector
    if (currentSelector === 'from') {
      fromHour = selectedHour;
      fromMinute = selectedMinute;
      fromPeriod = selectedPeriod;
    } else if (currentSelector === 'to') {
      toHour = selectedHour;
      toMinute = selectedMinute;
      toPeriod = selectedPeriod;
    }

    // Validate time range
    if (!validateTimeRange()) {
      showNotification('To time must be after From time!', 'error');
      return;
    }

    updateDisplayTimes();
    closeTimePicker();
    showNotification(`${currentSelector === 'from' ? 'From' : 'To'} time updated successfully!`);
  });

  // Handle picker option selections
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-picker-option')) {
      const picker = e.target.closest('.time-picker-scroll');
      const options = picker.querySelectorAll('.time-picker-option');

      // Remove selected class from all options in this picker
      options.forEach(option => option.classList.remove('selected'));

      // Add selected class to clicked option
      e.target.classList.add('selected');

      // Update the corresponding value
      if (picker.id === 'hourPicker') {
        selectedHour = parseInt(e.target.dataset.value);
      } else if (picker.id === 'minutePicker') {
        selectedMinute = parseInt(e.target.dataset.value);
      } else if (picker.id === 'periodPicker') {
        selectedPeriod = e.target.dataset.value;
      }
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && timePickerModal.style.display === 'flex') {
      closeTimePicker();
    }
  });

  // Initialize display times
  updateDisplayTimes();
}

// Utility function to show notifications
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;

  const backgroundColor = type === 'error' ? '#ef4444' : 'var(--orange)';

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${backgroundColor};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-family: Inter, sans-serif;
    font-size: 14px;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Make functions globally available
window.openMapModal = openMapModal;
window.closeMapModal = closeMapModal;
window.confirmLocationSelection = confirmLocationSelection;
