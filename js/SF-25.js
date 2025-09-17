// pc sf-25 라인 효과
document.addEventListener("DOMContentLoaded", () => {
  const points = document.querySelectorAll(".sf25-point");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        // 뷰포트에서 벗어나면 다시 비활성화 → 무한 반복 가능
        entry.target.classList.remove("active");
      }
    });
  }, { threshold: 0.4 });

  points.forEach(point => observer.observe(point));
});


// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", () => {
//   const highlight = document.querySelector("#SF-25-mobile .highlight");
//   const texts = document.querySelectorAll("#SF-25-mobile .sf25-text p");

//   // 하이라이트가 이동할 좌표 (이미지 위치 기준 %, 필요시 조정)
//   const positions = [
//     { x: "50%", y: "15%" }, // 노즈
//     { x: "50%", y: "40%" }, // 중간
//     { x: "50%", y: "60%" }, // 운전석
//     { x: "50%", y: "85%" }  // 타이어/후방
//   ];

//   ScrollTrigger.create({
//     trigger: "#SF-25-mobile",
//     start: "top top",
//     end: "+=400%",   // 스크롤 길이
//     pin: true,
//     scrub: true,
//     onUpdate: (self) => {
//       const progress = self.progress * (positions.length - 1);
//       const index = Math.floor(progress);
//       const nextIndex = Math.min(index + 1, positions.length - 1);
//       const ratio = progress - index;

//       // 좌표 보간 (GSAP 없이 수동)
//       const x = gsap.utils.interpolate(positions[index].x, positions[nextIndex].x, ratio);
//       const y = gsap.utils.interpolate(positions[index].y, positions[nextIndex].y, ratio);

//       highlight.style.webkitMaskPosition = `${x} ${y}`;
//       highlight.style.maskPosition = `${x} ${y}`;

//       // 텍스트 표시
//       texts.forEach((p, i) => p.classList.toggle("active", i === index));
//     }
//   });
// });

gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", () => {
  const highlight = document.querySelector("#SF-25-mobile .highlight");
  const texts = document.querySelectorAll("#SF-25-mobile .sf25-text p");

  // 포인트 좌표 (이미지 기준 %)
  const positions = [
    { x: 50, y: 15 }, // 노즈
    { x: 50, y: 40 }, // 차체 중간
    { x: 50, y: 60 }, // 운전석
    { x: 50, y: 85 }  // 타이어/후방
  ];

  ScrollTrigger.create({
    trigger: "#SF-25-mobile",
    start: "top top",
    end: "+=400%",
    pin: true,
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress * (positions.length - 1);
      const index = Math.floor(progress);
      const nextIndex = Math.min(index + 1, positions.length - 1);
      const ratio = progress - index;

      // 좌표 보간 (부드럽게 이동)
      const x = gsap.utils.interpolate(positions[index].x, positions[nextIndex].x, ratio);
      const y = gsap.utils.interpolate(positions[index].y, positions[nextIndex].y, ratio);

      // 작은 원형 마스크 적용 (세부 포인트 강조)
      const mask = `radial-gradient(circle at ${x}% ${y}%, transparent 0%, transparent 5%, black 25%)`;
      highlight.style.webkitMaskImage = mask;
      highlight.style.maskImage = mask;

      // 텍스트 전환
      texts.forEach((p, i) => p.classList.toggle("active", i === index));
    }
  });
});
