// Select the hamburger icon and the navbar-middle
const hamburger = document.getElementById("menu-toggle");
const navbarMiddle = document.querySelector(".navbar-middle");

// Add click event to toggle the .show class on navbar-middle
hamburger.addEventListener("click", () => {
  navbarMiddle.classList.toggle("show");
});
