const OPEN_CLASSNAME = "open";

const navLinks = document.getElementById("nav-links");

function toggleMenu() {
  navLinks.classList.contains(OPEN_CLASSNAME) ?
    navLinks.classList.remove(OPEN_CLASSNAME) :
    navLinks.classList.add(OPEN_CLASSNAME);
}