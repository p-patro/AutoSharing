// Travel page component
export function createTravelPage() {
  return `
    <div class="travel-page">
      <!-- Header -->
      <div class="travel-header">
        <div class="travel-title">Travel</div>
        <div class="header-actions">
          <div class="header-icons">
            <svg class="chat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_23_2103)">
                <path d="M16.8 19L14 22.5L11.2 19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V7.103C5 6.83778 5.10536 6.58343 5.29289 6.39589C5.48043 6.20836 5.73478 6.103 6 6.103H22C22.2652 6.103 22.5196 6.20836 22.7071 6.39589C22.8946 6.58343 23 6.83778 23 7.103V18C23 18.2652 22.8946 18.5196 22.7071 18.7071C22.5196 18.8946 22.2652 19 22 19H16.8ZM2 2H19V4H3V15H1V3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2Z" fill="#03061F"/>
              </g>
              <defs>
                <clipPath id="clip0_23_2103">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <svg class="notification-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_23_2104)">
                <path d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z" fill="#03061F"/>
              </g>
              <defs>
                <clipPath id="clip0_23_2104">
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
      <div class="travel-content">
        <!-- First Solo Rides Section -->
        <div class="solo-rides-section">
          <div class="section-header">
            <h2 class="section-title">Solo Rides</h2>
          </div>
          <div class="rides-list">
            <div class="ride-item ride-item-normal">
              <div class="ride-info">
                <div class="ride-location">At NIT Rourkela,Jagdha</div>
                <div class="ride-driver">Akash Kumar</div>
              </div>
              <button class="details-button">Details</button>
            </div>
            <div class="ride-item ride-item-gray">
              <div class="ride-info">
                <div class="ride-location">At NIT Rourkela,Jagdha</div>
                <div class="ride-driver">Om Gupta</div>
              </div>
              <button class="details-button">Details</button>
            </div>
          </div>
        </div>


        <!-- Second Solo Rides Section -->
        <div class="solo-rides-section">
          <div class="section-header">
            <h2 class="section-title">Shared Rides</h2>
          </div>
          <div class="rides-list">
            <div class="ride-item ride-item-expanded">
              <div class="ride-info">
                <div class="ride-location">
                  <div>At NIT Rourkela,Jagdha</div>
                 
                  <div class="riders">Riders: 2</div>
                </div>
                <div class="ride-driver">
                  <div>Akash Kumar</div>
                  <div class="phone">9890000000</div>
                </div>
              </div>
              <button class="details-button">Details</button>
            </div>
            <div class="ride-item ride-item-orange">
              <div class="ride-info">
                <div class="ride-location">
                  <div>At NIT Rourkela,Jagdha</div>
                  <div class="riders">Riders: 2</div>
                </div>
                <div class="ride-driver">
                  <div>Bhautik Sharma</div>
                  <div class="phone">7770000000</div>
                </div>
              </div>
              <button class="details-button">Details</button>
            </div>
          </div>
        </div>

  `;
}

// Travel page logic
export function initializeTravelPage() {
  const detailsButtons = document.querySelectorAll('.details-button');
  
  // Handle details button clicks
  detailsButtons.forEach(button => {
    button.addEventListener('click', () => {
      showNotification('Ride details coming soon!');
    });
  });
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
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
