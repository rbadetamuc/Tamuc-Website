<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
>>>>>>> origin/master
/* Add here all your JS customizations */
jQuery(document).ready(function($) {
	checkSize();
	$(window).resize(function(){
   		checkSize();
	});
	$('.b-search-box .fa').click(function(){
		var target = '.b-search-box #searchField';
		$(target).toggle();
		if($(target).is(':visible')){
			$(target).focus();
		}
	});
	var gfeedfetcher_loading_image="js/bxslider/images/bx_loader.gif" 
	$( window ).load(function() {	
		var slider = $('.j-carousel-rss').bxSlider({
				maxSlides:2,
				controls: false,
				slideMargin: 30,
				slideWidth: 568,
				pager: true
		});
		if(slider){
			$('.loadingrss').hide();
			$('.b-carousel-primary__item').show();
		}
	});
});
function checkSize(){
	if ($(window).width() < BREAK.SM) {
		$('.foot-widget-area').hide();
	 // Mobile stuff.
	$('.foot-widget-title').on( "click", function(e) {
		e.preventDefault();
		$(this).next().slideToggle();
		$(this).find('.fa').ToggleClass('');
	});
	}if ($(window).width() > BREAK.SM) {{
		$('.foot-widget-area').show();
		$('.foot-widget-title .fa').hide();
		$('.foot-widget-title').off( "click");
	}
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
=======
/* Add here all your JS customizations */
>>>>>>> origin/master
>>>>>>> master
>>>>>>> origin/master
