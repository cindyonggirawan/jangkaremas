const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  // Show + animate in
  mobileMenu.classList.remove("hidden", "translate-y-full", "opacity-0");
  mobileMenu.classList.add("translate-y-0", "opacity-100");
  document.body.classList.add("overflow-hidden");
});

closeBtn.addEventListener("click", () => {
  // Animate out
  mobileMenu.classList.add("translate-y-full", "opacity-0");
  mobileMenu.classList.remove("translate-y-0", "opacity-100");

  // Wait for animation to finish before hiding
  setTimeout(() => {
    mobileMenu.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 500); // matches Tailwind’s duration-500
});
