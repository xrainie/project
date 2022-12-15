$(document).on("ready", function () {
  var n = 4;
  if ($(window).width() > 800) n = 6;
  $(".worked_with_us_slider1").slick({
    infinite: true,
    slidesToShow: n,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).on("ready", function () {
  var n = 4;
  if ($(window).width() > 800) n = 6;
  $(".worked_with_us_slider2").slick({
    infinite: true,
    slidesToShow: n,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).on("ready", function () {
  $(".rewiews_slider").slick({
    infinite: true,
    adaptiveHeight: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(document).ready(function () {
  $(".FAQ_accordion .FAQ_qestion:first").addClass("active");
  $(".FAQ_accordion .FAQ_answer:not(:first)").hide();
  $(".FAQ_accordion .FAQ_qestion").click(function () {
    $(this)
      .next(".FAQ_answer")
      .slideToggle("fast")
      .siblings(".FAQ_answer:visible")
      .slideUp("normal");
    $(this).toggleClass("active");
    $(this).siblings(".FAQ_qestion").removeClass("active");
  });
});
