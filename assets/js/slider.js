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
  clearSlide();
  modal.style.display = "none";
  navbar.style.display = "block";
  // Enable scroll
  body.style.overflow="auto";
}

//Room slide
let data = [
  [ //Lodging
    ["./assets/image/room_slide/Lodging/dorm.jpg", 
      "The dorm area has 2 floors and 12 rooms with the capacity up to 72 guests, with the most minimalist and pure Vietnamese architecture, area from 25 - 35 sqm"],
    ["./assets/image/room_slide/Lodging/bugalow.jpg", 
      "With 6 bungalows located in  the most  prime location in the farmstay, each unit's area will be distinct from the rest, providing visitors with solitude and the" + 
        "most tranquil feeling with a view of the stream and Ba Na mountain. Each bungalow is 45 square meters and can accommodate up to three individuals, making it appropriate for both long and short stays."], 
    ["./assets/image/room_slide/Lodging/camp.jpg", 
      "With some fun activities and group time, The Chilling World Farmstay is suitable for picnics and vacations for the majority of teenagers. The maximum capacity for" + 
        "a tent is 2-3 people"]],
  [ //Restaurant
    ["./assets/image/room_slide/Restaurant/res1.jpg",
      "The restaurant serves breakfast in the morning. Lunch and dinner are served in the form of à la carte, featuring the specialties of the Vietnamese people." + 
      "In addition, the restaurant also serves BBQ with dishes such as chicken, pork, grilled vegetables, etc. for guests to camp or experience the service at the restaurant."],
    ["./assets/image/room_slide/Restaurant/res2.jpg",
      "Located in the center of the farmstay, the design and construction help visitors have a wide view of the garden and fruit garden. "+
      "There is also a cafe, bringing a relaxing feeling close to nature, serving organic drinks and detox drinks. Every Saturday there will be a music show"],
    ["./assets/image/room_slide/Restaurant/bbq.jpg",
      "The restaurant also serves BBQ with dishes such as chicken, pork, grilled vegetables, sea food etc. for guests to camp or experience the service at the restaurant."]],
  [ //Agriculture
    ["./assets/image/room_slide/Agriculture/agriculture1.jpg",
      "With a large area divided into separate zones, visitors will be guided and experience a day of becoming a farmer at farmstay, including gardening, watering, planting, and taking care of vegetable gardens. "+
      "Visitors can also gain knowledge of orchid varieties, care techniques, and especially the stories of each orchid."],
    ["./assets/image/room_slide/Agriculture/agriculture2.jpg",
      "Jackfruit garden"],
    ["./assets/image/room_slide/Agriculture/agriculture3.jpg",
      "Mango garden"],
    ["./assets/image/room_slide/Agriculture/agriculture4.jpg",
      "Orchid garden"]],
  [ //Breeding
    ["./assets/image/room_slide/Breeding/breeding1.jpg",
      "The Chilling World Farmstay will also have areas for raising animals such as king chickens (Dong Tao chickens), peacocks and free-range pigs."],
    ["./assets/image/room_slide/Breeding/breeding2.jpg",
      "The Chilling World Farmstay will also have areas for raising animals such as king chickens (Dong Tao chickens), peacocks and free-range pigs."],
    ["./assets/image/room_slide/Breeding/breeding3.jpg",
      "The Chilling World Farmstay will also have areas for raising animals such as king chickens (Dong Tao chickens), peacocks and free-range pigs."]]
]

let arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
current = 0;

for(var i = 0; i < img_links.length; i++){
  img_links[i].onclick = function(){
    //get index of links
    let index = img_links.indexOf(this);
    //get array of img
    let slideArray = data[index];
    //add slide div in modal
    for(let count = 0; count < slideArray.length; count++){
      addSlide(slideArray[count][0], slideArray[count][1]);
    }

    let sliderImages = document.querySelectorAll(".slide");
    
    //unhide model
    modal.style.display = "flex";
    navbar.style.display = "none";
    // Prevent scroll
    body.style.overflow="hidden";
    startSlide(sliderImages);

  }
}

function reset(sliderImages) {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
  
// Initial slide
function startSlide(sliderImages) {
  current = 0;
  reset(sliderImages);
  sliderImages[0].style.display = "block";
}
  
// Show previous
function slideLeft(sliderImages) {
  reset(sliderImages);
  sliderImages[current - 1].style.display = "block";
  current--;
}
  
// Show next
function slideRight(sliderImages) {
  reset(sliderImages);
  sliderImages[current + 1].style.display = "block";
  current++;
}

//Arrow
  // Left arrow click
  arrowLeft.addEventListener("click", function () {
    let sliderImages = document.querySelectorAll(".slide");
    if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft(sliderImages);
  });
    
  // Right arrow click
  arrowRight.addEventListener("click", function (){
    let sliderImages = document.querySelectorAll(".slide");
    if (current === (sliderImages.length - 1)) {
      current = -1;
    }
    slideRight(sliderImages);
  });

// addSlide
function addSlide(img, title){
  document.getElementById("slide_wrap").innerHTML +=
    "<div class=\"slide\"><img class=\"modal-content\" src=\""+ img + "\"><div id=\"caption\">"+ title +"</div></div>";
}

function clearSlide(){
  document.getElementById("slide_wrap").innerHTML = "";
  
}