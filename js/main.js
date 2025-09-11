// main swiper (히어로)
const mainSwiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  
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
  on: {
    slideChangeTransitionStart: function () {
      // 모든 슬라이드 텍스트 숨기기
      document.querySelectorAll(".swiper-slide .innerText").forEach(el => {
        el.classList.remove("animate");
      });

      // 현재 활성화 슬라이드 텍스트만 보여주기
      const activeSlide = this.slides[this.activeIndex];
      const innerText = activeSlide.querySelector(".innerText");
      if (innerText) {
        // 약간의 지연을 줘서 자연스럽게
        setTimeout(() => {
          innerText.classList.add("animate");
        }, 200);
      }
    },
  },
});

// 초기 실행
document.addEventListener("DOMContentLoaded", () => {
  const firstInner = document.querySelector(".swiper-slide-active .innerText");
  if (firstInner) {
    setTimeout(() => firstInner.classList.add("animate"), 200);
  }
});

// 원형 애니메이션
function runCircleAnimation(isInit = false) {
  const delay = mainSwiper.params.autoplay?.delay || 7000;

  document.querySelectorAll(".swiper-pagination .progress").forEach(el => {
    el.style.transition = "none";
    el.style.strokeDashoffset = 100; // 다 비워놓기
  });

  const active = document.querySelector(".swiper-pagination-bullet-active .progress");
  if (active) {
    // reflow 강제 → transition 적용을 위해
    void active.offsetWidth;

    // 초기 실행일 경우에도 애니메이션 시작하도록 처리
    active.style.transition = `stroke-dashoffset ${delay / 1000}s linear`;
    active.style.strokeDashoffset = 0;
  }
}

// Swiper 이벤트 등록
mainSwiper.on("slideChange", () => runCircleAnimation());
mainSwiper.on("paginationUpdate", () => runCircleAnimation());

// 초기 실행
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => runCircleAnimation(true), 50); // 살짝 지연 후 실행
});

///////////////

// full 섹션 텍스트 애니메이션 (스크롤 감지)
  AOS.init({
    duration: 1000, // 애니메이션 시간 (ms)
    once: false,
  });


// sf-25 이미지 변경 + active 표시
const sfTexts = document.querySelectorAll("#SF-25 .sfText p");
const sfImage = document.querySelector("#SF-25 .sfImage");

sfTexts.forEach(p => {
  // PC : hover
  p.addEventListener("mouseenter", () => updateSF25(p));

  // 모바일 : 터치(=클릭)
  p.addEventListener("click", () => updateSF25(p));
});

function updateSF25(p) {
  // 이미지 교체
  sfImage.style.backgroundImage = `url(${p.dataset.img})`;

  // 모든 텍스트에서 active 제거
  sfTexts.forEach(el => el.classList.remove("active"));

  // 선택된 텍스트에 active 추가
  p.classList.add("active");
}


// race swiper
const raceSwiper = new Swiper(".raceSwiper", {
  spaceBetween: 30,

  breakpoints :{
    1024: {
      slidesPerView: 2.5,
    },
    // 태블릿
    768: {
      slidesPerView: 2,
    },
    // 모바일
    0: {
      slidesPerView: 1.3,
    },
  },
});


