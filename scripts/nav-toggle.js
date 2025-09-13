// nav-toggle.js
// Toggle navigasi mobile hamburger menu

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-navigation");

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    nav.classList.toggle("open");
  });

  // Tutup menu saat klik link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", false);
    });
  });
});
