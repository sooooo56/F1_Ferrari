document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".mobileMenu .close-btn");
  const mobileMenu = document.querySelector(".mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
