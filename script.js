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
  const pagination = document.getElementById(`${carouselId}-pagination`);
  const totalSlides = slides?.querySelectorAll(".slide").length;

  let currentIndex = parseInt(sliderContainer.dataset.currentIndex, 10) || 0;

  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 4;
  } else if (currentIndex > totalSlides - 4) {
    currentIndex = 0;
  }

  const translateX = -currentIndex * 25 + "%";
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(${translateX})`;

  sliderContainer.dataset.currentIndex = currentIndex;

  updatePagination(carouselId, currentIndex);
};

const updatePagination = (carouselId, currentIndex) => {
  const pagination = document.getElementById(`${carouselId}-pagination`);
  const totalSlides = document
    .getElementById(`${carouselId}-slides`)
    .querySelectorAll(".slide").length;
  pagination.innerHTML = "";

  for (let i = 0; i < totalSlides; i++) {
    const paginationItem = document.createElement("div");
    paginationItem.classList.add("pagination-item");
    if (i >= currentIndex && i < currentIndex + 4) {
      paginationItem.classList.add("active");
    } else {
      paginationItem.classList.remove('active');
    }
    pagination.appendChild(paginationItem);
  }
};

const initPagination = (carouselId) => {
  const pagination = document.getElementById(`${carouselId}-pagination`);
  const totalSlides = document
    .getElementById(`${carouselId}-slides`)
    .querySelectorAll(".slide").length;

  for (let i = 0; i < totalSlides; i++) {
    const paginationItem = document.createElement("div");
    paginationItem.classList.add("pagination-item");
    pagination.appendChild(paginationItem);
  }

  updatePagination(carouselId, 0);
};
initPagination('trust');


const caseContainer = document.querySelector('.case-list');
const caseShadow = document.querySelector('.case-list .light-shadow');
const showMoreButton = document.getElementById('show-more');
const showLessButton = document.getElementById('show-less');

showMoreButton.addEventListener('click', () => {
  caseContainer.style.maxHeight = 'none';
  caseShadow.style.display='none';
  showMoreButton.style.display = 'none';
  showLessButton.style.display = 'inline-block';
});

showLessButton.addEventListener('click', () => {
  caseContainer.style.maxHeight = '700px';
  caseShadow.style.display='block';
  showMoreButton.style.display = 'inline-block';
  showLessButton.style.display = 'none';
});




const readMoreButtons = document.querySelectorAll(".read-more");
const casesModal = document.querySelector(".cases .modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

const modalGoals = document.getElementById("modal-goals");
const modalTasks = document.getElementById("modal-tasks");
const modalResults = document.getElementById("modal-results");
const closeButton = document.querySelector(".close-button");
const downloadButton = document.querySelector(".download-button");

readMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    casesModal.classList.remove("hide");
    casesModal.classList.add("show");

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

    casesModal.style.display = "block";
  });
});

const closeCasesModal = () => {
  casesModal.classList.add("hide");

  casesModal.classList.remove("show");
  setTimeout(() => {
    casesModal.style.display = "none";
  }, 500);
};

closeButton.addEventListener("click", () => {
  closeCasesModal();
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
  closeCasesModal();
});


const formBtn = document.getElementById("formBtn");
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

window.addEventListener("click", (event) => {
  if (
    (!nav.contains(event.target) || event.target.localName === "a") &&
    isDropDownOpen
  ) {
    dropDownHandler();
  }
  if (event.target == contactModal || event.target == casesModal) {
    closeCasesModal();
    closeContactModal();
  }
});

const contactModal = document.querySelector(".contact .modal")
const contactBtn_pre = document.getElementById("contact-btn-pre")
const contactBtn_sol = document.getElementById("contact-btn-sol")
const modalFormBtn = document.getElementById("modalFormBtn")

const closeContactModal = () => {
  contactModal.classList.add("hide");

  contactModal.classList.remove("show");
  setTimeout(() => {
    contactModal.style.display = "none";
  }, 500);
};

[contactBtn_pre, contactBtn_sol].forEach(el=>el.addEventListener("click", () => {
  contactModal.classList.remove("hide");
  contactModal.classList.add("show");
  contactModal.style.display = "block";
}))

modalFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeContactModal();
});