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
  $(".faq_asks .vprs_to_faq:first").addClass("active");
  $(".faq_asks .vprs_to_faq_txt:not(:first)").hide();
  $(".faq_asks .vprs_to_faq").click(function () {
    $(this)
      .next(".vprs_to_faq_txt")
      .slideToggle("fast")
      .siblings(".vprs_to_faq_txt:visible")
      .slideUp("normal");
    $(this).toggleClass("active");
    $(this).siblings(".vprs_to_faq").removeClass("active");
  });
});
