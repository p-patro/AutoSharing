// Sign In page component
export function createSignInPage() {
  return `
    <div class="hero-container">
      <!-- Background pattern -->
      <div class="hero-background">
        <svg class="hero-pattern" viewBox="0 0 744 820" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1103.73 284C1103.73 577.815 1103.05 819.5 809.23 819.5C672.089 819.5 553.067 693.72 458.73 608.5C416.352 570.218 226.772 568.651 139.73 538C5.41035 490.701 -24.7701 298 18.2298 132.5C94.23 -129.5 277.914 -248 571.73 -248C865.545 -248 1103.73 -9.81549 1103.73 284Z" fill="#FDEFE9"/>
        </svg>
      </div>
      
      <!-- Main content -->
      <div class="hero-content">
        <!-- Left side - Sign In Form -->
        <div class="form-container">
          <div class="form-wrapper">
            <h1 class="main-title">Sign In</h1>
            
            <form class="signin-form" id="signinForm">
              <!-- Phone field -->
              <div class="input-group">
                <label class="input-label">Phone number</label>
                <div class="phone-input">
                  <div class="country-dropdown">
                    <span class="country-code">IN</span>
                    <svg class="dropdown-icon" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 7.5L10.5 12.5L15.5 7.5" stroke="#03061F" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <input type="tel" 
                         class="phone-number-input" 
                         id="phoneNumber"
                         placeholder="+91 XXXXXXXXXX"
                         maxlength="10"
                         pattern="[0-9]{10}">
                </div>
              </div>
              
              <!-- OTP field (hidden initially) -->
              <div class="input-group otp-group" id="otpGroup" style="display: none;">
                <label class="input-label">Enter OTP</label>
                <input type="text" 
                       class="form-input" 
                       id="otpInput"
                       placeholder="Enter 6-digit OTP"
                       maxlength="6"
                       pattern="[0-9]{6}">
              </div>
              
              <!-- Submit button -->
              <button type="submit" class="signup-button" id="submitButton">Get OTP</button>
            </form>
            
            <!-- Create account link -->
            <div class="signin-link">
              Don't have an account ? <a href="#" class="signin-link-text" id="createAccountLink">Create Account</a>
            </div>
          </div>
        </div>
        
        <!-- Right side - Illustration -->
        <div class="illustration-container">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/40f1fac5188cb00e07ff4d63fcc334a6a93b0f74?width=1258" 
               alt="Order ride illustration" 
               class="hero-illustration">
        </div>
      </div>
    </div>
  `;
}

// Sign In page logic
export function initializeSignInPage() {
  const form = document.getElementById('signinForm');
  const phoneInput = document.getElementById('phoneNumber');
  const otpGroup = document.getElementById('otpGroup');
  const otpInput = document.getElementById('otpInput');
  const submitButton = document.getElementById('submitButton');
  const createAccountLink = document.getElementById('createAccountLink');
  
  let otpSent = false;
  
  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!otpSent) {
      // First click - Get OTP
      const phoneNumber = phoneInput.value.trim();
      
      if (phoneNumber.length !== 10 || !/^[0-9]+$/.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number');
        return;
      }
      
      // Show OTP field and update button
      otpGroup.style.display = 'block';
      submitButton.textContent = 'Sign In';
      otpSent = true;
      
      // Focus on OTP input
      otpInput.focus();
      
      // Simulate OTP sent message
      showNotification('OTP sent to +91 ' + phoneNumber);
      
    } else {
      // Second click - Sign In
      const otp = otpInput.value.trim();
      
      if (otp.length !== 6 || !/^[0-9]+$/.test(otp)) {
        alert('Please enter a valid 6-digit OTP');
        return;
      }
      
      // Simulate sign in process
      showNotification('Signing in...');
      
      // Here you would typically make an API call to verify OTP
      setTimeout(() => {
        alert('Successfully signed in!');
        // You could redirect to dashboard or main app here
      }, 1000);
    }
  });
  
  // Handle create account link
  createAccountLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.showCreateAccountPage();
  });
  
  // Phone number input validation
  phoneInput.addEventListener('input', (e) => {
    // Only allow numbers
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  });
  
  // OTP input validation
  otpInput.addEventListener('input', (e) => {
    // Only allow numbers
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  });
}

// Utility function to show notifications
function showNotification(message) {
  // Create a simple notification
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
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
