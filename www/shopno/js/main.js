// ABOUT US - CAROUSEL
const aboutCarousel = $('.about__carousel-list');

aboutCarousel.owlCarousel({
	loop: true,
	items: 1,
//	autoplay: true,

	nav: false,
	navContainer: $('.none'),

	dots: true,
	dotsContainer: $('.about__carousel-nav')
});

// TESTIMONALS - CAROUSEL
const testimonalsCarousel = $('.testimonals__carousel-list');

testimonalsCarousel.owlCarousel({
	loop: true,
	items: 1,
//	autoplay: true,

	touchDrag: false,
	mouseDrag: false,

	nav: false,
	navContainer: $('.none'),

	dots: true,
	dotsContainer: $('.testimonals__carousel-nav')
});

// OWL CAROUSEL - FIX
$('.owl-stage-outer').css('overflow', 'hidden');
$('.owl-stage').css('display', 'flex');


// SERVICES CARDS
const servicesItem = $('.services__item');
const servicesFront = $('.services__item--front');
const servicesBack = $('.services__item--back');

servicesFront.find('.services__item-btn').click(function() {
	$(this).parent(servicesFront).parent(servicesItem).find(servicesBack).css('left', '0%');
});

servicesBack.find('.services__item-btn--close').click(function() {
	$(this).parent(servicesBack).css('left', '-100%');
});