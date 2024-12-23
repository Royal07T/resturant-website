document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector("#hamburger-menu");
    const navLinks = document.querySelector("nav ul");
    const backToTopButton = document.getElementById("back-to-top");

    // Toggle Navigation Menu on Hamburger Click
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
                navLinks.classList.remove("active"); // Close menu after selection
            }
        });
    });

    // Show/Hide Back-to-Top Button on Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Smooth Scroll Back to Top
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
