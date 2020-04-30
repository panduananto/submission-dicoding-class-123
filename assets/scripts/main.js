const mainNav = document.getElementById("navbar-menu");
const navBarToggle = document.getElementById("navbar-toggler");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
