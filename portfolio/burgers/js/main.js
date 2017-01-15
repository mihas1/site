$(function () {

/* Modules block */
	//OnePageScroll
	var section = $('.section'),
		display = $('.maincontent'),
		screen = 0,
		inScroll = false;
		position = 0;

	document.querySelector('.wrapper')
		.addEventListener('wheel', function(e) {

		var activeSection = section.filter('.active');

			if (e.deltaY > 0 && activeSection.next().length) {
				screen = activeSection.next().index();
			} 

			if (e.deltaY < 0 && activeSection.prev().length) {
				screen = activeSection.prev().index();
			}

		moveToSection(screen);
		changeTo(screen);

	});

	// Header nav
	$('.nav-list__item-link').on('click', function(e) {
		e.preventDefault();

		var hrefNum = $(this).attr('href');

			moveToSection(hrefNum);
			changeTo(hrefNum);
	});

	// Right nav
	$('.navigation-points__list-item-link').on('click', function(e) {
		e.preventDefault();


		var $this = $(this),
			PointsContainer = $this.closest('.navigation-points__list'),
			liItems = PointsContainer.find('.navigation-points__list-item'),
			curDrop = $this.closest('.navigation-points__list-item'),
			curDropLink = curDrop.find('.navigation-points__list-item-link'),
			hrefNum = curDropLink.attr('href');

		if (!curDrop.hasClass('navigation-points__active')) {
			liItems.removeClass('navigation-points__active');
			curDrop.addClass('navigation-points__active');
			moveToSection(hrefNum);
		}
	});

	// Arrow down
	$('.hello-arrow').on('click', function(e) {
		e.preventDefault();

		moveToSection(1);
		changeTo(1);
	});
	
	// Slider burgers
	$('.control').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
			container = $this.closest('.slider'),
			items = container.find('.slider__item'),
			activeItem = items.filter('.active__slider'),
			nextItem = activeItem.next(),
			prevItem = activeItem.prev();

		if ($this.hasClass('button-right')){ // листаем вперед
			if (nextItem.length) {
				moveSlide(container, nextItem.index());
			} else {
				moveSlide(container, 0);
			}
		} else { // листаем назад
			if (prevItem.length) {
				moveSlide(container, prevItem.index());
			} else {
				moveSlide(container, items.length - 1); // потому что length считает с 1, а eq считает с 0
			}
		}
	});

	// Team accordeon
	$('.accordeon-item').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
			accoContainer = $this.closest('.accordeon-list'),
			accoItems = accoContainer.find('.accordeon-item'),
			accoActive = accoItems.filter('.team-accordeon__active');

		if (!$this.hasClass('team-accordeon__active')) {
			$this.addClass('team-accordeon__active');
			$this.siblings().removeClass('team-accordeon__active');
		} else {
			$this.removeClass('team-accordeon__active');
			$this.siblings().removeClass('team-accordeon__active');
		}
	});

	// Menu accordeon
	$('.menu-accordeon__item').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
			menuAccoContainer = $this.closest('.menu-accordeon'),
			menuAccoItems = menuAccoContainer.find('.menu-accordeon__item'),
			menuAccoActive = menuAccoItems.filter('.menu-accordeon__active');

		if (!$this.hasClass('menu-accordeon__active')) {
			$this.addClass('menu-accordeon__active');
			$this.siblings().removeClass('menu-accordeon__active');
		} else {
			$this.removeClass('menu-accordeon__active');
			$this.siblings().removeClass('menu-accordeon__active');
		}
	});

	// Inputmask
	$(document).ready(function(){
		$('.inputMask').inputmask({"mask": "+7 (999) 999-99-99"}); //specifying options
	});

/* Functions block */
	//OnePageScroll function
	var moveToSection = function(sectionEq) {
		var movePosition;

		movePosition = (section.eq(sectionEq).index() * -100) + '%';

		section.eq(sectionEq).addClass('active')
			.siblings().removeClass('active');

		display.css({
			'transform' : 'translate3d(0, ' + movePosition + ', 0)'
		});	

	};

	// Right nav change func
	var changeTo = function(x) {
		var	wrapper = $('.wrapper'),
			navPoints = wrapper.find('.navigation-points'),
			navLi = navPoints.find('.navigation-points__list-item'),
			curLi = navLi.filter('.navigation-points__active');

		navLi.removeClass('navigation-points__active').eq(x).addClass('navigation-points__active');
	}

	//Slider function
	var moveSlide = function(container, slideNum) {
		var items = container.find('.slider__item'),
			list = container.find('.burgers-slider'),
			activeItem = items.filter('.active__slider'),
			reqItem = items.eq(slideNum),
			reqIndex = reqItem.index(),
			duration = 1000;

		if (reqItem.length) {
			list.animate({
				'left' : reqIndex * -100 + '%'
			}, duration, function () {
				activeItem.removeClass('active__slider');
				reqItem.addClass('active__slider');
			})
		}
	};
});




	/*
	var section = $('.section'),
		display = $('.maincontent'),
		screen = 0,
		position = 0;

	document.querySelector('.wrapper')
			.addEventListener('wheel', function(e) {
		e.preventDefault();

	var curDeltaY = e.deltaY,
		activeSection = section.filter('.active'),
		nextSection = activeSection.next(),
		prevSection = activeSection.prev();

	if (curDeltaY > 0 && nextSection.length) {
		activeSection.removeClass('active');
		nextSection.addClass('active');
		position = nextSection.index();
		posValue = -(+position * 100) + '%';

		console.log(position);
		console.log(posValue);

			display.css({
			'transform' : 'translate3d(0, ' + posValue + ', 0)'
			});
	}	else if (curDeltaY < 0 && prevSection.length){
			activeSection.removeClass('active');
			prevSection.addClass('active');
			position = prevSection.index();
			posValue = -(+position * 100) + '%';

			console.log(position);
			console.log(posValue);

				display.css({
				'transform' : 'translate3d(0, ' + posValue + ', 0)'
				});
		}
	});
	*/


