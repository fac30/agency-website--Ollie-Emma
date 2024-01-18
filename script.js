// toggles the nav bar when invoked. Used by the menu & X buttons
let closedNav = true;
function toggleNav() {
  var navbar = document.getElementById("navbar");
  var menuButton = document.getElementById("nav-toggle");
  navbar.style.width = closedNav ? "200px" : "0px";

  menuButton.style.opacity = !closedNav ? "0.5" : "0";
  closedNav = !closedNav;
}

// carousel script
const carouselButtons = document.querySelectorAll("[data-carousel-button]");

carouselButtons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
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