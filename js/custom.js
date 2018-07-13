$(document).ready(function() {
  // Cover slider image
  $(".slider-cover").backstretch(
    [
      "img/cover_1.jpg",
      "img/cover_2.jpg",
      "img/cover_3.jpg",
      "img/cover_4.jpg",
      "img/cover_5.jpg"
    ],
    {
      fade: 750,
      duration: 5000
    }
  );

  // banner slider image
  $(".slider-banner").backstretch(
    [
      "img/cover_1.jpg",
      "img/cover_2.jpg",
      "img/cover_3.jpg",
      "img/cover_4.jpg",
      "img/cover_5.jpg"
    ],
    {
      fade: 750,
      duration: 5000
    }
  );

  // scroll spy navbar
  function checkScroll() {
    var startY = $(".navbar").height() * 9; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
      $(".navbar").addClass("scrolled shadow-sm");
    } else {
      $(".navbar").removeClass("scrolled shadow-sm");
    }
  }
  if ($(".navbar").length > 0) {
    $(window).on("scroll load resize", function() {
      checkScroll();
    });
  }

  // scroll to top
  $(".scroll-to-top").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      800
    );
    return false;
  });

  // ANIMATION
  $(".slide-from-right")
    .css("opacity", 0)
    .viewportChecker({
      classToAdd: "animated fadeInRight",
      offset: "30%"
    });
  $(".slide-from-left")
    .css("opacity", 0)
    .viewportChecker({
      classToAdd: "animated fadeInLeft",
      offset: "30%"
    });
});
