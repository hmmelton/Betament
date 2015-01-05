;(function(){

	// Menu settings
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});

	var height = $(window).height();
	$('#headerwrap').css('height', height);

	$.fn.isVisible = function() {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(this).offset().top;
	    var elemBottom = elemTop + $(this).height();

	    return (elemTop <= docViewBottom);
	}

	$(window).scroll(function() {
		$('.header-btn').each(function() {
			$(this).css('color', '#fff');
			$(this).css('border-color', '#fff');
		});

		$('.service').each(function() {
			if ($(this).isVisible()) {
				$(this).css('visibility', 'visible');
				$(this).addClass('slideUp');
			}
		});

		$('.pr').each(function() {
			if ($(this).isVisible()) {
				$(this).css('visibility', 'visible');
				$(this).addClass('fadeIn');
			}
		});

		$('.name_left').each(function() {
			if ($(this).isVisible()) {
				$(this).css('visibility', 'visible');
				$(this).addClass('pullDown');
				$('html').css('width', '100%');
			}
		});

		$('#mc-embedded-subscribe').hover(function() {
			$(this).addClass('pulse');
		}, function() {
			$(this).removeClass('pulse');
		});

		$('.name_right').each(function() {
			if ($(this).isVisible()) {
				$(this).css('visibility', 'visible');
				$(this).addClass('pullDown');
				$('html').css('width', '100%');
			}
		});
	});

	function clear() {

		var forms = $('form');
		var contact = forms[1];
		contact.submit();
		contact.reset();
	}

})(jQuery)

