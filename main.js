/*

$(document).ready(function () {

	$(window).resize(function () {
		var windowHeight = $(window).height();
		var margin_top = windowHeight * -0.13;

		$('.home-container-well').css({
			'height': windowHeight
			});
		$('#title').css({
			'margin-top': margin_top
			});
	}).resize();

	function applyFade() {
		$('.title-inner').addClass('fade-in');
		$('.panel-footer').addClass('bottom-up');
	}
	applyFade();

	$('.social-link').on('click', function() {
		$this = $(this);
		$this.addClass('clicked');
	});
});
*/