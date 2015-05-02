$('.boxTwo').removeClass("purple");

$('#boxThree a').on('click', function (e) {
	e.preventDefault();
	$('#boxThree').fadeOut();
});

$('h3').on('click', function() {
	$(this).slideUp();
});

$('p span').hide();