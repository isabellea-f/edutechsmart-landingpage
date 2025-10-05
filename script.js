let slides = document.querySelectorAll(".slider-container img");

let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide += 1;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 8000);

function prevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide -= 1;

  if (currentSlide === -1) {
    currentSlide = slides.length - 1;
  }
  slides[currentSlide].classList.add("active");
}

/* Buttons */

let prevButton = document.querySelector(".prev-btn");
let nextButton = document.querySelector(".next-btn");

prevButton.addEventListener("click", () => {
  prevSlide();
});

nextButton.addEventListener("click", () => {
  changeSlide();
});
