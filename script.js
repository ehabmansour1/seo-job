// Function to check if the device is a mobile
function isMobile() {
  return window.innerWidth <= 768; // Adjust the breakpoint as needed
}

// Initialize AOS only on non-mobile devices
if (!isMobile()) {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
  });
} else {
  // Ensure elements are visible on mobile
  document.querySelectorAll('[data-aos]').forEach((element) => {
    element.style.opacity = '1';
    element.style.transform = 'none';
  });
}

// Handle hover effect for the glitch heading
const glitchHeading = document.getElementById("glitch-heading");

if (glitchHeading) {
  glitchHeading.addEventListener("mouseenter", () => {
    glitchHeading.classList.add("hover:scale-110", "hover:rotate-2");
  });

  glitchHeading.addEventListener("mouseleave", () => {
    glitchHeading.classList.remove("hover:scale-110", "hover:rotate-2");
  });
}