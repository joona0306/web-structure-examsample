window.addEventListener("load", () => {
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
});
