const moveSlides = (carouselId, direction) => {
  const sliderContainer = document.getElementById(`${carouselId}-slider`);
  const slides = sliderContainer?.querySelector(".slides");
  const totalSlides = slides?.querySelectorAll(".slide").length;

  let currentIndex = parseInt(sliderContainer.dataset.currentIndex, 10) || 0;

  clearInterval(sliderContainer.dataset.intervalId);

  currentIndex += direction;
  if (currentIndex < 0) {
      currentIndex = totalSlides - 4;
  } else if (currentIndex > totalSlides - 4) {
      currentIndex = 0;
  }

  const translateX = -currentIndex * 25 + "%";
  slides.style.transform = `translateX(${translateX})`;

  sliderContainer.dataset.currentIndex = currentIndex;
  sliderContainer.dataset.intervalId = setInterval(() => {
      moveSlides(carouselId, 1);
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".slider-container");
  carousels.forEach(carousel => {
      carousel.dataset.intervalId = setInterval(() => {
          moveSlides(carousel.id, 1);
      }, 5000);
  });
});

const formBtn = document.getElementById('formBtn');
formBtn.addEventListener('click', e => {e.preventDefault()});