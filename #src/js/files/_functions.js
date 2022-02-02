/*=============================================================*/
let ua = window.navigator.userAgent;
let msia = ua.indexOf("MSIE ");
let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

/*===================================================================*/
function isIE() {
	ua = navigator.userAgent;
	let is_ie = msia > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;	
}

if (isIE()){
	document.querySelector('html').classList.add('ie');	
}

if (isMobile.any()){
	document.querySelector('html').classList.add('_touch');	
}

/*===================================================================*/

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});

/*===================================================================*/

function ibg(){

let ibg=document.querySelectorAll("._ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}
ibg()
//.then(() => { console.log('images BG added correctly') })
/*.catch(err => { console.log('Error: ', err) throw err; });*/

/*===================================================================*/
function _removeClasses(arr_object, what_dell) {
	console.log(arr_object);
	for (var i = 0; i < arr_object.length; i++) {
		arr_object[i].classList.remove(what_dell);
	}
}



/**************Кеширование SVG Sprite в localStorage****************************/
