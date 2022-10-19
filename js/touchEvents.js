// NAVBAR
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// mouse position
const mouse = {
    x: null,
    y: null
}

window.addEventListener("touchstart", event => {
  mouse.x = event.changedTouches[0].clientX;
  mouse.y = event.changedTouches[0].clientY;
}, false);
            
window.addEventListener("touchmove", event => {
  //event.preventDefault();
  mouse.x = event.targetTouches[0].clientX;
  mouse.y = event.targetTouches[0].clientY;
}, false);
            
window.addEventListener("touchend", event => {
  //event.preventDefault();
  mouse.x = 0;
  mouse.y = 0;
}, false);
