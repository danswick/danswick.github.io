$('.hamburger').on('click', function () {
	$('body').addClass('active');
	$('.content-inner').addClass('transparent');
});

$('.close').on('click', function () {
	$('body').removeClass('active');
	$('.content-inner').removeClass('transparent');
});