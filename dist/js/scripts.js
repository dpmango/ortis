$(document).ready(function () {

	// Верхний слайдер
	$('.topslider').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: false,
		dots: true
	});

	// Популярные товары
	$('.pop-goods__slider').slick({
		slidesToScroll: 1,
		slidesToShow: 3,
		arrows: true,
		dots: false
	});

	// Отзывы
	$('.reviews__slider').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: true,
		dots: false
	});

	// Прилипающее подменю
	$(window).scroll(function () {
		if ($(window).width() > '1439') {
			var topPos = $('.submenu-helper').offset().top - $(window).scrollTop();
			var currentHeight = $('.submenu').innerHeight();
			if (topPos <= 48) {
				$('.submenu').addClass('sticky');
				$('.submenu-helper').height(currentHeight);
			} else {
				$('.submenu').removeClass('sticky');
				$('.submenu-helper').height(1);
			}
		}
	});

	// Логотип при скролле
	$(window).scroll(function () {
		if ($(window).width() > '1439') {
			var topPos = $('.topbar__logo').offset().top - $(window).scrollTop();
			if (topPos <= 38) {
				$('.page-header__logo').addClass('active');
			} else {
				$('.page-header__logo').removeClass('active');
			}
		}
	});

});