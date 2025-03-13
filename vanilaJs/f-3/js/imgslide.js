window.addEventListener("load", () => {
 const slideList = new Swiper(".slide-list", {
  speed: 1000,
  loop: true,
  autoplay: {
   delay: 1000,
   disableOnInteraction: false,
  },
  navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
  },
 });
});
