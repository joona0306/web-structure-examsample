jQuery(document).ready(function () {
 // submenu
 $(".navi > li").mouseover(function () {
  $(this).find(".submenu").stop().slideDown(500);
 });
 $(".navi > li").mouseout(function () {
  $(this).find(".submenu").stop().slideUp(500);
 });

 // image fade in-out
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
 $(".notice li:first").click(function (e) {
  e.preventDefault();
  $("#modal").addClass("active");
 });
 $(".modal-btn").click(function () {
  $("#modal").removeClass("active");
 });
});
