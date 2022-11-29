import "./style.css";

const menuElement = document.querySelector(".menu");
const NavLinksElement = document.querySelector(".nav__links");

menuElement.addEventListener("click", () => {
  menuElement.classList.toggle("show");
  NavLinksElement.classList.toggle("nav__links--show");
  //   console.log("click");
});
