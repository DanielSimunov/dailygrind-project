var slideIndex = [1, 1, 1]; // Seperate index for each carousel
var slideId = ["slide1", "slide2", "slide3"] // Class names for each carousel group
var dotId = ["dot1", "dot2", "dot3"] // Class names for each set of dots for each carousel

// Initial display of slides
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

// Function to control next/prev buttons
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
};

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    var dots = document.getElementsByClassName(dotId[no]);
    
    if (n > x.length) {slideIndex[no] = 1}

    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
    }
    x[slideIndex[no]-1].style.display = "flex";
     dots[slideIndex[no]-1].className += " active";
};

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

var navbar = document.querySelector(".nav-container");

document.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.classList.add("fade-in");
        hamburgerMenu.classList.add("fade-in-menu");
    } else {
        navbar.classList.remove("fade-in");
        hamburgerMenu.classList.remove("fade-in-menu");
    }
});
