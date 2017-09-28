window.onload = function(){
	
	var menuHamburger = document.querySelector('.header__menu__button');
	var menuNav = document.querySelector('.nav');
	var menuHamburgerClass = document.querySelector('.ion-navicon-round');
	
	menuNav.style.display = 'none';
	
	document.addEventListener('click', function(e){
		
		var isClickBurger = menuHamburger.contains(e.target);
			
		if (isClickBurger){
			
			if (menuNav.style.display === 'none'){

				menuNav.style.display = 'block';
				menuHamburgerClass.classList.remove('ion-navicon-round');
				menuHamburgerClass.classList.add('ion-close');

			} else {

				menuNav.style.display = 'none';
				menuHamburgerClass.classList.remove('ion-close');
				menuHamburgerClass.classList.add('ion-navicon-round');
			}	
		} else {
			
			menuNav.style.display = 'none';
			menuHamburgerClass.classList.remove('ion-close');
			menuHamburgerClass.classList.add('ion-navicon-round');
		}	
	})	
}

