window.addEventListener("load", () => {
 // submenu
 const naviItems = document.querySelectorAll(".navi > li");
 const submenus = document.querySelectorAll(".submenu");
 const submenuBg = document.querySelector(".submenu-bg");

 naviItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
   submenus.forEach((submenu) => {
    // console.log(submenu.scrollWidth);
    submenu.style.width = `${submenu.scrollWidth}px`;
    submenuBg.style.width = "calc(100vw - 150px)";
   });
  });

  item.addEventListener("mouseout", () => {
   submenus.forEach((submenu) => {
    submenu.style.width = "0px";
    submenuBg.style.width = "0px";
   });
  });
 });

 // image fandeIn, fadeOut
 const slides = document.querySelectorAll(".img-slide a");
 let currentIndex = 0;

 slides.forEach((slide, index) => {
  //   slide.style.opacity = index === 0 ? "1" : "0";
  if (index === 0) {
   slide.style.opacity = "1";
  } else {
   slide.style.opacity = "0";
   slide.style.visibility = "hidden";
  }
 });

 setInterval(() => {
  const currentSlide = slides[currentIndex];
  currentIndex = (currentIndex + 1) % slides.length;
  const nextSlide = slides[currentIndex];

  currentSlide.style.opacity = "0";
  currentSlide.style.visibility = "hidden";
  currentSlide.style.transition = "all 1s";

  nextSlide.style.opacity = "1";
  nextSlide.style.visibility = "visible";
  nextSlide.style.transition = "all 1s";
 }, 3000);

 // tabmenu
 const tabs = document.querySelectorAll(".tabmenu > ul > li > a");

 tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
   e.preventDefault(); // a 태그 기본동작 방지

   document
    .querySelector(".tabmenu > ul > li.active")
    ?.classList.remove("active");

   tab.parentElement.classList.add("active");
  });
 });

 // modal
 const noticeFirstItem = document.querySelector(".notice ul li:first-child");
 const modal = document.querySelector("#modal");
 const modalBtn = document.querySelector(".modal-btn");

 noticeFirstItem.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("active");
 });

 modalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
 });
});
