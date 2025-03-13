window.addEventListener("load", () => {
 // submenu 슬라이드 다운 기능
 const naviItems = document.querySelectorAll(".navi > li");
 const submenus = document.querySelectorAll(".submenu");
 const submenuBg = document.querySelector(".submenu-bg");

 naviItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
   submenuBg.style.transition = "height 0.5s";
   submenuBg.style.height = "150px";
   submenus.forEach((subItem) => {
    subItem.style.transition = "height 0.5s";
    subItem.style.height = `${subItem.scrollHeight}px`;
   });
  });
  item.addEventListener("mouseout", () => {
   submenuBg.style.transition = "height 0.5s";
   submenuBg.style.height = "0px";
   submenus.forEach((subItem) => {
    subItem.style.transition = "height 0.5s";
    subItem.style.height = "0px";
   });
  });
 });
});
