const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset previous messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    successMsg.textContent = '';

    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const subject = form.querySelector('#subject');
    const message = form.querySelector('#message');

    // Validate name
    if (name.value.trim() === '') {
      isValid = false;
      document.getElementById('error-name').textContent = 'Full name is required.';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
      isValid = false;
      document.getElementById('error-email').textContent = 'Email is required.';
    } else if (!emailPattern.test(email.value.trim())) {
      isValid = false;
      document.getElementById('error-email').textContent = 'Please enter a valid email address.';
    }

    // Validate subject
    if (subject.value.trim() === '') {
      isValid = false;
      document.getElementById('error-subject').textContent = 'Subject is required.';
    }

    // Validate message
    if (message.value.trim() === '') {
      isValid = false;
      document.getElementById('error-message').textContent = 'Message is required.';
    } else if (message.value.trim().length < 10) {
      isValid = false;
      document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
    }

    // ✅ If all valid, show success message
    if (isValid) {
      successMsg.textContent = '✅ Your message has been successfully sent!';
      successMsg.style.display = 'block';

      // Optionally reset the form after 1 second
      setTimeout(() => form.reset(), 1000);
    }
  });