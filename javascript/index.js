// Selectors
var slideIndex = [1, 1, 1];
var slideId = ["slide1", "slide2", "slide3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

var navbar = document.querySelector(".nav-container");

// Event Listeners
document.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.classList.add("fade-in");
    } else {
        navbar.classList.remove("fade-in");
    }
});

// Functions
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
};

// Slide function
function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {slideIndex[no] = 1}

    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    x[slideIndex[no]-1].style.display = "block";
    // dots[slideIndex[no]-1].className += " active";
};