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
				minSlides:2,
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
	if($('.check-media').width() != 990){
	 // Mobile stuff.
	$('.foot-widget-title').click(function(e) {
		e.preventDefault();
		$(this).next().slideToggle();
		$(this).find('.fa').ToggleClass('');
	});

	}
}