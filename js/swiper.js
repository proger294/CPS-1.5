const swiper = new Swiper(".swiper", {
  loop: false,
  freeMode: true,
  slidesPerView: "auto",
  enabled: true,
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    320: {
      enabled: true,
    },
  },
  breakpoints: {
    768: {
      enabled: false,
    },
  },
});
