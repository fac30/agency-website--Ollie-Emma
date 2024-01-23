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

const form = document.getElementById("contact-form");
document.getElementById("main").addEventListener("click", () => {
  if (!closedNav) {
    toggleNav();
  }
});
// ----------------------------------- FORM -----------------------------------------------------
// we show the element underneath when the user submits
function onFormSubmit(event) {
  event.preventDefault();
  document.getElementById("form-container").style.display = "none";
  document.getElementById("success-container").style.display = "block";
}

// shows red borders around the invalid fields when the user clicks submit.
function onFormTrySubmit(event) {
  form.classList.add("form-submitted");
}
