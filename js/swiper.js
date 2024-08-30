
window.addEventListener("DOMContentLoaded", () =>{
  const swiper = new Swiper(".brands__swiper", {
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
      768: {
        enabled: false,
      },
    },
  });
  
})

