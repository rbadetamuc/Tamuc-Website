<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
/* Add here all your JS customizations */
jQuery(document).ready(function($) {
	checkSize();
	$(window).resize(function(){
   		checkSize();
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
<<<<<<< HEAD
}
=======
}
=======
/* Add here all your JS customizations */
>>>>>>> origin/master
>>>>>>> master
