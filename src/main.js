import './styles.css';
import { createCreateAccountPage, initializeCreateAccountPage } from './createaccount.js';
import { createSignInPage, initializeSignInPage } from './signin.js';

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

// Make functions globally available
window.showCreateAccountPage = showCreateAccountPage;
window.showSignInPage = showSignInPage;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  // Start with Create Account page
  showCreateAccountPage();
});
