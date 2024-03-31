// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("sectionSlide");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// } 

// Get the modal
// var modal = document.getElementById("loginModal");

// Get the button that opens the modal
// var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("page-modal-close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// } 

// Sign Up Modal
// var signupModal = document.getElementById("signupModal");

// Get the button that opens the modal
// var signupBtn = document.getElementById("signupBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("signup-modal-close")[0];

// When the user clicks on the button, open the modal
// signupBtn.onclick = function() {
//   signupModal.style.display = "block";
// }

// signupMobileBtn.onclick = function() {
//   signupModal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   signupModal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == signupModal) {
//     signupModal.style.display = "none";
//   }
// } 


const resBtn = document.querySelector("#resBtn");
const resNav = document.querySelector("#resNav");

resBtn.addEventListener("click", ()=>{
  resNav.classList.toggle("res-nav");
});