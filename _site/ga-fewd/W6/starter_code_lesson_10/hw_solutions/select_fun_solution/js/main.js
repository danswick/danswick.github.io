// 1.	Slide the header up when it is clicked on.
$('header').on('click', function () {
	$(this).slideUp();
});

// 2.	Remove the purple class
$('.box').removeClass('purplebox');

// 3.	Hide all of the div’s in row4
// NOTE: Parameters hide method accepts
$('#row4').find('div').hide();

// 4.	Add a paragraph that says “I have been added” to all boxes with class “add-para”
$('.add-para').append('<p>I have been added</p>');

// 5.	Add a class to all the boxes and style it with CSS
$('.box').addClass('fewd-rocks');

// 6.	Show the footer when the link in box2 is clicked
$('#box2 a').on('click', function(e) {
	e.preventDefault();
	$('footer').show();
});

// 7.	Clicking on any box should toggle the “selected” class
$('.box').on('click', function () {
	$(this).toggleClass('selected');
});

// 8.	Change the styling of the span inside of box3 by adding a class (and style that class in CSS)
$('#box3').find('span').addClass('moe-rocks');

// 9.	Change the background color of all the articles
$('article').addClass('articles-rock');

// 10.	Change the font color of all the articles in row 2
$('#row2').find('article').addClass('fun-text');

// 11.	Select the h4 in box 11 and hide the span inside of box11 using the .siblings() function
$('#box11').find('h4').siblings('span').hide();

// 12.	Clicking on box7 should hide the span within the h2
$('#box7').on('click', function () {
	$(this).find('h2').children('span').hide();
});

// 13.	Add a h3 to the beginning of box12
$('#box12').prepend('<h3>jQuery is awesome</h3>');

// 14.	SlideUp all the h1s on the page
$('h1').slideUp('2000');

// 15.	Add a unique class and style it to all the articles in row1
// NOTE: Order in stylesheet
$('#row1').find('article').addClass('kent-rocks');

// 16.	When you click on a div toggleFade the p’s within it
$('.box').on('click', function () {
	$(this).find('p').fadeToggle();
});

// 17.	When you click on the footer fade it out.
$('footer').on('click', function () {
	$(this).fadeOut();
});

// 18.	Clicking reset should fade all boxes, headers and footers in and remove any selected classes
$('#reset').on('click', function () {
	$('.box, header, footer, p').fadeIn();
	$('.box').removeClass('selected');
});
