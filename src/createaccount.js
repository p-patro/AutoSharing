// Create Account page component
export function createCreateAccountPage() {
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
        <!-- Left side - Form -->
        <div class="form-container">
          <div class="form-wrapper">
            <h1 class="main-title">Create Account</h1>
            
            <form class="signup-form" id="createAccountForm">
              <!-- Name fields row -->
              <div class="name-row">
                <div class="input-group">
                  <label class="input-label">First name</label>
                  <input type="text" class="form-input" placeholder="First name" required>
                </div>
                <div class="input-group">
                  <label class="input-label">Last name</label>
                  <input type="text" class="form-input" placeholder="Last name" required>
                </div>
              </div>
              
              <!-- Email field -->
              <div class="input-group">
                <label class="input-label">Email</label>
                <input type="email" class="form-input" placeholder="you@company.com" required>
              </div>
              
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
                  <input type="tel" class="phone-number-input" placeholder="+91 XXXXXXXXXX" maxlength="10" pattern="[0-9]{10}" required>
                </div>
              </div>
              
              <!-- Privacy policy checkbox -->
              <div class="checkbox-container">
                <input type="checkbox" id="privacy" class="privacy-checkbox" required>
                <label for="privacy" class="privacy-label">
                  You agree to our friendly <a href="#" class="privacy-link">privacy policy</a>.
                </label>
              </div>
              
              <!-- Submit button -->
              <button type="submit" class="signup-button">Sign Up</button>
            </form>
            
            <!-- Sign in link -->
            <div class="signin-link">
              Already an User ? <a href="#" class="signin-link-text" id="signInLink">Sign In</a>
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

// Create Account page logic
export function initializeCreateAccountPage() {
  const form = document.getElementById('createAccountForm');
  const signInLink = document.getElementById('signInLink');
  const phoneInput = form.querySelector('.phone-number-input');
  
  // Handle form submission
  // ...existing code...

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const firstName = form.querySelector('input[placeholder="First name"]').value.trim();
  const lastName = form.querySelector('input[placeholder="Last name"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const phoneNumber = phoneInput.value.trim();
  const password = "defaultPassword"; // You should add a password field in your form for real use

  // Validate phone number
  if (phoneNumber.length !== 10 || !/^[0-9]+$/.test(phoneNumber)) {
    alert('Please enter a valid 10-digit phone number');
    return;
  }

  // Prepare data to send
  const data = {
  first_name: firstName,
  last_name: lastName,
  email: email,
  password: password, // Replace with actual password from form
  phone: phoneNumber
};

  try {
    const response = await fetch('http://localhost:8000/create-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Account created successfully! Please sign in.');
      window.showSignInPage();
    } else {
      const error = await response.json();
      alert('Error: ' + (error.message || 'Could not create account'));
    }
  } catch (err) {
    alert('Network error: ' + err.message);
  }
});

  
  // Handle sign in link
  signInLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.showSignInPage();
  });
  
  // Phone number input validation
  phoneInput.addEventListener('input', (e) => {
    // Only allow numbers
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  });
}
