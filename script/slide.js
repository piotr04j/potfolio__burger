
	var divOne = document.getElementById('js-offertOne'),
		divTwo = document.getElementById('js-offertTwo'),
		divThree = 	document.getElementById('js-offertThree'),
		btnOne = document.getElementById('one-btn'),
		btnTwo = document.getElementById('two-btn'),
		btnThree = document.getElementById('three-btn');
	
	btnOne.addEventListener('click', function(){ // show div 1
			divOne.style.display = 'block';
			divTwo.style.display = 'none';
			divThree.style.display = 'none';
			clearInterval(slideBySlide); // stop changing div
			buttonOneActive();
	})
	
btnTwo.addEventListener('click', function(){ // show div 2
	
			divOne.style.display = 'none';
			divTwo.style.display = 'block';
			divThree.style.display = 'none';
			clearInterval(slideBySlide);
			buttonTwoActive();
})

btnThree.addEventListener('click', function(){ // show div3
	
			divOne.style.display = 'none';
			divTwo.style.display = 'none';
			divThree.style.display = 'block';
			clearInterval(slideBySlide); 
			buttonThreeActive();
})

var slideBySlide = setInterval(function(){
	if (divOne.style.display === 'block'){
		  divOne.style.display = 'none';
			divTwo.style.display = 'block';
			divThree.style.display = 'none';
			buttonTwoActive();
	} else if (divTwo.style.display === 'block'){
		 divOne.style.display = 'none';
			divTwo.style.display = 'none';
			divThree.style.display = 'block';
			buttonThreeActive();
	} else {
		 divOne.style.display = 'block';
			divTwo.style.display = 'none';
			divThree.style.display = 'none';
			buttonOneActive();
	}
},2000);// changes divs 
	

function buttonOneActive() {
	
	btnOne.classList.remove('active');
	btnTwo.classList.remove('active');
	btnThree.classList.remove('active');
	btnOne.classList.add('active');
}

function buttonTwoActive(){
	
	btnOne.classList.remove('active');
	btnTwo.classList.remove('active');
	btnThree.classList.remove('active');
	btnTwo.classList.add('active');
}

function buttonThreeActive() {
	
	btnOne.classList.remove('active');
	btnTwo.classList.remove('active');
	btnThree.classList.remove('active');
	btnThree.classList.add('active');
	
}
