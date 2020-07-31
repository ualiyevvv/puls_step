
const slider = tns({
  container: '.slider__img',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false
});

document.querySelector('.prev').addEventListener('click', function(){
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function(){
  slider.goTo('next');
});

$('ul.catalog__types').on('click', 'li:not(.catalog__type_active)', function() {
  $(this)
    .addClass('catalog__type_active').siblings().removeClass('catalog__type_active')
    .closest('div.container').find('div.catalog__wrapper').removeClass('catalog__wrapper_active').eq($(this).index()).addClass('catalog__wrapper_active');
});

$('.toBack').each(function(i) {
  $(this).on('click', function(e) {
    e.preventDefault();
    $(".catblock-front").eq(i).toggleClass("catblock-front_active");
    $(".catblock-back").eq(i).toggleClass("catblock-back_active");
  })
})

$('.toFront').each(function(i) {
  $(this).on('click', function(e) {
    e.preventDefault();
    $(".catblock-back").eq(i).toggleClass("catblock-back_active");
    $(".catblock-front").eq(i).toggleClass("catblock-front_active");
  })
})
