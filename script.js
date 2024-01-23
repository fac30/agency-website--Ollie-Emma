const navbar = document.getElementById("navbar");
const menuButton = document.getElementById("nav-toggle");
const form = document.getElementById("contact-form");

// ----------------------------------- NAV BAR -----------------------------------------------------

// toggles the nav bar when invoked. Used by the menu & X buttons
// override is optional
function toggleNav(forceOpenClose) {
  const navClasses = Array.from(navbar.classList);
  const menuButtonClasses = Array.from(menuButton.classList);

  let shouldNavOpen;

  if (forceOpenClose !== undefined) {
    shouldNavOpen = forceOpenClose;
  } else {
    shouldNavOpen =
      !navClasses.includes("open") && !menuButtonClasses.includes("open");
  }

  if (shouldNavOpen) {
    navbar.classList.add("open");
    menuButton.classList.add("open");
  } else {
    navbar.classList.remove("open");
    menuButton.classList.remove("open");
  }
}

document.querySelectorAll("#menu li a").forEach((el) => {
  el.addEventListener("click", () => {
    setTimeout(() => {
      toggleNav(false);
    }, 200);
  });
});

document
  .getElementById("main")
  .addEventListener("click", () => toggleNav(false));

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

// shows red borders around the invalid fields when the user clicks submit.
function onFormTrySubmit() {
  form.classList.add("form-submitted");
}

function onFormSubmit(event) {
  event.preventDefault();
  setTimeout(() => {
    party();
    document.getElementById("form-container").style.display = "none";
    document.getElementById("success-container").style.display = "block";

    // scroll to it
    const { offsetLeft, offsetTop } =
      document.getElementById("success-container");
    window.scrollTo(offsetLeft, offsetTop);
  }, 500);
}

// generates a new background colors for the success-container
function generateColours() {
  const colours = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];

  return `rgb(${colours.join(",")})`;
}

// changes the colour of the success page header and background every 3 seconds
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
