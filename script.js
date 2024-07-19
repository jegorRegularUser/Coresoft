let intervalId = null;

let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;


function moveSlides(direction) {
  clearInterval(intervalId);
  intervalId = null;
  intervalId = setInterval(() => {
    moveSlides(1);
  }, 5000);

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 4; 
  } else if (currentIndex > totalSlides - 4) {
    currentIndex = 0;
  }

  const translateX = -currentIndex * 25 + "%"; 
  slides.style.transform = `translateX(${translateX})`;
}

document.addEventListener("DOMContentLoaded", () => {
  intervalId = setInterval(() => {
    moveSlides(1);
  }, 5000);
});
