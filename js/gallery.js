const gallerySwiper = new Swiper(".gallerySwiper", {

  breakpoints :{
    1024: {
      slidesPerView: 1.8,
    },
    // // 태블릿
    // 768: {
    //   slidesPerView: 2,
    // },
    // 모바일
    0: {
      slidesPerView: 1.2,
    },
  },
});

