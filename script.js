// Initialize AOS
AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
});

// Handle hover effect for the glitch heading
const glitchHeading = document.getElementById("glitch-heading");

glitchHeading.addEventListener("mouseenter", () => {
  glitchHeading.classList.add("hover:scale-110", "hover:rotate-2");
});

glitchHeading.addEventListener("mouseleave", () => {
  glitchHeading.classList.remove("hover:scale-110", "hover:rotate-2");
});
