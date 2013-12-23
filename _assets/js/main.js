$(document).ready(function() {

	/*
	 * Fixed navigation
	 */
	var navOffset = $('nav').offset().top;
	var titleOffset = $('.title').offset().top;

	$(window).scroll(function() {
		if($(window).scrollTop() > navOffset) {
			$('nav').addClass('fixed');
		} else {
			$('nav').removeClass('fixed');
		}
	});

});
