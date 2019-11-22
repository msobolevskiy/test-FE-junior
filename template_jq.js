(function ($) {
  $(document).ready(function () {

		$('.r-active').on('click', function () {
			var list = $(this).parent().find('ul').fadeIn(250, function () {
				$('body').one('click', function () {
					list.fadeOut(250);
				});
			});
		});

		$(".my-slider").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000
			
		})
		// if($(window).width()<1100){
		// 	$('.my-slider').slick('unslick');
		// }
		

	});

	
})(jQuery);


