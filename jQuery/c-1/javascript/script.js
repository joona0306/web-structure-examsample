$(function () {
  // submenu
  $(".navi > li")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
    });

  // slide
  $(".slide a:gt(0)").hide();
  setInterval(() => {
    $(".slide a:first-child")
      .fadeOut(1000)
      .next("a")
      .fadeIn(1000)
      .end()
      .appendTo(".slide");
  }, 3000);

  // notice, gallery
  $(() => {
    // 탭을 클릭했을 때 동작을 정의합니다.
    $(".tab-title li").click(function (e) {
      e.preventDefault();

      // 모든 탭에서 active 클래스를 제거합니다.
      $(".tab-title li").removeClass("active");

      // 클릭한 탭에 active 클래스를 추가합니다.
      $(this).addClass("active");

      // 모든 탭 내용을 숨깁니다.
      $(".tab-body > div").hide();

      // 클릭한 탭에 해당하는 내용을 표시합니다.
      const tabIndex = $(this).index();
      if (tabIndex === 0) {
        $(".notice").show();
      } else if (tabIndex === 1) {
        $(".gallery").show();
      }
    });
  });
});
