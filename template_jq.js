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
			
		});
		


		var $page = $('html, body');
		$('.header-nav li a').click(function () {
			var header_height = $('header').height();
			$page.animate({
				scrollTop: $($.attr(this, 'href')).offset().top - header_height
			}, 750);
			return false;
		});

		$(window).on('load scroll', function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop >= 1) {
				$('header').addClass('fixed');
			} else {
				$('header').removeClass('fixed');
			}

		})
		

	});

	
})(jQuery);


