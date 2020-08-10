
window.addEventListener('DOMContentLoaded', () => {


  const slider = tns({
    container: '.slider__img',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: true,
    navAsThumbnails: true,
    controls: false,
    navPosition: 'bottom',
    responsive: {
      992: {
      },
      768: {
        

      },
      576: {
        controls: true,
        nav: true,
        navPosition: 'bottom'

      }
    }
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
  });

  $('.toFront').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $(".catblock-back").eq(i).toggleClass("catblock-back_active");
      $(".catblock-front").eq(i).toggleClass("catblock-front_active");
    })
  });

  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });

  $('[data-modal=order]').each(function(i){
    $(this).on('click', function (){
      $('#orderCaption').text($('.catblock-front__header').eq(i).text())
      $('.overlay, #order').fadeIn('slow');
    })
  });/*
  $('[data-modal=thanks]').on('click', function(){
    $('#order').fadeOut('');
    $('.overlay, #thanks').fadeIn('slow');
  });*/
  const validatorRules = {
    rules: {
    name: {
      required: true,
      minlength: 2
    },
    phone: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: {
      required: "Пожалуйста, введите свое имя",
      minlength: jQuery.validator.format("Введите {0} символа!")
    },
    phone: "Пожалуйста, введите свой номер телефона",
    email: {
      required: "Пожалуйста, введите свою почту",
      email: "Неправильно введен адрес почты"
    }
  }
  };

  $('.consultationMain form').validate(validatorRules);
  $('.consultationOrder form').validate(validatorRules);
  $('.consultationPromo form').validate(validatorRules);

  $("input[name=phone]").mask("+7 (999) 999-99-99");
  
})
