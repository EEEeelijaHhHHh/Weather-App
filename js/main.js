$('document').ready(function () {
  let widgetSlider = function () {
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      nextArrow: '<a href="#"><img src="img/slider/arrow_next.png" class="arrow-next"></img></a>',
      prevArrow: '<a href="#"><img src="img/slider/arrow_prev.png" class="arrow-prev"></img></a>',
      appendArrows: $('.slider__arrows'),
    });
  }

  let anchorScroll = function () {
    $('a').on('click', function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
      return false;
    });
  }

  widgetSlider();
  anchorScroll();
});