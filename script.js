let slides = document.querySelectorAll(".slider-container > div");
let currentSlide = 0;

slides[currentSlide].classList.add("active");

function changeSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slides[currentSlide].classList.add("active");
}

function prevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 3000);

// Buttons
let prevButton = document.querySelector(".prev-btn");
let nextButton = document.querySelector(".next-btn");

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", changeSlide);
