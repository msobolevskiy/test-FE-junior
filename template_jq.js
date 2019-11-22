(function ($) {
  $(document).ready(function () {
		$('.r-active').on('click', function () {
			var list = $(this).parent().find('ul').fadeIn(250, function () {
				$('body').one('click', function () {
					list.fadeOut(250);
				});
			});
		});
	});
})(jQuery);