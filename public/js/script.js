jQuery(function ($) {
	$('.accordion-arrow').on('click', function () {
	  $(this).next().slideToggle(200);
	  $(this).toggleClass('open', 200);
	  $(this).prev().toggleClass('open', 200);
	});

	// OffCanvas
    $('.off-canvas-toggle').on('click', function(event) {
        event.preventDefault();
        $('body').toggleClass('off-canvas-active');
    });
    $('.menu-list li a').on('click', function(event) {
        // event.preventDefault();
        // $('body').removeClass('off-canvas-active');
    });
    $(document).on('mouseup touchend', function(event) {
        var offCanvas = $('.off-canvas')
        if (!offCanvas.is(event.target) && offCanvas.has(event.target).length === 0) {
            $('body').removeClass('off-canvas-active')
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > $(document).height()*0.2) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $(".sub-menu-parent span").click(function(){
        $(".sub-menu").toggle();
    });
});