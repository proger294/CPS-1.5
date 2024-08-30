
// window.addEventListener("DOMContentLoaded", () =>{
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
        loop: false,
        freeMode: true,
        slidesPerView: "auto",
        enabled: true,
        pagination: {
          el: ".swiper-pagination",
        },

      },
      768: {
        enabled: false,
      },
    },
  });
  
// })

