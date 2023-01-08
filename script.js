https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 20,
	effect: 'fade',
	loop: true,
	speed: 300,
	mousewheel: {
		invert: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
