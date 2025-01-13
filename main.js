// main.js
import { renderLoginPage } from './pages/LoginPage.js';

function renderPage(page) {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Clear the app div
  if (page === 'login') {
    renderLoginPage(app);
  }
}

// Initial render
renderPage('login');