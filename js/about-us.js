$(document).ready(function () {
	$('#contact-us').click(() => {
		$('html, body').animate({
			scrollTop: $('.contact-wrapper').offset().top
		}, 1000);
	});

	$('#about-us').click(() => {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
});