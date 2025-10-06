



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



/* this is for youtube clip */

document.querySelectorAll('.youtube-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const videoId = wrapper.getAttribute('data-video-id');
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.width = '100%';
    iframe.style.height = '315px';
    wrapper.innerHTML = '';
    wrapper.appendChild(iframe);
  });
}); 
