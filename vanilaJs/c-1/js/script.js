window.addEventListener("load", () => {
 // submenu
 const naviItems = document.querySelectorAll(".navi > li");
 //  console.log(naviItems);

 naviItems.forEach((item) => {
  item.addEventListener("mouseover", function () {
   //    console.log(item.querySelector(".submenu"));
   const submenu = item.querySelector(".submenu");
   submenu.style.height = "120px";
  });

  item.addEventListener("mouseout", function () {
   const submenu = item.querySelector(".submenu");
   submenu.style.height = "0px";
  });
 });

 // image fadeIn/Out
 const slides = document.querySelectorAll(".img-slide a");
 let currentIndex = 0;

 slides.forEach((slide, index) => {
  //   if (index === 0) {
  //    slide.style.opacity = "1";
  //   } else {
  //    slide.style.opacity = "0";
  //   }
  slide.style.opacity = index === 0 ? "1" : "0";
 });

 setInterval(() => {
  const currentSlide = slides[currentIndex];
  currentIndex = (currentIndex + 1) % slides.length;
  const nextSlide = slides[currentIndex];

  currentSlide.style.opacity = "0";
  currentSlide.style.transition = "opacity 1s";
  nextSlide.style.opacity = "1";
  nextSlide.style.transition = "opacity 1s";
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
 const modal = document.querySelector("#modal");
 const modalCloseBtn = document.querySelector(".modal-btn");

 noticeFirstItem.addEventListener("click", (e) => {
  //   console.log(modal.classList);
  e.preventDefault();
  modal.classList.add("active");
 });

 modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("active");
 });
});
