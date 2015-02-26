// listen for click on inactive main nav item 
$('#main-nav a').on('click', function() {
	var sectionClass = $(this).data('related-panel');

	// if panel is already active, slide up the sub nav
	if($(this).parent().hasClass('active')) {
		$('#slide-down').children().hide();
		$('#slide-down').slideUp();
		$(this).parent().removeClass('active');
	} else {
	// otherwise... 
		if(!$('#main-nav a').hasClass('active')) {
			$('#slide-down').slideDown();	
		}
		$('#main-nav li').removeClass('active');
		// change class of `this` to 'nav-panel'
		$(this).parent().addClass('active');
		$('#slide-down').children().hide();
		
		 else {
			$('#' + sectionClass).fadeIn();
		}
	}
});