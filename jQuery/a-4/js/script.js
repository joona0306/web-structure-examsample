jQuery(document).ready(function () {
 // submenu
 $(".navi > li").mouseover(function () {
  $(".submenu").stop().slideDown(500);
  $(".submenu-bg").stop().slideDown(300);
 });
 $(".navi > li").mouseout(function () {
  $(".submenu").stop().slideUp(500);
  $(".submenu-bg").stop().slideUp(500);
 });

 // image
 $(".img-slide a:gt(0)").hide();

 setInterval(function () {
  $(".img-slide a:first-child")
   .fadeOut(1000)
   .next("a")
   .fadeIn(1000)
   .end()
   .appendTo(".img-slide");
 }, 3000);

 // modal
 $(".notice li:first-child").click(function (e) {
  e.preventDefault();
  $("#modal").addClass("active");
 });
 $(".modal-btn").click(function () {
  $("#modal").removeClass("active");
 });
});
