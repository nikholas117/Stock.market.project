document.addEventListener("DOMContentLoaded", () => {
  // Navbar toggle in mobile
  const navbar = document.querySelector("[data-navbar]") as HTMLElement | null;
  const navToggler = document.querySelector(
    "[data-nav-toggler]"
  ) as HTMLElement | null;

  if (navToggler && navbar) {
    navToggler.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

  // Header scroll state
  const header = document.querySelector("[data-header]") as HTMLElement | null;

  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("active", window.scrollY > 50);
    });
  }
});
