var navbar = document.querySelector(".nav-container");

// Event Listeners
document.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.classList.add("fade-in");
    } else {
        navbar.classList.remove("fade-in");
    }
});

