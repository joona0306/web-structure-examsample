window.addEventListener("load", () => {
 // submenu
 const naviItems = document.querySelectorAll(".navi > li");
 //  console.log(naviItems);
 const submenus = document.querySelectorAll(".submenu");
 //  console.log(submenus);
 const submenuBg = document.querySelector(".submenu-bg");
 //  console.log(submenuBg);

 naviItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
   submenus.forEach((submenu) => {
    submenu.style.height = "200px";
    submenuBg.style.height = "200px";
   });
  });

  item.addEventListener("mouseout", () => {
   submenus.forEach((submenu) => {
    submenu.style.height = "0px";
    submenuBg.style.height = "0px";
   });
  });
 });

 // imgage slide
 const slideList = document.querySelector(".slide-list");
 let slideItems = slideList.querySelectorAll("li");
 const slideWidth = document.querySelector(".img-slide").offsetWidth;
 //  console.log(slideWidth);

 const slideInit = () => {
  slideList.style.marginLeft = "0px"; // 마진 초기화
  slideList.appendChild(slideItems[0]); // 첫 번재 슬라이드 마지막으로 이동
  slideItems = slideList.querySelectorAll("li"); // 슬라이드 항목 업데이트
 };

 const moveSlide = () => {
  slideList.style.transition = "margin-left 1s";
  slideList.style.marginLeft = `-${slideWidth}px`; // 슬라이드 이동
 };

 slideList.addEventListener("transitionend", () => {
  slideList.style.transition = "none";
  slideInit();
 });

 setInterval(moveSlide, 3000); // 3초 간격으로 슬라이드 이동

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
});
