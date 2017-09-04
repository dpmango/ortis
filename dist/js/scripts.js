$(document).ready(function () {

	// Верхний слайдер
	$('.topslider').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: false,
		dots: true,
		accessibility: false,
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
	
	$('.menu-toggle').on('click', function(){
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.site-map').hide(200);
			$('.page-header').removeClass('site-map-active')
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('is-active');
			$('body').addClass('no-scroll');
			$('.site-map').show(200);
			$('.page-header').addClass('site-map-active')
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
				$('.page-header__logo').addClass('active');
			} else {
				$('.page-header__logo').removeClass('active');
			}
		}
	});

	// Телефон при скролле
	$(window).scroll(function () {
		if ($(window).width() > '1439') {
			var topPos = $('.topbar__info').offset().top - $(window).scrollTop();
			if (topPos <= 38) {
				$('.page-header__tel').addClass('active');
				$('.page-header__input').addClass('hidden');
			} else {
				$('.page-header__tel').removeClass('active');
				$('.page-header__input').removeClass('hidden');
			}
		}
	});

	// Поиск по клику
	$('.page-header__btn').on('click', function (e) {
		if ($('.page-header__input').hasClass('hidden')) {
			e.preventDefault();
			$('.page-header__input').removeClass('hidden');
			$('.page-header__tel').removeClass('active');
		} else {
			$('.page-header__btn').unbind('submit').submit();
		}
		if ($(window).width() < '1440') {
			if ($('.page-header__input').hasClass('mobile-active')) {
				$('.page-header__input').removeClass('mobile-active');
				$('.page-header__btn').unbind('submit').submit();
			} else {
				$('.page-header__input').addClass('mobile-active');
				e.preventDefault();
			}
		}
	})
	$(document).mouseup(function (a) {
		var form = $('.page-header__input');
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
});