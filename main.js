import "./style.css";

const menuElement = document.querySelector(".menu");

menuElement.addEventListener("click", () => {
  menuElement.classList.toggle("show");
  //   console.log("click");
});
