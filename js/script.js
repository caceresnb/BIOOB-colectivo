// NAVBAR
const btnIcon = document.getElementById("menu-btn");
const menuToggle = document.getElementById("menu-toggle");

btnIcon.addEventListener("click", () => {
  menuToggle.classList.toggle("nav-links--show");
});
