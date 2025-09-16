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


// AOS Js (스크롤 감지)
  AOS.init({
    duration: 1000, // 애니메이션 시간 (ms)
    once: false,
    easing: 'ease-out-cubic',
      // offset: 120       // 화면에서 몇 px 떨어졌을 때 시작할지
  });
