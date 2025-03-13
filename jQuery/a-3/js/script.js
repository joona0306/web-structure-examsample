$(function () {
  // image fadeIn-Out
  $(".img-slide a:gt(0)").hide();
  setInterval(function () {
    $(".img-slide a:first-child")
      .fadeOut(1000)
      .next("a")
      .fadeIn(1000)
      .end()
      .appendTo(".img-slide");
  }, 3000);

  // imgae slide
  // const slideList = $(".slide-list");
  // const slideWidth = $(".slide").width();
  // const slideAnimation = () => {
  //   slideList.css({ marginLeft: 0 }).find("li:first").appendTo(slideList);
  // };

  // const moveSlide = () => {
  //   slideList.animate({ marginLeft: -slideWidth }, 1000, slideAnimation);
  // };

  // setInterval(moveSlide, 3000);

  // tabmenu
  $(".tabmenu > li > a").click(function (e) {
    e.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  // modal
  $(".notice li:first-child").click(function () {
    $("#modal").addClass("active");
  });
  $(".modal-btn").click(function () {
    $("#modal").removeClass("active");
  });
});
