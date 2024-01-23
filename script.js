// ----------------------------------- NAV BAR -----------------------------------------------------
// toggles the nav bar when invoked. Used by the menu & X buttons

let closedNav = true;
function toggleNav() {
  const navbar = document.getElementById("navbar");
  const menuButton = document.getElementById("nav-toggle");

  if (closedNav) {
    if (window.innerWidth < 600) {
      navbar.style.width = "100%";
    } else {
      navbar.style.width = "260px";
    }
    menuButton.classList.add("open");
  } else {
    navbar.style.width = "0px";
    menuButton.classList.remove("open");
  }

  closedNav = !closedNav;
}

// ----------------------------------- CAROUSEL -----------------------------------------------------
const carouselButtons = document.querySelectorAll("[data-carousel-button]");

carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    activeSlide.removeAttribute("data-active");
    activeSlide.classList.remove("active-slide");

    slides.children[newIndex].setAttribute("data-active", "true");
    slides.children[newIndex].classList.add("active-slide");
  });
});

// ----------------------------------- FORM -----------------------------------------------------
// we show the element underneath when the user submits

const form = document.getElementById("contact-form");
document.getElementById("main").addEventListener("click", () => {
  if (!closedNav) {
    toggleNav();
  }
});

function onFormSubmit(event) {
  event.preventDefault();
  setTimeout(() => {
    party();
    document.getElementById("form-container").style.display = "none";
    document.getElementById("success-container").style.display = "block";

    const { offsetLeft, offsetTop } =
      document.getElementById("success-container");
    window.scrollTo(offsetLeft, offsetTop);
  }, 500);
}

// shows red borders around the invalid fields when the user clicks submit.
function onFormTrySubmit(event) {
  form.classList.add("form-submitted");
}

// generates a new background colors for the success-container
function generateColours() {
  const colours = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];

  return `rgb${colours.join(",")}`;
}

function party() {
  const successContainer = document.getElementById("success-container");

  const texts = document.getElementsByClassName("invert");

  setInterval(() => {
    const colour = generateColours();
    successContainer.style.backgroundColor = colour;

    for (const txt of texts) {
      txt.style.color = colour;
    }
  }, 2000);
}
