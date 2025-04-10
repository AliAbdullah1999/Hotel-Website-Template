// Toggle navbar on mobile
const toggler = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.nav-links');

toggler.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Basic form submission alerts (for demo)
const contactForm = document.querySelector('.contact-form');
const bookingForm = document.querySelector('.booking-form');
const newsletterForm = document.querySelector('.newsletter-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent! (This is a demo)');
});

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Booking submitted! (This is a demo)');
});

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Subscribed! (This is a demo)');
});