// JavaScript to handle the hamburger menu toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// JavaScript to handle the contact form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("form-response").innerHTML = "<p>Thank you for your message! We'll get back to you soon.</p>";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("form-response").innerHTML = "<p>Please fill in all fields.</p>";
    }
});
