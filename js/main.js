document.addEventListener("DOMContentLoaded", function () {
  // AOS
  AOS.init({
    duration: 900,
    once: true,
    offset: 80
  });

  // Navbar con sombra al hacer scroll
  const navbar = document.querySelector(".custom-navbar");

  function handleNavbarScroll() {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  handleNavbarScroll();
  window.addEventListener("scroll", handleNavbarScroll);

  // Activar link actual al hacer click
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });
});