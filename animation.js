
let burger = document.querySelector('.section')


burger.addEventListener('click', ()=>{
    if (burger.classList.contains('menu-dtn_active')){
    burger.classList.remove('menu-dtn_active');
} else{
    burger.classList.add('menu-dtn_active');
}
})

// (function ($) {
//     $(document).ready(function () {
//     });
  

// function burgerMenu(querySelector){
//     let menu = $(selector);
//     let button = menu.find('.burger-meny__button');
//     let links = menu.find('burger-meny__link');
//     let overlay = menu.find('burger-meny__overlay')

//     button.on('click', (e) =>{
//         e.preventDefault();
//         toggleMenu();
//     })
//     links.on('click', ()=> toggleMenu());
//     overlay.on('click', ()=> toggleMenu())

//     function toggleMenu(){
//         menu.toggleClass('menu-dtn_active');

//         if (menu.hasClass('menu-dtn_active')){
//             $('body').css('overflow', 'hidden');
//         } else {
//             $('body').css('overflow', 'visible');
//         }
//     }
// }

// burgerMenu('.burger-menu')

// })(jQuery);