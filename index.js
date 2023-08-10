const textElement = document.getElementById('text');
const text = 'Olá! Eu sou <span class="destaque">Leonardo Oliveira</span>, desenvolvedor Front-End.';
let index = 0;

function typeText() {
	if (index <= text.length) {
	  textElement.innerHTML = text.slice(0, index);
	  index++;
	}
	
	if (index > text.length) {
		setTimeout(() => {
		  textElement.innerHTML = text;
		  setTimeout(() => {
			textElement.innerHTML = '';
			index = 0;
			setTimeout(typeText, 60);
		  }, 3000);
		}, 60);
	  } else {
		setTimeout(typeText, 60);
	  }
	}
	
	typeText();


const swiper = new Swiper('.swiper', {
	spaceBetween: 3,
	slidesPerView: 3,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	autoplay: {
		delay: 2500,
	},
});