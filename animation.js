let burger = document.querySelector('.section')


burger.addEventListener('click', () => {
	if (burger.classList.contains('menu-dtn_active')) {
		burger.classList.remove('menu-dtn_active');
	} else {
		burger.classList.add('menu-dtn_active');
	}
})

