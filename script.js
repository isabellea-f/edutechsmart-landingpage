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

setInterval(changeSlide, 5000);

// Buttons
let prevButton = document.querySelector(".prev-btn");
let nextButton = document.querySelector(".next-btn");

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", changeSlide);

/* Darkmode button */
const darkmodeBtn = document.querySelector(".darkmode-btn");

darkmodeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");

  if (document.documentElement.classList.contains("dark-mode")) {
    darkmodeBtn.innerHTML = "Light Mode";
  } else {
    darkmodeBtn.innerHTML = "Dark Mode";
  }
});

// Alerts when an element with classname btnAlert is clicked
let links = document.querySelectorAll(".btnAlert");
links.forEach(tag => {
  tag.addEventListener("click", () => alert("To be Built"));
});
