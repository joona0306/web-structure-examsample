$(function () {
 // submenu 슬라이드다운 기능
 $(".navi > li").mouseover(function () {
  $(".submenu").stop().slideDown(500);
  $(".submenu-bg").stop().slideDown(500);
 });

 $(".navi > li").mouseout(function () {
  $(".submenu").stop().slideUp(500);
  $(".submenu-bg").stop().slideUp(500);
 });

 // image slide
 const slideList = $(".slide-list");
 const slideHeight = $(".img-slide").height();

 const slideInit = () => {
  slideList.css({ marginTop: 0 }).find("li:first-child").appendTo(slideList);
 };
 const moveslide = () => {
  slideList.animate({ marginTop: -slideHeight }, 1000, slideInit);
 };

 setInterval(moveslide, 3000);

 // tabmenu
 $(".tabmenu > ul > li > a").click(function (e) {
  e.preventDefault();
  $(this).parent().addClass("active").siblings().removeClass("active");
 });

 // modal
 $(".notice li:first-child").click(function (e) {
  e.preventDefault();
  $("#modal").addClass("active");
 });
 $(".modal-btn").click(function () {
  $("#modal").removeClass("active");
 });
});
