const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const menuItems = document.querySelectorAll(".menu-item");

function handleToggleMenu(e) {
  e.target.classList.toggle("is-fixed");
  e.target.classList.toggle("fa-bars");
  e.target.classList.toggle("fa-times");
  navbarMenu.classList.toggle("show");
}

navbarToggle.addEventListener("click", handleToggleMenu);

// Mobile
if (window.outerWidth <= 767) {
  function handleRemoveMenu() {
    navbarToggle.classList.remove("is-fixed");
    navbarToggle.classList.add("fa-bars");
    navbarToggle.classList.remove("fa-times");
    navbarMenu.classList.remove("show");
  }

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", handleRemoveMenu)
  );
}
