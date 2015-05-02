$(document).ready(function() {

	//	1.	Slide the header up when it is clicked on.
	$('header').on('click', function() {
		$(this).slideUp();
	});

	// 2.	Remove the purple class 
	$('#box14').removeClass('purplebox');

	// 3.	Hide all of the div’s in row4
	$('#row4').hide('div');

	// 4.	Add a paragraph that says “I have been added” to all boxes with class “add-para” 
	$('.add-para').append('<p>I have been added!</p>');

	// 5.	Add a class to all the boxes and style it with CSS
	$('.box').addClass('boxytime');

	// 6.	Show the footer when the link in box2 is clicked
	$('#box2 a').on('click', function (e) {
		e.preventDefault();
		$('footer').fadeIn();
	});

	// 7.	Clicking on any box should toggle the “selected” class
	$('.box').on('click', function() {
		$(this).toggleClass('selected');
	});

	// 8.	Change the styling of the span inside of box3 by adding a class (and style that class in CSS)
	$('#box3 span').css({"color": "green"});

	// 9.	Change the background color of all the articles
	$('article').css({"background-color": "purple"});

	// 10.	Change the font color of all the articles in row 2
	$('#row2 articles').children().css({"color": "blue"});

	// 11.	Select the h4 in box 11 and hide the span inside of box11 using the .siblings() function
	$('#box11 h4').siblings().hide('span');

	// 12.	Clicking on box7 should hide the span within the h2
	$('#box7').on('click', function() {
		$('#box7 h2 span').hide();
	});

	// 13.	Add a h3 to the beginning of box12
	$('#box12').prepend('<h3>H3 MAN!</h3>');

	// 14.	SlideUp all the h1s on the page
	$('h1').slideUp();

	// 15.	Add a unique class and style it to all the articles in row1
	$('#row1 article').addClass('rowOne');

	// 16.	When you click on a div toggleFade the p’s within it -- changed to '.box' because '.div' switched everything on the page, which is no fun.
	$('.box').on('click', function() {
		$(this).find('p').fadeToggle();
	});

	// 17.	When you click on the footer fade it out.
	$('footer').on('click', function() {
		$(this).fadeOut();
	});

	// Self destruct, aka 18.	Clicking reset should fade all boxes, headers and footers in and remove any selected classes
	$('#reset').on('click', function() {
		$('.box, header, footer').removeClass().fadeOut();
	});

	// some extra junk I was playing with
	$('#box1 p').css({"background-color": "pink"});

	$('#box2').addClass('purplebox');

	$('#box3 p').on('click', function() {
		$(this).fadeOut(10000);
	});

});