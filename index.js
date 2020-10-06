
window.addEventListener('keydown',function(e){
	console.log(e.key);
	playsound(e.key);
	animate(e.key);
});

for(i=0; i<9;i++){
	document.querySelectorAll('.key')[i].addEventListener('click',function(){
		var a=this.querySelector('kbd').innerHTML;
		var classSound = a.toLowerCase();
		playsound(classSound);
		animate(classSound);
	})
}

function animate(classpassed){
	console.log('classpassed is '+classpassed);
	var a=document.querySelector('.'+classpassed);
	a.classList.add('playing');
	setTimeout(function(){
		a.classList.remove('playing');
	},100);
}

function playsound(keypressed){

		switch(keypressed){
		case 'a':
				var audio =new Audio('sounds/clap.wav');
				audio.play();
				break;
		case 's':
				var audio=new Audio('sounds/hihat.wav');
				audio.play();
				break;
		case 'd':
				var audio=new Audio('sounds/kick.wav');
				audio.play();
				break;
		case 'f':
				var audio=new Audio('sounds/openhat.wav');
				audio.play();
				break;
		case 'g':
				var audio=new Audio('sounds/boom.wav');
				audio.play();
				break;
		case 'h':
				var audio=new Audio('sounds/ride.wav');
				audio.play();
				break;
		case 'j':
				var audio=new Audio('sounds/snare.wav');
				audio.play();
				break;
		case 'k':
				var audio=new Audio('sounds/tom.wav');
				audio.play();
				break;
		case 'l':
				var audio=new Audio('sounds/tink.wav');
				audio.play();
				break;


		default:
				break;
		}
}
