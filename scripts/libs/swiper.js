const swiper = new Swiper('.swiper-container', {
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // centeredSlides: true,
  loop:true,
  slidesPerView: 4,
  breakpoints: {
    375: {
      slidesPerView: 1.3,
    },
    480: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.3,
    },
    960: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    }
  }

  // slidesPerView: 3,
  // breakpoints: {
  //  960: {
  //     slidesPerView: 3,
  //   }
  // }
  
});