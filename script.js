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

const fishData = {
  snapper: {
    image: "./jangkaremas/public/catalogsnapper.jpg",
    title: "Ikan Kakap // Snapper // Lutjanidae (Whole)",
    description:
      "Snapper is a premium ocean-caught fish prized for its firm, succulent white flesh and naturally sweet flavor. Perfect for grilling, steaming, or frying — a chef’s favorite for creating elegant, restaurant-quality dishes at home.",
    sizeBg: "./jangkaremas/public/catalogsnapper1.jpg",
    sizes: ["0,3 / 0,49 kg", "0,5 / 2 kg", "2 kg UP"],
    deliveryBg: "./jangkaremas/public/catalogsnapper2.jpg",
    delivery: ["Fresh", "Frozen"],
  },
  grouper: {
    image: "./jangkaremas/public/cataloggrouper.jpg",
    title: "Ikan Kerapu // Grouper // Epinephelus Sp (Whole)",
    description:
      "Grouper is a meaty, mild-flavored fish with large, tender flakes and a clean ocean taste. Its dense texture holds up beautifully when grilled, baked, or pan-seared — making it ideal for hearty seafood dishes and gourmet menus alike.",
    sizeBg: "./jangkaremas/public/cataloggrouper1.jpg",
    sizes: ["0,5 / 1 kg", "1 / 2 kg", "2 / 15 kg", "15 kg UP"],
    deliveryBg: "./jangkaremas/public/cataloggrouper2.jpg",
    delivery: ["Fresh", "Frozen"],
  },
  goldband: {
    image: "./jangkaremas/public/cataloggoldbandsnapper.jpg",
    title: "Ikan Anggoli // Goldband Snapper // Pristipomoides spp (Whole)",
    description:
      "Goldband Snapper is a deep-sea delicacy known for its delicate sweetness, lean white meat, and fine texture. Loved by chefs for its versatility and refined flavor, it shines in sashimi, steamed preparations, or light pan-seared creations.",
    sizeBg: "./jangkaremas/public/cataloggoldbandsnapper1.jpg",
    sizes: ["0,5 / 1 kg", "1 kg UP"],
    deliveryBg: "./jangkaremas/public/cataloggoldbandsnapper2.jpg",
    delivery: ["Fresh", "Frozen"],
  },
};

const pills = document.querySelectorAll("#filter-pills .pill");
const mainImg = document.getElementById("main-img");
const mainTitle = document.getElementById("main-title");
const mainDesc = document.getElementById("main-desc");
const sizeCard = document.getElementById("size-card");
const deliveryCard = document.getElementById("delivery-card");
const sizeList = document.getElementById("size-list");
const deliveryList = document.getElementById("delivery-list");

function updateFishContent(selected) {
  const data = fishData[selected];
  if (!data) return;

  // 🔹 Update main card
  mainImg.src = data.image;
  mainTitle.textContent = data.title;
  mainDesc.textContent = data.description;

  // 🔹 Update size card
  sizeCard.style.backgroundImage = `url('${data.sizeBg}')`;
  sizeList.innerHTML = data.sizes
    .map(
      (s) =>
        `<span class="rounded-lg bg-gray-100 px-3 py-1 text-base text-gray-500">${s}</span>`
    )
    .join("");

  // 🔹 Update delivery card
  deliveryCard.style.backgroundImage = `url('${data.deliveryBg}')`;
  deliveryList.innerHTML = data.delivery
    .map((d) => {
      const color = d === "Fresh" ? "red" : "blue";
      const icon = d === "Fresh" ? "fresh" : "frozen";
      return `
        <span class="flex items-center gap-1 rounded-lg bg-${color}-50 px-3 py-1 text-base text-${color}-600">
          <img
            src="./jangkaremas/public/catalogdelivery${icon}.svg"
            alt="whatwedo"
            class="h-4 w-4 text-${color}"
          />
          ${d}
        </span>`;
    })
    .join("");
}

// 🔹 Click event for pills
pills.forEach((pill) => {
  pill.addEventListener("click", (e) => {
    // Prevent page reload if you want the highlight to stay on the same page
    e.preventDefault();
    const selected = pill.dataset.fish;

    // Remove active styles from all pills
    pills.forEach((p) => {
      p.classList.remove(
        "active",
        "border-transparent",
        "bg-[#242E49]",
        "text-white",
        "hover:bg-[#1b2238]"
      );
      p.classList.add(
        "border-gray-200",
        "text-gray-300",
        "hover:border-gray-300",
        "hover:text-gray-400"
      );
      p.querySelector("span").classList.remove("text-white");
    });

    // Add active styles to the clicked pill
    pill.classList.add(
      "active",
      "border-transparent",
      "bg-[#242E49]",
      "text-white",
      "hover:bg-[#1b2238]"
    );
    pill.classList.remove(
      "border-gray-200",
      "text-gray-300",
      "hover:border-gray-300",
      "hover:text-gray-400"
    );
    pill.querySelector("span").classList.add("text-white");

    // 🔹 Update content
    updateFishContent(selected);
  });
});

// ✅ Run once on page load for the default active pill (Snapper)
window.addEventListener("DOMContentLoaded", () => {
  const activePill = document.querySelector("#filter-pills .pill.active");
  const defaultFish = activePill ? activePill.dataset.fish : "snapper";
  updateFishContent(defaultFish);
});
