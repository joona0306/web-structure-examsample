window.addEventListener("load", () => {
 // submenu 슬라이드 다운
 const naviItems = document.querySelectorAll(".navi > li");

 naviItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
   const submenu = item.querySelector(".submenu");
   if (submenu) {
    submenu.style.transition = "height 0.5s";
    submenu.style.height = `${submenu.scrollHeight}px`;
   }
  });

  item.addEventListener("mouseout", () => {
   const submenu = item.querySelector(".submenu");
   if (submenu) {
    submenu.style.transition = "height 0.5s";
    submenu.style.height = "0px";
   }
  });
 });

 // image slide 기능
 const slideList = document.querySelector(".img-slide ul");
 let slideItems = slideList.querySelectorAll("li");
 let slideHeight = document.querySelector(".img-slide").offsetHeight;
 //  console.log(slideHeight);

 const slideInit = () => {
  slideList.style.marginTop = "0px"; // 마진 초기화
  slideList.appendChild(slideItems[0]); // 첫 번째 슬라이드 마지막으로 이동
  slideItems = slideList.querySelectorAll("li"); // 슬라이드 항목 업데이트
 };

 const moveSlide = () => {
  slideList.style.transition = "margin-top 1s";
  slideList.style.marginTop = `-${slideHeight}px`;
 };

 slideList.addEventListener("transitionend", () => {
  slideList.style.transition = "none";
  slideInit();
 });

 window.addEventListener("resize", () => {
  slideHeight = document.querySelector(".img-slide").offsetHeight;
 });

 setInterval(moveSlide, 3000);

 // modal 기능
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
