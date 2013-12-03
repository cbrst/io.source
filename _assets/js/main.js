$(document).ready(function() {

	/*
	 * Fixed navigation
	 */
	var navOffset = $('nav').offset().top;
	console.log(navOffset);

	$(window).scroll(function() {
		if($(window).scrollTop() > navOffset) {
			$('nav').addClass('fixed');
		} else {
			$('nav').removeClass('fixed');
		}
	});

});
