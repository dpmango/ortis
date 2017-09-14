$(document).ready(function () {

	// Prevent # behavior
	$('[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// detect mobile devices
  function isMobile(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      return true
    } else {
      return false
    }
  }

	// Верхний слайдер
	$('.topslider').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: false,
		dots: true,
		accessibility: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					adaptiveHeight: true
				}
    	}
		]
	});

	// Популярные товары
	$('.pop-goods__slider').slick({
		slidesToScroll: 1,
		slidesToShow: 3,
		arrows: true,
		dots: false,
		accessibility: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
    	},
			{
				breakpoint: 574,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
				}
    	}
			]
	});

	// Отзывы
	$('.reviews__slider').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: true,
		dots: false,
		accessibility: false,
		responsive: [
			{
				breakpoint: 574,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
				}
    	}
		]
	});


	// Слайдер на странице товара
	$('.goods-card__big-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: false,
		dots: false,
		accessibility: false,
		asNavFor: '.goods-card__mini-slider'
	});
	$('.goods-card__mini-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 4,
		arrows: false,
		dots: false,
		accessibility: false,
		asNavFor: '.goods-card__big-slider',
		focusOnSelect: true
	});

	// Отзывы
	$('.video-block__slider').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: true,
		dots: false,
		accessibility: false,
		responsive: [
			{
				breakpoint: 574,
				settings: {
					arrows: false,
					dots: true
				}
    	}
		]
	});

	// Слайдер фото
	$('.photo-popup__big-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: true,
		dots: false,
		accessibility: false,
		asNavFor: '.photo-popup__mini-slider',
		responsive: [
			{
				breakpoint: 574,
				settings: {
					arrows: false
				}
    	}
		]
	});
	$('.photo-popup__mini-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 5,
		arrows: false,
		dots: false,
		accessibility: false,
		asNavFor: '.photo-popup__big-slider',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 574,
				settings: {
					slidesToShow: 3
				}
    	},
			{
				breakpoint: 414,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	// Слайдер попап в карте товара
	$('.goods-card-popup__big-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: true,
		dots: false,
		accessibility: false,
		asNavFor: '.goods-card-popup__mini-slider',
		responsive: [
			{
				breakpoint: 574,
				settings: {
					arrows: false
				}
    	}
		]
	});
	$('.goods-card-popup__mini-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 5,
		arrows: false,
		dots: false,
		accessibility: false,
		asNavFor: '.goods-card-popup__big-slider',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 574,
				settings: {
					slidesToShow: 3
				}
    	},
			{
				breakpoint: 414,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	// Попап generic
	function popupHelper(state){
		if (state === "show"){
			$('body').addClass('no-scroll');
			$('.overlay').fadeIn(250);
		} else if (state === "hide") {
			$('body').removeClass('no-scroll');
			$('.overlay').fadeOut(250);
		}
	}
	// Попап фото
	$('.gallery__item--photo').on('click', function (e) {
		e.preventDefault();
		popupHelper("show");;
		// navigate slider to clicked item
		$('.photo-popup__big-slider').slick("slickGoTo", $(this).index())
		$('.photo-popup').addClass('active');
	});
	$('.photo-popup__close').on('click', function (e) {
		e.preventDefault();
		popupHelper("hide");
		$('.photo-popup').removeClass('active');
	});

	// Попап в карточке товара на фото
	$('.goods-card__big-slider-item').on('click', function (e) {
		e.preventDefault();
		popupHelper("show");
		$('.goods-card-popup').addClass('active');
	});
	$('.goods-card-popup__close').on('click', function (e) {
		e.preventDefault();
		popupHelper("hide");
		$('.goods-card-popup').removeClass('active');
	});

	// Попап видео
	$('.gallery__item--video').on('click', function (e) {
		e.preventDefault();
		popupHelper("show");
		$('.video-popup').addClass('active');
		if ( $('.video-popup').data('video') ){
			$('.video-popup iframe').attr('src', $('.video-popup').data('video') )
		}
		// autoplay by default
		playVideo($('.video-popup .video-block__play'));
	});
	$('.video-popup__close').on('click', function (e) {
		e.preventDefault();
		popupHelper("hide");
		var targetFrame = $(this).parent().find('iframe');
		var savedUrl = targetFrame.attr('src');
		targetFrame.attr('src', "");
		$(this).parent().data('video', savedUrl);
		$('.video-popup').removeClass('active');
	});

	// Попап Добавлено в корзину
	$('.goods-card__tocart').on('click', function (e) {
		e.preventDefault();
		popupHelper("show");
		$('.success-popup').addClass('active');
	});
	$('.success-popup__close').on('click', function (e) {
		e.preventDefault();
		popupHelper("hide");
		$('.success-popup').removeClass('active');
	});

	// Попап Купить в 1 клик
	$('.goods-card__buy').on('click', function (e) {
		e.preventDefault();
		popupHelper("show");
		$('.oneclick-popup').addClass('active');
	});
	$('.oneclick-popup__close').on('click', function (e) {
		e.preventDefault();
		popupHelper("hide");
		$('.oneclick-popup').removeClass('active');
	});

	// закрытие попапа при клике вне области
	$('.overlay').on('click', function(){
		var popups = []
		popups.push( $('.video-popup') );
		popups.push( $('.success-popup') );
		popups.push( $('.oneclick-popup') );
		popups.push( $('.photo-popup') );
		popups.push( $('.goods-card-popup') );

		popupHelper("hide");;

		$.each(popups, function(i,val){
			val.removeClass('active');
		})
	})

	// Меню
	$('.menu-toggle').on('click', function () {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.site-map').hide(200);
			$('.header').removeClass('site-map-active')
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('is-active');
			$('body').addClass('no-scroll');
			$('.site-map').show(200);
			$('.header').addClass('site-map-active')
		}
	});

	// Прилипающее подменю
	$(window).scroll(function () {
		if ($(window).width() > '1023') {
			var topPos = $('.submenu-helper').offset().top - $(window).scrollTop();
			var currentHeight = $('.menu-wrap').innerHeight();
			if (topPos <= 48) {
				$('.menu-wrap').addClass('sticky');
				$('.submenu-helper').height(currentHeight);
			} else {
				$('.menu-wrap').removeClass('sticky');
				$('.submenu-helper').height(1);
			}
		}
	});

	// Логотип при скролле
	$(window).scroll(function () {
		if ($(window).width() > '767') {
			var topPos = $('.topbar__logo').offset().top - $(window).scrollTop();
			if (topPos <= 38) {
				$('.header__logo').addClass('active');
			} else {
				$('.header__logo').removeClass('active');
			}
		}
	});

	// Телефон при скролле
	$(window).scroll(function () {
		if ($(window).width() > '1439') {
			var topPos = $('.topbar__info').offset().top - $(window).scrollTop();
			if (topPos <= 38) {
				$('.header__tel').addClass('active');
				$('.header__input').addClass('hidden');
			} else {
				$('.header__tel').removeClass('active');
				$('.header__input').removeClass('hidden');
			}
		}
	});

	// Поиск по клику
	$('.header__btn').on('click', function (e) {
		if ($('.header__input').hasClass('hidden')) {
			e.preventDefault();
			$('.header__input').removeClass('hidden');
			$('.header__tel').removeClass('active');
		} else {
			$('.header__btn').unbind('submit').submit();
		}
		if ($(window).width() < '1440') {
			if ($('.header__input').hasClass('mobile-active')) {
				$('.header__input').removeClass('mobile-active');
				$('.header__btn').unbind('submit').submit();
			} else {
				$('.header__input').addClass('mobile-active');
				e.preventDefault();
			}
		}
	})
	$(document).mouseup(function (a) {
		var form = $('.header__input');
		if (a.target != form[0] && !form.has(a.target).length) {
			form.removeClass('mobile-active');
		}
	});

	// Подменю
	$('.submenu__link').on('click', function (e) {
		e.preventDefault();
		var dataDrop = $(this).attr('data-drop');
		$('.submenu__link').removeClass('active');
		$(this).addClass('active');

		$('.popup-menu').slideDown(200);
		$('.popup-menu__wrap').removeClass('active');
		$('.popup-menu__wrap#' + dataDrop).addClass('active');
	});

	$('.popup-menu__link').on('click', function (e) {
		e.preventDefault();
		var dataDrop = $(this).attr('data-cat');
		$(this).parents('.popup-menu__wrap').find('.popup-menu__link').removeClass('active');
		$(this).addClass('active');

		$(this).parents('.popup-menu__wrap').find('.popup-menu__item').removeClass('active');
		$('.popup-menu__item#' + dataDrop).addClass('active');
	});

	$(document).mouseup(function (a) {
		var menu = $('.popup-menu');
		var links = $('.submenu');
		if (a.target != menu[0] && !menu.has(a.target).length && a.target != links[0] && !links.has(a.target).length) {
			menu.slideUp(200);
			$('.submenu__link').removeClass('active');
		}
	});

	// Карта сайта доп меню
	$('.site-map__link--more').on('click', function (e) {
		e.preventDefault();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).next('.site-map__hidden').slideUp(200);
		} else {
			$('.site-map__link--more').removeClass('active');
			$('.site-map__hidden').slideUp(200);
			$(this).addClass('active').next('.site-map__hidden').slideDown(200);
		}
	});

	// Плюс минус корзина
	$('.cart__btn--minus').on('click', function () {
		var amount = parseInt($(this).next('.cart__input').val());
		if (amount > 1) {
			$(this).next('.cart__input').val(amount - 1);
		}
	});
	$('.cart__btn--plus').on('click', function () {
		var amount = parseInt($(this).prev('.cart__input').val());
		$(this).prev('.cart__input').val(amount + 1);
	});

	// Табы карточка товара
	$('.goods-card__tab').on('click', function (e) {
		e.preventDefault();
		$('.goods-card__tab').removeClass('active');
		$(this).addClass('active');
		var dataId = $(this).attr('data-id');

		$('.goods-card__tab-item').removeClass('active');
		$('.goods-card__tab-item#' + dataId).addClass('active');
	});

	// Play video
	$('.video-block__play').on('click', function () {
		playVideo($(this));
	});

	function playVideo(that){
		var iframe = that.closest('.video-block__wrapper').find('iframe');
		var addedSubject;
		// проверить если в строке уже есть параметр
		if ( iframe.attr('src').indexOf("?") >= 0 ){
			addedSubject = "&autoplay=1"
		} else {
			addedSubject = "?autoplay=1"
		}
		iframe.attr("src", iframe.attr('src') + addedSubject);
		that.closest('.video-block__overlay').fadeOut();
	}

	// hide play btn on mobile
	if ( isMobile() ){
		$('.video-block__play, .video-block__overlay').hide();
	}

	// Aside menu more
	$('.aside-menu__link--more').on('click', function (e) {
		e.preventDefault();

		$('.aside-menu__link--more').removeClass('active');
		$('.aside-menu__hide').slideUp(250);

		$(this).addClass('active');
		$(this).next('.aside-menu__hide').slideDown(250);

	});

	// Masked input
	$(".js-dateMask").mask("99.99.9999", { placeholder: "__ __ ____" });
	$(".js-dateMask2").mask("99.99.99", { placeholder: "ДД.ММ.ГГ" });

	$(".js-indexMask").mask("999 999", { placeholder: "000 000" });

	$("input[type='tel']").mask("+7 (000) 000-0000", { placeholder: "+7 (___) ___-____" });


	// GENERIC FUNCTIONS
	////////////////////

  var validateErrorPlacement = function(error, element) {
    // error.addClass('ui-input__validation');
    // error.appendTo(element.parent("div"));
		return false;
  }
  var validateHighlight = function(element) {
    $(element).parent('div').addClass("has-error");
  }
  var validateUnhighlight = function(element) {
    $(element).parent('div').removeClass("has-error");
  }
  var validateSubmitHandler = function(form) {
    $(form).addClass('loading');
    $.ajax({
      type: "POST",
      url: $(form).attr('action'),
      data: $(form).serialize(),
      success: function(response) {
        $(form).removeClass('loading');
        var data = $.parseJSON(response);
        if (data.status == 'success') {
          // do something I can't test
        } else {
            $(form).find('[data-error]').html(data.message).show();
        }
      }
    });
  }

  var validatePhone = {
    required: true,
    normalizer: function(value) {
        var PHONE_MASK = '+X (XXX) XXX-XXXX';
        if (!value || value === PHONE_MASK) {
            return value;
        } else {
            return value.replace(/[^\d]/g, '');
        }
    },
    minlength: 11,
    digits: true
  }

  ///////////////
  // ORDER FORM
  ///////////////
  $(".order-page__form").validate({
    errorPlacement: validateErrorPlacement,
    highlight: validateHighlight,
    unhighlight: validateUnhighlight,
    submitHandler: validateSubmitHandler,
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      phone: validatePhone
    },
    messages: {
      name: "Заполните это поле",
      email: {
          required: "Заполните это поле",
          email: "Email содержит неправильный формат"
      },
      phone: {
          required: "Заполните это поле",
          minlength: "Введите корректный телефон"
      }
    }
  });

});
