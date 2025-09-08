    const swiper = new Swiper(".swiper", {
      loop: true,
      // autoplay: false, // 오토플레이 꺼도 동작 가능
      autoplay: { delay: 5000 }, // 켜고 싶으면 이렇게 설정
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
      const delay = swiper.params.autoplay?.delay || 5000;

      // 모든 progress 초기화
      document.querySelectorAll(".swiper-pagination .progress").forEach(el => {
        el.style.transition = "none";
        el.style.strokeDashoffset = 100;
        void el.offsetWidth; // 강제로 리플로우(transition 초기화)

        // autoplay delay(또는 기본값)에 맞춰 애니메이션 시간 적용
        el.style.transition = `stroke-dashoffset ${delay / 1000}s linear`;
      });

      // 현재 활성화된 bullet 채우기 시작
      const active = document.querySelector(".swiper-pagination-bullet-active .progress");
      if (active) {
        active.style.strokeDashoffset = 0;
      }
    }

    // 슬라이드 변경 & 페이지네이션 갱신 이벤트
    swiper.on("slideChange", runCircleAnimation);
    swiper.on("paginationUpdate", runCircleAnimation);

    // 초기 실행
    runCircleAnimation();