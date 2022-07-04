//Base
NodeList.prototype.indexOf = Array.prototype.indexOf;
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
var navbar = document.getElementById("navbar");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    navbar.style.opacity = 1;
  } else {
    mybutton.style.display = "none";
    navbar.style.opacity = 0;
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Show elements by scroll

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Body
var body = document.querySelector("body");

// Modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img_links = document.querySelectorAll(".room__content");//for line 128


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// for(var i = 0; i < img_links.length; i++){
//   img_links[i].onclick = function(){
//     var img = this.getElementsByTagName("img")[0];
//     var title = this.querySelector(".room__desc p");
//     modal.style.display = "flex";
//     modalImg.src = img.src;
//     captionText.innerHTML = title.innerHTML;
//     navbar.style.display = "none";
//     // Prevent scroll
//     body.style.overflow="hidden";
//   }
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  navbar.style.display = "block";
  // Enable scroll
  body.style.overflow="auto";
}

//Room slide
let data = [
  [ ["./assets/image/room_slide/Lodging/dorm2.jpg", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos provident nulla et of"],
    ["./assets/image/room_slide/Lodging/bungalow.jpg", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos provident nulla et of"], 
    ["./assets/image/room_slide/Lodging/campsite.jpg", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos provident nulla et of"]],
  [],
  [],
  []
]

let sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
current = 0;

for(var i = 0; i < img_links.length; i++){
  img_links[i].onclick = function(){
    let index = img_links.indexOf(this);
    var sliderImages = data[index];
    console.warn(sliderImages);
    var img = sliderImages[0][0];
    var title = sliderImages[0][1];
    console.warn(title);
    modal.style.display = "flex";
    modalImg.src = img;
    captionText.innerHTML = title;
    navbar.style.display = "none";
    // Prevent scroll
    body.style.overflow="hidden";
    startSlide();
  }
}

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
  
// Initial slide
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}
  
// Show previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
  
// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
  
// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});
  
// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});
  
// startSlide();