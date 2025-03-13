jQuery(document).ready(function () {
  // submenu
  $(".navi > li").mouseover(() => {
    $(".submenu-bg").stop().slideDown(300);
    $(".submenu li").stop().slideDown(500);
  });
  $(".navi > li").mouseout(() => {
    $(".submenu-bg").stop().slideUp(500);
    $(".submenu li").stop().slideUp(300);
  });

  // image fade
  $(".img-slide a:gt(0)").hide();
  setInterval(() => {
    $(".img-slide a:first")
      .fadeOut(1000)
      .next("a")
      .fadeIn(100)
      .end()
      .appendTo(".img-slide");
  }, 3000);

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
