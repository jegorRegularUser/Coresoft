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
    currentIndex = totalSlides - 4; // Adjust for the last 3 slides being visible
  } else if (currentIndex > totalSlides - 4) {
    currentIndex = 0;
  }

  const translateX = -currentIndex * (100 / 4) + "%"; // Calculate percentage
  slides.style.transform = `translateX(${translateX})`;
}

document.addEventListener("DOMContentLoaded", () => {
  intervalId = setInterval(() => {
    moveSlides(1);
  }, 5000);
});
