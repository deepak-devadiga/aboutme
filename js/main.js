

(function ($) {
	"use strict";
	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
	$(window).load(function () {
		// will first fade out the loading animation 
		$("#loader").fadeOut("slow", function () {
			// will fade out the whole DIV that covers the website.
			$("#preloader").delay(300).fadeOut("slow");
		});
	})
	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */
	$("#owl-slider").owlCarousel({
		navigation: false,
		pagination: true,
		itemsCustom: [
			[0, 1],
			[700, 2],
			[960, 3]
		],
		navigationText: false
	});

	$("#owl-slider1").owlCarousel({
		navigation: true,
		pagination: true,
		itemsCustom: [
			[0, 1],
			[500, 2],
			[700, 3]
		],
		navigationText: false,
		autoPlay: true,
		slideSpeed: 100,
		paginationSpeed: 500
	});



	/*---------------------------------------------------- */
	/* Smooth Scrolling
	------------------------------------------------------ */
	$('.smoothscroll').on('click', function (e) {

		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});

	});
	$('#image-modal').hide();
	$('.image-grid img').on('click', e => {
		console.log('image ', e);
		$('#image-modal').show();
		$('#image-section').attr('src', e.target.currentSrc)
	});
	$('#close-modal').on('click', () => {
		$('#image-modal').hide();
	})
})(jQuery);