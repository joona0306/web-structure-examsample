jQuery(document).ready(function () {
  // image slide
  $(".slide-list li:gt(0)").hide();
  setInterval(function () {
    $(".slide-list li:first-child")
      .fadeOut(1000)
      .next("li")
      .fadeIn(1000)
      .end()
      .appendTo(".slide-list");
  }, 3000);

  // tabmenu
  $(".tabmenu > li > a").click(function (e) {
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
