(function () {

}());
	
// store list of cards 
var cards = ['king', 'queen', 'king', 'queen'];

var cardMap = {
	king: 'img/King.png',
	queen: 'img/Queen.png'
};

// store variable to denote the number of cards in play
var numCards = 4;

for(i=0; i < numCards; i++){
		$('#card-container').append("<div class='card'></div>");
}

// use JS to create the cards on the page and assign their class
	// put all cards in array, 
	// then use math.random() and array sort to put them in random order. Source - http://stackoverflow.com/questions/1911855/adding-randomly-chosen-class-to-html-tag-using-jquery
	// Then use $().each() to assign the random order cards in an array. Source - http://stackoverflow.com/questions/6636063/jquery-append-an-element-more-than-once
function randOrder() {
	return (Math.round(Math.random()) -0.5 );
}

var classes = cards;

function cardSort() {
	classes.sort(randOrder);

	$('.card').each(function(i, val){
		$(this).addClass(classes[i]);
	});	
}

cardSort();

var card1;

// when a user clicks on a card, get the card's class, show the corresponding image,
// and check to see if another card with the same class has already been clicked. 
// Try using jquery to add "clicked" class and check to see if there is another card
// with both the "clicked" class and the card's card-class.
	// check to see if card has "matched" class! 
$('.card').on('click', function(){

	if($(this).hasClass('flipped') && !$(this).hasClass('matched')) {
		$('.flipped').removeClass('flipped').css("background-image", 'url("img/back-of-card.png")');
	} else if($('.flipped').length === 0 && !$(this).hasClass('matched')) {
		var cardType = cards[$(this).index()];
		$(this).addClass('flipped').css("background-image", "url(" + cardMap[cardType] + ")");
		card1 = $(this).attr('class');
	} else if($('.flipped').length === 1 && !$(this).hasClass('flipped') && !$(this).hasClass('matched')) {
		// add the 'flipped' class to the newly-flipped card
		var cardType = cards[$(this).index()];
		$(this).addClass('flipped').css("background-image", "url(" + cardMap[cardType] + ")");
		// if this card's class is === the other flipped card's class...
		// guhhhhh returning -1. Position in returned array is fixed in the order of
		// the divs, so can't use this method. 
		if($(this).attr("class") === card1){
			// give them both the 'matched' class
			$('.flipped').addClass('matched').removeClass('flipped');
		}		

	} else {
		// check for matched
		if($(this).hasClass('matched')) {
			//exit
		} else {
			// otherwise, remove the flipped class from all cards
			$('.card').removeClass('flipped matched');
			$('.card').css("background-image", 'url("img/back-of-card.png")');
			$(this).addClass('flipped');

			var cardType = cards[$(this).index()];
			$(this).css("background-image", "url(" + cardMap[cardType] + ")");
		}
	}

});



$("button").on('click', function() {
	$('.card').removeClass().addClass('card').css("background-image", 'url("img/back-of-card.png")');
	cardSort();
});


/*$('.card').hover(function() {
	if($("#cheaty").prop('checked') && 
		$('.card').attr('class') != ('flipped' || 'matched') &&
		$(this).attr("class") === $($('.flipped')[$('.flipped').length - 2]).attr("class")) {
			$(this).addClass('cheat');
		}
		}, function() {
			$(this).removeClass('cheat');
});*/



// when there is a match, add "matched" class to each matched card and apply a style
// that indicates the cards are out of play. 