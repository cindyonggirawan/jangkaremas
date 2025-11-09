const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");
const ANIM_MS = 500; // match duration-500

function openMenu() {
  // Show + animate in
  mobileMenu.setAttribute("aria-hidden", "false");
  mobileMenu.classList.remove("translate-y-full", "opacity-0");
  mobileMenu.classList.add("translate-y-0", "opacity-100");
  document.body.classList.add("overflow-hidden");
}

function closeMenu() {
  // Animate out
  mobileMenu.classList.add("translate-y-full", "opacity-0");
  mobileMenu.classList.remove("translate-y-0", "opacity-100");

  // Wait for animation to finish before hiding
  setTimeout(() => {
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("overflow-hidden");
  }, ANIM_MS); // matches Tailwind’s duration-500
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// Close when clicking outside the menu items (backdrop)
mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) closeMenu();
});

// Close on ESC
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    mobileMenu.getAttribute("aria-hidden") === "false"
  ) {
    closeMenu();
  }
});
