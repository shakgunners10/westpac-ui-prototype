// Contact form validation
// Validates name, email, and message fields on submit,
// shows inline error messages, and confirms success without a page reload.

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  // Only run this script on pages that actually have the contact form
  if (!form) return;

  const nameField = document.getElementById('nameField');
  const emailField = document.getElementById('emailField');
  const messageField = document.getElementById('messageField');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formSuccess = document.getElementById('formSuccess');

  // Simple email pattern check — good enough for client-side UX validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // stop the page from reloading so we can show feedback in place

    let isValid = true;

    // Reset previous error messages before re-validating
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formSuccess.textContent = '';

    if (nameField.value.trim() === '') {
      nameError.textContent = 'Please enter your name.';
      isValid = false;
    }

    if (emailField.value.trim() === '') {
      emailError.textContent = 'Please enter your email.';
      isValid = false;
    } else if (!emailPattern.test(emailField.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (messageField.value.trim() === '') {
      messageError.textContent = 'Please enter a message.';
      isValid = false;
    }

    if (isValid) {
      formSuccess.textContent = 'Thanks! Your message has been sent.';
      form.reset();
    }
  });
});