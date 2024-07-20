const navToggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const navDropdown = document.querySelector(".nav__dropdown");
let isDropDownOpen = false;

const dropDownHandler = () => {
  isDropDownOpen = !isDropDownOpen;
  if (!isDropDownOpen) {
    navDropdown.classList.add("hide");
    navDropdown.classList.remove("show");
    setTimeout(() => {
      navDropdown.style.display = "none";
    }, 400);
  } else {
    navDropdown.style.display = "block";
    navDropdown.classList.add("show");
    navDropdown.classList.remove("hide");
  }
};

navToggle.addEventListener("click", dropDownHandler);

const moveSlides = (carouselId, direction) => {
  const sliderContainer = document.getElementById(`${carouselId}-slider`);
  const slides = sliderContainer?.querySelector(".slides");
  const totalSlides = slides?.querySelectorAll(".slide").length;

  let currentIndex = parseInt(sliderContainer.dataset.currentIndex, 10) || 0;

  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 4;
  } else if (currentIndex > totalSlides - 4) {
    currentIndex = 0;
  }

  const translateX = -currentIndex * 25 + "%";
  slides.style.transform = `translateX(${translateX})`;

  sliderContainer.dataset.currentIndex = currentIndex;
};

const formBtn = document.getElementById("formBtn");
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

const readMoreButtons = document.querySelectorAll(".read-more");
const modal = document.querySelector(".modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

const modalGoals = document.getElementById("modal-goals");
const modalTasks = document.getElementById("modal-tasks");
const modalResults = document.getElementById("modal-results");
const closeButton = document.querySelector(".close-button");
const downloadButton = document.querySelector(".download-button");

readMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.remove("hide");
    modal.classList.add("show");

    const caseElement = button.parentElement;
    modalTitle.textContent = caseElement.querySelector("h2").textContent;
    modalDescription.textContent = caseElement.querySelector("p").textContent;

    const goals = caseElement.querySelectorAll("h3 + ul li");
    modalGoals.innerHTML = "";
    goals.forEach((goal) => {
      const li = document.createElement("li");
      li.textContent = goal.textContent;
      modalGoals.appendChild(li);
    });

    const tasks = caseElement.querySelectorAll("h3 + ul li");
    modalTasks.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.textContent;
      modalTasks.appendChild(li);
    });

    const results = caseElement.querySelectorAll("h3 + ul li");
    modalResults.innerHTML = "";
    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result.textContent;
      modalResults.appendChild(li);
    });

    modal.style.display = "block";
  });
});
const closeModal = () => {
  modal.classList.add("hide");

  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
};

closeButton.addEventListener("click", () => {
  closeModal();
});

downloadButton.addEventListener("click", () => {
  downloadButton.setAttribute(
    "href",
    `./assets/Кейс${modalTitle.textContent.substring(6, 7)}.pdf`
  );
  downloadButton.setAttribute(
    "download",
    `${modalTitle.textContent.substring(0, 7)}.pdf`
  );
  closeModal();
});

window.addEventListener("click", (event) => {
  if (( !nav.contains(event.target) || event.target.localName === 'a') && isDropDownOpen) {
    dropDownHandler();
  }
  if (event.target == modal) {
    closeModal();
  }
});
