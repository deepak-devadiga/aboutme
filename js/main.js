

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

		$("#owl-slider2").owlCarousel({
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


		$('#ctracker-app-info').on('click', () => {
			console.log('clicked');
			showInfoModal(`This app tracks live covid cases and provides info on nearby vaccination center and news about safety precautions for COVID-19.`, 'images/ctracker.png', 'https://drive.google.com/file/d/1y2dMgswcST_L7b_Mm4TrJodZ_bMpL955/view?usp=sharing');
		})

		$('#recipez-app-info').on('click', () => {
			console.log('clicked');
			showInfoModal(`This app can be used to save and view recipes added by various users.`, 'images/recipez.png', 'https://drive.google.com/file/d/1mvi-YMBPF9flHI9YzE2Vn8XuYVZmmUen/view?usp=sharing');
		})
	})




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
	$('#info-modal').hide();
	// $('#image-section').remove();
	$('.image-grid img').on('click', e => {
		// $('#image-section').remove();
		$('#image-modal').show();
		// $('.image-container').append(`<img id="image-section" src="${e.target.currentSrc}" alt="modal image" />`)
		$('#image-section').attr('src', e.target.currentSrc);
	});
	$('#close-modal').on('click', () => {
		// $('#image-section').remove();
		$('#image-modal').hide();
	})
	$('#close-info-modal').on('click', () => {
		// $('#image-section').remove();
		$('#info-modal').hide();
	});

	function showInfoModal(content, imgUrl, link) {
		console.log('calling')
		$('#info-modal').show();
		document.getElementById('info-text').innerText = content;
		$('#info-image-section').attr('src', imgUrl);
		$('#info-download').attr('href', link);
	}

})(jQuery);