//библиотека с основным модулем swiper
@@include('../libs/_swiper-bundle.js');
// модуль с функциями
@@include('../libs/_swiper-function.js');


/*============================================================*/



/*проверяем слайдеор №1 существует ли такой блок*/
if(document.querySelector('.swiper-container')){
	
	let slider_main = new Swiper('.swiper-container',{
			observer: true,
			//direction: 'vertical', //Can be 'horizontal' or 'vertical' (for vertical slider)
			observeParents: true,
			slidesPerView: 1, // количество слайдов, auto по умолчанию
			loopAdditionalSlides: 1, // клонирует для цикла слайд с определённым номером
			loopedSlides: null, // null по умолчанию, сколько слайдов зациклить
			spaceBetween: 0, // отступы между слайдами
			centeredSlides: true, //должежн центрировать слайдер
			autoHeight: true,
			watchOverflow: true, // будет скрывать кнопки навигации, если слайдов недостаточно для скольжения
			//speed: 80000, // скорость слайдера
			effect: 'slide',//Transition effect. Can be 'slide', 'fade', 'cube', 'coverflow', 'flip' or 'creative'
			followFinger: false,// слайдер сдвигается перетягиванием
			grabCursor: true, // подсказывает пользователю что надо перетаскивать
			//simulateTouch: true, // симулирует нажатие и перетаскивание как на тачскрине
			//touchRatio: 0;
			//loop: true, // слайдер будет повтарятся бесконечно
			preloadImages: false, // когда нужно загрузить все изображения
			//parallax: false,
			//autoplay: {
			  //delay: 10000,
			//},
			//lazy: true,
			//dotts
			pagination: {
				el: '.swiper-pagination',
				//type: 'bullets',
				clickable: true,
			},
			  //arrows
			  navigation: {
			        nextEl: '.slider-main__container .swiper-button-prev',
			        prevEl: '.slider-main__container .swiper-button-next',
			  },
			  breakpoints:{
			  	 // when window width is >= 320px
			    /*1600: {
			      slidesPerView: 1,
			      //spaceBetween: 10,
			      autoHeight: true,
			    },*/
			    // when window width is >= 480px
			    /*992: {
			      slidesPerView: 1,
			      //spaceBetween: 20
			    },*/
			    // when window width is >= 640px
			   /* 640: {
			      slidesPerView: 4,
			      spaceBetween: 40
			    }*/
			 // },
			/*  on: {
			  	lazyImageReady:function() {
			  		ibg();
			  	}
			  },*/
			  //and if need scrollbar
			/*  scrollbar: {
			    el: '.swiper-scrollbar',
			    draggable: true,
			  },*/
			}
	});
}

