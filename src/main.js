import './styles.css';
import { createCreateAccountPage, initializeCreateAccountPage } from './createaccount.js';
import { createSignInPage, initializeSignInPage } from './signin.js';
import { createPickupPage, initializePickupPage } from './pickup.js';
import { createTravelPage, initializeTravelPage } from './travel.js';

// Current page state
let currentPage = 'createAccount';

// App container
const app = document.getElementById('app');

// Show Create Account page
function showCreateAccountPage() {
  currentPage = 'createAccount';
  app.innerHTML = createCreateAccountPage();
  initializeCreateAccountPage();
}

// Show Sign In page
function showSignInPage() {
  currentPage = 'signIn';
  app.innerHTML = createSignInPage();
  initializeSignInPage();
}

// Show Pickup page
function showPickupPage() {
  currentPage = 'pickup';
  app.innerHTML = createPickupPage();
  initializePickupPage();
}

// Show Travel page
function showTravelPage() {
  currentPage = 'travel';
  app.innerHTML = createTravelPage();
  initializeTravelPage();
}

// Make functions globally available
window.showCreateAccountPage = showCreateAccountPage;
window.showSignInPage = showSignInPage;
window.showPickupPage = showPickupPage;
window.showTravelPage = showTravelPage;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  // Start with Create Account page
  showCreateAccountPage();
});
