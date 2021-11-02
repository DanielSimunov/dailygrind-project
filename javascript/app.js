var navbar = document.querySelector(".nav-container");

// Event Listeners
document.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.classList.add("fade-in");
        hamburgerMenu.classList.add("fade-in-menu");
    } else {
        navbar.classList.remove("fade-in");
        hamburgerMenu.classList.remove("fade-in-menu");
    }
});

var hamburger = document.getElementById("hamburger");
var hamburgerMenu = document.getElementById("hamburger-menu");

hamburger.addEventListener('click', function() {
    if (hamburgerMenu.style.height == '0px' || hamburgerMenu.style.height == '') {
        hamburger.classList.add("open");
        hamburgerMenu.style.height = '220px';
    } else {
        hamburger.classList.remove("open");
        hamburgerMenu.style.height = '0px';
    }
});
