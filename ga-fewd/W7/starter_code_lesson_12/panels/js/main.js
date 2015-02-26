// when page loads, hide the panels 
$('.panel').not('#home').hide();

// when tab is clicked on, show corresponding panels
$('nav a').on('click', function() {
	// show related panel, fade in
	var relatedPanel = $(this).data('panel');

	console.log(relatedPanel);
	$('.panel').hide().removeClass('active');
	$('#' + relatedPanel ).fadeIn();
});

// 