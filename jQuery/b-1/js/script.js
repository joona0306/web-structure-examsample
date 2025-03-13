jQuery(document).ready(function () {
 // submenu
 $(".navi > li").mouseover(function () {
  $(".submenu-bg").stop().slideDown(200);
  $(".submenu").stop().slideDown(500);
 });
 $(".navi > li").mouseout(function () {
  $(".submenu-bg").stop().slideUp(500);
  $(".submenu").stop().slideUp(500);
 });

 // image slide
 const slideList = $(".slide-list");
 const slideWidth = $(".img-slide").width();
 const slideInit = () => {
  slideList.css({ marginLeft: 0 }).find("li:first-child").appendTo(slideList);
 };
 const moveSlide = () => {
  slideList.animate({ marginLeft: -slideWidth }, 1000, slideInit);
 };
 setInterval(moveSlide, 3000);

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
