document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Navigation
        nav.classList.toggle('active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData);

            // Here you would typically send the form data to a server
            console.log('Form submitted:', formValues);

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Adopt Button Click Handler
    const adoptButtons = document.querySelectorAll('.adopt-button');
    adoptButtons.forEach(button => {
        button.addEventListener('click', () => {
            const petName = button.parentElement.querySelector('h3').textContent;
            alert(`Thank you for your interest in adopting ${petName}! Our team will contact you soon.`);
        });
    });
});