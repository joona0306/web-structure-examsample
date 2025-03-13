$(function () {
 // submenu
 $(".navi > li").mouseover(function () {
  $(this).find(".submenu").stop().slideDown(500);
 });
 $(".navi > li").mouseout(function () {
  $(this).find(".submenu").stop().slideUp(500);
 });

 // image fadeIn, fadeOut
 $(".img-slide a:gt(0)").hide();
 setInterval(() => {
  $(".img-slide a:first-child")
   .fadeOut(1000)
   .next("a")
   .fadeIn(1000)
   .end()
   .appendTo(".img-slide");
 }, 3000);
});
