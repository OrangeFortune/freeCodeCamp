// main.js

// Document Ready Function
document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");

    // Example: Event listener for form submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission behavior
            handleFormSubmit();
        });
    }

    // Example: Event listener for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            navigateToSection(event.target.getAttribute("href"));
        });
    });
});

// Function to handle form submission
function handleFormSubmit() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        console.log("Form submitted successfully!");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        // Here you can add code to process the form data, e.g., send it to a server
        alert("Thank you for your message!");
    } else {
        alert("Please fill out all fields.");
    }
}

// Function to navigate to a section of the page
function navigateToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        console.log("Navigated to:", sectionId);
    } else {
        console.log("Section not found:", sectionId);
    }
}

// Example: Function to show/hide a menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
        menu.classList.toggle("visible");
    }
}

// Example: Function to change the theme of the webpage
function changeTheme(theme) {
    const body = document.body;
    if (theme === "dark") {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
    } else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
    }
    console.log("Theme changed to:", theme);
}

// Add more functions and event listeners as needed for your project

