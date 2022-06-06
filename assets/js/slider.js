// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

// On scroll

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {

//     //hide navbar on scroll
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("header").style.top = "0";
//     } else {
//       document.getElementById("header").style.top = "-200px";
//     }
//     prevScrollpos = currentScrollPos;

//     // Modified navbar on scroll
//     let logo = document.getElementById("logo");
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       logo.style.opacity = "0";
//       logo.style.top = "-200px";
//     } else {
//       logo.style.opacity = "1";
//       logo.style.top = "-27px";
//     }
// }

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}