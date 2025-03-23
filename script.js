// Add animations on scroll
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("animate__animated", "animate__fadeIn");
  });
});
