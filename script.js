// toggles the nav bar when invoked. Used by the menu & X buttons
let closedNav = true;
function toggleNav() {
  var navbar = document.getElementById("navbar");
  var menuButton = document.getElementById("nav-toggle");
  navbar.style.width = closedNav ? "200px" : "0px";

  menuButton.style.opacity = !closedNav ? "0.5" : "0";
  closedNav = !closedNav;
}
