// JavaScript interactivity for the KJ Land Surveyors website

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    // Add interactivity logic here
    console.log('Form submitted successfully!');
}

// Event listener for the contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
}