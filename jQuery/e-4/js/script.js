$(function () {
  // image slide
  const slideList = $(".slide-list");
  const slideInit = () => {
    slideList.css({ marginLeft: 0 }).find("li:first").appendTo(slideList);
  };
  const moveSlide = () => {
    slideList.animate({ marginLeft: "-100%" }, 1000, slideInit);
  };
  setInterval(moveSlide, 3000);

  // modal
  $(".notice li:first").click(function (e) {
    e.preventDefault();
    $("#modal").addClass("active");
  });
  $(".modal-btn").click(function () {
    $("#modal").removeClass("active");
  });
});
