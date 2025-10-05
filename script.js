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

setInterval(changeSlide, 3000);
