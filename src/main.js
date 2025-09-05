import './styles.css';
import { createCreateAccountPage, initializeCreateAccountPage } from './createaccount.js';
import { createSignInPage, initializeSignInPage } from './signin.js';
import { createPickupPage, initializePickupPage } from './pickup.js';

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

// Make functions globally available
window.showCreateAccountPage = showCreateAccountPage;
window.showSignInPage = showSignInPage;
window.showPickupPage = showPickupPage;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  // Start with Create Account page
  showCreateAccountPage();
});
