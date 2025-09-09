const swiper = new Swiper(".swiper", {
  loop: true,
  // autoplay: { delay: 7000 },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
          <svg viewBox="0 0 36 36">
            <circle class="bg" cx="18" cy="18" r="16"></circle>
            <circle class="progress" cx="18" cy="18" r="16"></circle>
          </svg>
        </span>
      `;
    },
  },
});

// 원형 애니메이션 실행 함수
function runCircleAnimation() {
  const delay = swiper.params.autoplay?.delay || 7000;

  // 모든 bullet progress 초기화
  document.querySelectorAll(".swiper-pagination .progress").forEach(el => {
    el.style.transition = "none";
    el.style.strokeDashoffset = 100;
  });

  // 활성화된 bullet만 채워지게
  const active = document.querySelector(".swiper-pagination-bullet-active .progress");
  if (active) {
    void active.offsetWidth; // 강제 리플로우로 transition 초기화
    active.style.transition = `stroke-dashoffset ${delay / 1000}s linear`;
    active.style.strokeDashoffset = 0;
  }
}

swiper.on("slideChange", runCircleAnimation);
swiper.on("paginationUpdate", runCircleAnimation);

// 초기 실행
runCircleAnimation();