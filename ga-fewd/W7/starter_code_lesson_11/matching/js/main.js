// store list of cards 
cards = ['king', 'queen'];

// store variable to denote the number of cards in play
numCards = 4;

// use JS to create the cards on the page and assign their class
	// put all cards in array, 
	// then use math.random() and array sort to put them in random order. 
	// Then use $().each() to assign the random order cards in an array. 
$(document).ready(function(){
	var cardClasses = cards;
	for(i=0; i < numCards; i++){
		$('#card-container').append("<div class='card'><img src="img/back-of-card.png"></div>");
	}
});

// when a user clicks on a card, get the card's class, show the corresponding image,
// and check to see if another card with the same class has already been clicked. 
// Try using jquery to add "clicked" class and check to see if there is another card
// with both the "clicked" class and the card's card-class.
	// check to see if card has "matched" class! 


// when there is a match, add "matched" class to each matched card and apply a style
// that indicates the cards are out of play. 