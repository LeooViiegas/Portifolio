const swiper = new Swiper('.swiper', {
	spaceBetween: 1,
	slidesPerView: autofit,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	autoplay: {
		delay: 7000,
	},
}
);