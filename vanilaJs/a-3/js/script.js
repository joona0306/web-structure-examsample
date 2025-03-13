window.addEventListener("load", () => {
 // image fadeIn, fadeOut
 const slides = document.querySelectorAll(".img-slide a");
 //  console.log(slides);
 let currentIndex = 0;

 slides.forEach((slide, index) => {
  slide.style.opacity = index === 0 ? "1" : "0";
  slide.style.transition = "opacity 1s";
 });

 setInterval(() => {
  const currentSlide = slides[currentIndex];
  currentIndex = (currentIndex + 1) % slides.length;
  const nextSlide = slides[currentIndex];

  currentSlide.style.opacity = "0";
  nextSlide.style.opacity = "1";
 }, 3000);

 // tabmenu
 const tabs = document.querySelectorAll(".tabmenu > ul > li > a");

 tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
   e.preventDefault(); // a태그 기본동작 방지

   document
    .querySelector(".tabmenu > ul > li.active")
    ?.classList.remove("active");

   tab.parentElement.classList.add("active");
  });
 });

 // modal
 const noticeFirstItem = document.querySelector(".notice li:first-child");
 //  console.log(noticeFirstItem);
 const modal = document.querySelector("#modal");
 //  console.log(modal);
 const modalCloseBtn = document.querySelector(".modal-btn");
 //  console.log(modalCloseBtn);

 noticeFirstItem.addEventListener("click", () => {
  modal.classList.add("active");
 });

 modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("active");
 });
});
