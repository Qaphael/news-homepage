const menu = document.getElementById("nav-menu");
const nav_close = document.getElementById("nav-close");
const nav_toggle = document.getElementById("nav-toggle");
const overlay = document.getElementById("overlay");
const navLink = document.querySelectorAll(".nav-link");
const whiteBg = document.querySelector(".navbar");

if (nav_toggle) {
  nav_toggle.addEventListener("click", () => {
    menu.classList.add("open-menu");
    overlay.style.display = "block";
    whiteBg.style.background = "none";
  });
}

if (nav_close) {
  nav_close.addEventListener("click", () => {
    menu.classList.remove("open-menu");
    overlay.style.display = "none";
    whiteBg.style.background = "#fff";
  });
}

const linkAction = () => {
  menu.classList.remove("open-menu");
  overlay.style.display = "none";
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
