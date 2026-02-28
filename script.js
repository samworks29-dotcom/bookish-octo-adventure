// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission Handling
const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Your form submission logic here
    alert('Form submitted!'); // Placeholder alert
});

// Scroll Animations
const animateElements = document.querySelectorAll('.animate');

const checkVisibility = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    animateElements.forEach(element => {
        const boxTop = element.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', checkVisibility);

// WhatsApp Integration
const whatsappButton = document.querySelector('.whatsapp-button');
whatsappButton.addEventListener('click', () => {
    window.open('https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=Hello%20KJ%20Land%20Surveyors!','_blank');
});