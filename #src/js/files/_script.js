	/*прослушивать все клики во всем документе*/
	document.addEventListener("click", documentActions)

	function documentActions(e) {
		const targetElement = e.target;// содержит информацию о клике, т.е. будим получать информацию об обекте на который нажали 
		console.log(targetElement.classList.contains('_burger'))
		if(!targetElement.classList.contains('_burger')){
			if( document.querySelector('.icon-menu__burger-right').classList.contains('_active') || document.querySelector('.icon-menu__burger-left').classList.contains('_active')){
				//console.log("test first" + targetElement.lastElementChild.classList)
				if(targetElement.lastElementChild.classList.contains('submenu-left__link') || targetElement.lastElementChild.classList.contains('sub-submenu')){
					//alert('sds')
				}else{
					document.querySelector('.icon-menu__burger-right').classList.remove('_active');
					document.querySelector('.header__right-menu').classList.remove('_active');
					document.querySelector('body').classList.remove('_lock');
					document.querySelector('.icon-menu__burger-left').classList.remove('_active');
					document.querySelector('.submenu-left').classList.remove('_active');
				}
			}
		}
/*======================если экран меньше какогото размера и устроцсьвр мобильное===================================================*/

		if(window.innerWidth < 992 && isMobile.any()){/*определяем что это устройство мобильное или планшет*/
			
			if(targetElement.classList.contains('submenu-left__items')){/*присваеваем родительскому элементу класс _hover*/
				targetElement.classList.toggle('_active-item')
				//console.log("test true" + targetElement.lastElementChild.classList)
				targetElement.lastElementChild.classList.toggle('_hover');
			}

			if(!targetElement.closest('.submenu-left__items') && document.querySelectorAll('.sub-submenu._hover').length > 0){
				_removeClasses(document.querySelectorAll('.submenu-left__sub.sub-submenu._hover'), '_hover');
			}
			console.log('test 1 ' + targetElement.closest('._active'));
			console.log('test 2 ' + document.querySelectorAll('.susubmenu-left__items').length);
			if(!targetElement.closest('._active') && document.querySelectorAll('.submenu-left__items._active-item').length > 0){
				_removeClasses(document.querySelectorAll('.susubmenu-left__items._active-item'), '_active-item');
			}
		}
}

/*======================БУРГЕР МЕНЮ справа===================================================*/

	document.querySelector('.header__menu-burger-right').addEventListener('click',function() {
	if( document.querySelector('.icon-menu__burger-right').classList.contains('_active') ){
		document.querySelector('.icon-menu__burger-right').classList.remove('_active');
		document.querySelector('.header__right-menu').classList.remove('_active');
		document.querySelector('body').classList.remove('_lock');
	}else{
		document.querySelector('.icon-menu__burger-right').classList.add('_active');
		document.querySelector('.header__right-menu').classList.add('_active');
		document.querySelector('body').classList.add('_lock');
	}
})

window.addEventListener('resize',function() {
	if(window.innerWidth > 1500){
		if( document.querySelector('.icon-menu__burger-right').classList.contains('_active') ){
			document.querySelector('.icon-menu__burger-right').classList.remove('_active');
			document.querySelector('.header__right-menu').classList.remove('_active');
			document.querySelector('body').classList.remove('_lock');
		}
	}
})
	
/************************************************************/
/*======================БУРГЕР МЕНЮ слева===================================================*/
//header__left-menu submenu-left _active

document.querySelector('.header__menu-burger-left').addEventListener('click',function() {
	if( document.querySelector('.icon-menu__burger-left').classList.contains('_active') ){
		document.querySelector('.icon-menu__burger-left').classList.remove('_active');
		document.querySelector('.submenu-left').classList.remove('_active');
		document.querySelector('body').classList.remove('_lock');
	}else{
		document.querySelector('.icon-menu__burger-left').classList.add('_active');
		document.querySelector('.submenu-left').classList.add('_active');
		document.querySelector('body').classList.add('_lock');
	}
})
/************************************************************/