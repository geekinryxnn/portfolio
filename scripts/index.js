// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Image Modal Functionality (Optional, but enhances user experience)
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('image-modal');
            modal.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
            document.body.appendChild(modal);

            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });

    // Form Validation (Basic Example)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;
            const nameInput = this.querySelector('input[name="name"]');
            const emailInput = this.querySelector('input[name="email"]');
            const messageInput = this.querySelector('textarea[name="message"]');

            if (!nameInput.value.trim()) {
                alert('Please enter your name.');
                isValid = false;
                nameInput.focus();
            } else if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                alert('Please enter a valid email address.');
                isValid = false;
                emailInput.focus();
            } else if (!messageInput.value.trim()) {
                alert('Please enter your message.');
                isValid = false;
                messageInput.focus();
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });

        // Email validation helper function
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the '#'
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});