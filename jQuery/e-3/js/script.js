jQuery(document).ready(function () {
  // image slide
  const slideList = $(".slide-list");
  const slideHeight = $(".img-slide").height();
  const slideInit = () => {
    slideList.css({ marginTop: 0 }).find("li:first-child").appendTo(slideList);
  };
  const moveSlide = () => {
    slideList.animate({ marginTop: -slideHeight }, 1000, slideInit);
  };
  setInterval(moveSlide, 3000);

  // modal
  $(".notice li:first-child").click(function (e) {
    e.preventDefault();
    $("#modal").addClass("active");
  });
  $(".modal-btn").click(function () {
    $("#modal").removeClass("active");
  });
});
