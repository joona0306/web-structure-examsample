$(function () {
  // submenu
  $(".navi > li")
    .mouseover(() => {
      $(".submenu").stop().slideDown(500);
      $(".submenu-bg").stop().slideDown(500);
    })
    .mouseout(() => {
      $(".submenu").stop().slideUp(500);
      $(".submenu-bg").stop().slideUp(500);
    });

  // slide
  const slideList = $(".slide-list");
  const slideWidth = $(".slide").width();
  const slideAnimation = () => {
    slideList.css({ marginLeft: 0 }).find("li:first").appendTo(slideList);
  };

  const moveSlide = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, slideAnimation);
  };

  setInterval(moveSlide, 3000);

  // modal
  $(() => {
    $(".notice ul li:first a").click((e) => {
      e.preventDefault();
      $("#modal").addClass("active");
    });

    $(".btn").click(() => {
      $("#modal").removeClass("active");
    });
  });
});
