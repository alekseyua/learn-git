/*//удостоверяемся что все дом узлы готовы к работе
window.addEventListener("DOMContentLoaded", () => {
	const body = document.querySelector('body');
	const textNodes=[];
	//создадим функцию чтобы воспользоваться рекурсией
	function recursy(element) {
		//обращаемся ко всем дочерним потомкам тега element и получаем массив значений
		element.childNodes.forEach(node => {
		
		//зделаем проверку на наличие потомков в текущем элементе
		if(element.childNodes.length > 1){
			//отфильтруем теги
			if (node.nodeName.match(/^VIDEO/)) {
				console.log(node.currentSrc);
				textNodes.push(node.currentSrc);
			}else{
				//запускаем саму себя
				
				recursy(node);
			}
		}
	})
	}
	recursy(body);
	console.log(textNodes)
	






})

window.onload = function() {
 var video = document.createElement("video");

 var canvas = document.getElementById("prevImgCanvas");
 canvas.width = '500'//window.innerWidth;
 canvas.height = '300'//window.innerHeight;

 video.addEventListener('loadeddata', function() {
   reloadRandomFrame();
 }, false);
 video.addEventListener('seeked', function() {
   var context = canvas.getContext('2d');
   context.drawImage(video, 0, 0, canvas.width, canvas.height);
 }, false);

 var playSelectedFile = function(event) {
   var file = this.files[0];
   var fileURL = URL.createObjectURL(file);
   video.src = fileURL;
 }
var input2 = document.querySelector('.ttt2');
 var input = document.querySelector('.ttt');
 input.addEventListener('change', playSelectedFile, false);

 input2.addEventListener('click', reloadRandomFrame, false);

 function reloadRandomFrame() {
   if (!isNaN(video.duration)) {
     var rand = Math.round(Math.random() * video.duration * 1000) + 1;
     console.log("load at " + rand + " millis");
     video.currentTime = rand / 1000;
   }
 }
 }*/