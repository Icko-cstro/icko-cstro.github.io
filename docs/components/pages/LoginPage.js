// pages/LoginPage.js
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { InputBox } from '../components/InputBox.js';

export function renderLoginPage(container) {
  const header = Header();
  const footer = Footer();
  const inputBox = InputBox('Username', 'username');
  const passwordBox = InputBox('Password', 'password');

  container.appendChild(header);
  const form = document.createElement('form');
  form.appendChild(inputBox);
  form.appendChild(passwordBox);
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Login';
  form.appendChild(submitButton);
  container.appendChild(form);
  container.appendChild(footer);
}

