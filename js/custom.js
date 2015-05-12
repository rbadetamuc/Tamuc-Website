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