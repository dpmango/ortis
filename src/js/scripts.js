$(document).ready(function () {

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
	
	// Попап фото
	$('.gallery__item--photo').on('click', function(e){
		e.preventDefault();
		$('body').addClass('no-scroll');
		$('.overlay').fadeIn(200);
		$('.photo-popup').addClass('active');
	});
	$('.photo-popup__close').on('click', function(e){
		e.preventDefault();
		$('body').removeClass('no-scroll');
		$('.overlay').fadeOut(200);
		$('.photo-popup').removeClass('active');
	});
	$(document).mouseup(function (a) {
		var popup = $('.photo-popup');
		if (a.target != popup[0] && !popup.has(a.target).length) {
			popup.removeClass('active');
			$('.overlay').fadeOut(200);
			$('.photo-popup').removeClass('active');
		}
	});  
	// Попап видео
	$('.gallery__item--video').on('click', function(e){
		e.preventDefault();
		$('body').addClass('no-scroll');
		$('.overlay').fadeIn(200);
		$('.video-popup').addClass('active');
	});
	$('.video-popup__close').on('click', function(e){
		e.preventDefault();
		$('body').removeClass('no-scroll');
		$('.overlay').fadeOut(200);
		$('.video-popup').removeClass('active');
	});
	$(document).mouseup(function (a) {
		var popup = $('.video-popup');
		if (a.target != popup[0] && !popup.has(a.target).length) {
			popup.removeClass('active');
			$('.overlay').fadeOut(200);
			$('.video-popup').removeClass('active');
		}
	});  
	
		// Попап Добавлено в корзину
	$('.goods-card__tocart').on('click', function(e){
		e.preventDefault();
		$('body').addClass('no-scroll');
		$('.overlay').fadeIn(200);
		$('.success-popup').addClass('active');
	});
	$('.success-popup__close').on('click', function(e){
		e.preventDefault();
		$('body').removeClass('no-scroll');
		$('.overlay').fadeOut(200);
		$('.success-popup').removeClass('active');
	});
	$(document).mouseup(function (a) {
		var popup = $('.success-popup');
		if (a.target != popup[0] && !popup.has(a.target).length) {
			popup.removeClass('active');
			$('.overlay').fadeOut(200);
			$('.success-popup').removeClass('active');
		}
	}); 
	
		// Попап Купить в 1 клик
	$('.goods-card__buy').on('click', function(e){
		e.preventDefault();
		$('body').addClass('no-scroll');
		$('.overlay').fadeIn(200);
		$('.oneclick-popup').addClass('active');
	});
	$('.oneclick-popup__close').on('click', function(e){
		e.preventDefault();
		$('body').removeClass('no-scroll');
		$('.overlay').fadeOut(200);
		$('.oneclick-popup').removeClass('active');
	});
	$(document).mouseup(function (a) {
		var popup = $('.oneclick-popup');
		if (a.target != popup[0] && !popup.has(a.target).length) {
			popup.removeClass('active');
			$('.overlay').fadeOut(200);
			$('.oneclick-popup').removeClass('active');
		}
	}); 
	
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
		$(this).parents('.popup-menu__half').children('.popup-menu__link').removeClass('active');
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
	$('.video-block__play').on('click', function(){
    $(this).closest('.video-block__wrapper').find('iframe').attr("src", $("iframe").attr("src").replace("autoplay=0", "autoplay=1"));
		$('.video-block__overlay').hide();
  });
	
	// Aside menu more
	$('.aside-menu__link--more').on('click', function(e){
		e.preventDefault();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).next('.aside-menu__hide').slideUp(200);
		} else {
			$('.aside-menu__link--more').removeClass('active');
			$(this).addClass('active').next('.aside-menu__hide').slideDown(200);
		}
	});
	
});