// $(document).on('click', ':submit', function( e ) {
// 	e.preventDefault;
// 	numCards = parseInt($('.text-input').val());
// });

(function () {

}());

// store variable to denote the number of cards in play
var numCards = prompt("How many cards?", "Even numbers only, please!");
	
// store list of cards 
var allCards = ['kingC', 'queenC', 'jackC', 'tenC', 'nineC', 'eightC', 'sevenC', 'sixC', 'fiveC', 'fourC', 'threeC', 'twoC', 'aceC', 'kingH', 'queenH', 'jackH', 'tenH', 'nineH', 'eightH', 'sevenH', 'sixH', 'fiveH', 'fourH', 'threeH', 'twoH', 'aceH', 'kingS', 'queenS', 'jackS', 'tenS', 'nineS', 'eightS', 'sevenS', 'sixS', 'fiveS', 'fourS', 'threeS', 'twoS', 'aceS', 'kingD', 'queenD', 'jackD', 'tenD', 'nineD', 'eightD', 'sevenD', 'sixD', 'fiveD', 'fourD', 'threeD', 'twoD', 'aceD'];

var cardsProto = allCards.slice(0, (numCards/2));

var cards = cardsProto.concat(cardsProto);



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
		$('.flipped').removeClass('flipped').css("background", 'url("img/back-of-card.png")');
	} else if($('.flipped').length === 0 && !$(this).hasClass('matched')) {
		var cardType = cards[$(this).index()];
		$(this).addClass('flipped').css("background", cardMap[cardType] );
		card1 = $(this).attr('class');
	} else if($('.flipped').length === 1 && !$(this).hasClass('flipped') && !$(this).hasClass('matched')) {
		// add the 'flipped' class to the newly-flipped card
		var cardType = cards[$(this).index()];
		$(this).addClass('flipped').css("background", cardMap[cardType] );
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
			// otherwise, remove the flipped class from all cards EXCEPT MATCHED
			$('.card').removeClass('flipped');
			$('.card').not('.matched').css("background", 'url("img/back-of-card.png")');
			$(this).addClass('flipped');

			var cardType = cards[$(this).index()];
			$(this).css("background", cardMap[cardType] );
			card1 = $(this).attr('class'); 
		}
	}

});



$("button").on('click', function() {
	$('.card').removeClass().addClass('card').css("background", 'url("img/back-of-card.png")');
	cardSort();
});

var cardMap = {
	kingC: "url('img/classic-playing-cards.png') -876px 0",
	queenC: "url('img/classic-playing-cards.png') -803px 0",
	jackC: "url('img/classic-playing-cards.png') -730px 0",
	tenC: "url('img/classic-playing-cards.png') -657px 0",
	nineC: "url('img/classic-playing-cards.png') -584px 0",
	eightC: "url('img/classic-playing-cards.png') -511px 0",
	sevenC: "url('img/classic-playing-cards.png') -438px 0",
	sixC: "url('img/classic-playing-cards.png') -365px 0",
	fiveC: "url('img/classic-playing-cards.png') -292px 0",
	fourC: "url('img/classic-playing-cards.png') -219px 0",
	threeC: "url('img/classic-playing-cards.png') -146px 0",
	twoC: "url('img/classic-playing-cards.png') -73px 0",
	aceC: "url('img/classic-playing-cards.png') 0 0",
	
	kingH: "url('img/classic-playing-cards.png') -876px -196px",
	queenH: "url('img/classic-playing-cards.png') -803px -196px",
	jackH: "url('img/classic-playing-cards.png') -730px -196px",
	tenH: "url('img/classic-playing-cards.png') -657px -196px",
	nineH: "url('img/classic-playing-cards.png') -584px -196px",
	eightH: "url('img/classic-playing-cards.png') -511px -196px",
	sevenH: "url('img/classic-playing-cards.png') -438px -196px",
	sixH: "url('img/classic-playing-cards.png') -365px -196px",
	fiveH: "url('img/classic-playing-cards.png') -292px -196px",
	fourH: "url('img/classic-playing-cards.png') -219px -196px",
	threeH: "url('img/classic-playing-cards.png') -146px -196px",
	twoH: "url('img/classic-playing-cards.png') -73px -196px",
	aceH: "url('img/classic-playing-cards.png') 0 -196px",

	kingS: "url('img/classic-playing-cards.png') -876px -98px",
	queenS: "url('img/classic-playing-cards.png') -803px -98px",
	jackS: "url('img/classic-playing-cards.png') -730px -98px",
	tenS: "url('img/classic-playing-cards.png') -657px -98px",
	nineS: "url('img/classic-playing-cards.png') -584px -98px",
	eightS: "url('img/classic-playing-cards.png') -511px -98px",
	sevenS: "url('img/classic-playing-cards.png') -438px -98px",
	sixS: "url('img/classic-playing-cards.png') -365px -98px",
	fiveS: "url('img/classic-playing-cards.png') -292px -98px",
	fourS: "url('img/classic-playing-cards.png') -219px -98px",
	threeS: "url('img/classic-playing-cards.png') -146px -98px",
	twoS: "url('img/classic-playing-cards.png') -73px -98px",
	aceS: "url('img/classic-playing-cards.png') 0 -98px",

	kingD: "url('img/classic-playing-cards.png') -876px -294px",
	queenD: "url('img/classic-playing-cards.png') -803px -294px",
	jackD: "url('img/classic-playing-cards.png') -730px -294px",
	tenD: "url('img/classic-playing-cards.png') -657px -294px",
	nineD: "url('img/classic-playing-cards.png') -584px -294px",
	eightD: "url('img/classic-playing-cards.png') -511px -294px",
	sevenD: "url('img/classic-playing-cards.png') -438px -294px",
	sixD: "url('img/classic-playing-cards.png') -365px -294px",
	fiveD: "url('img/classic-playing-cards.png') -292px -294px",
	fourD: "url('img/classic-playing-cards.png') -219px -294px",
	threeD: "url('img/classic-playing-cards.png') -146px -294px",
	twoD: "url('img/classic-playing-cards.png') -73px -294px",
	aceD: "url('img/classic-playing-cards.png') 0 -294px"
};