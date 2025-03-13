$(function () {
  // image slide
  const slideList = $(".slide-list");
  const slideHeight = $(".img-slide").height();
  const slideInit = () => {
    slideList.css({ marginTop: 0 }).find(" li:first").appendTo(slideList);
  };
  const moveSlide = () => {
    slideList.animate({ marginTop: -slideHeight }, 1000, slideInit);
  };
  setInterval(moveSlide, 3000);

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
