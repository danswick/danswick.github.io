// keep track of user's and bot's scores as variables 
var scoreUser = 0;
var scoreBot = 0;

// listen for onclick events for each of the three buttons 
document.getElementById('rock').onclick = function(){game('rock')};
document.getElementById('paper').onclick = function(){game('paper')};
document.getElementById('scissors').onclick = function(){game('scissors')};

// execute game function
function game(choice) {
	// var userChoice = element.currentTarget.id
	var botChoice = botSelection();
	var userChoice = choice;

	// run the whoWins(botChoice, userChoice) function to determine winner
	whoWins(botChoice, userChoice);

	// print new totals to humanScore and humanScore elements 
	document.getElementById('status').innerHTML = "<p>You played " + "<b><u>" + 
	userChoice + "</u></b>." + " The bot played " + "<b><u>" + botChoice + "</u></b>." +
	"<br>" + outcome; + "</p>"
}

// random number within a range
function mathRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// call function to get bot selection
function botSelection() {
	// pass array of choices as variable [rock, paper, scissors]
	var choices = ['rock', 'paper', 'scissors'];
	// use math Random to determine choice (0, 1, 2)
	var botChoice = choices[mathRandomInt(0,3)];
	// return selection based on above, as variable
	return botChoice;
}

function whoWins(bot, user) {
	compare = user + bot;

	// for winner, increment score unless tie 
	if(compare == 'rockpaper' || compare == 'paperscissors' || compare == 'scissorsrock' ) {
		outcome = "You lose. : (";
		scoreBot += 1;
		document.getElementById('computerScore').innerHTML = scoreBot;
	}
	else if(compare == 'paperrock' || compare == 'scissorspaper' || compare == 'rockscissors' ) {
		outcome = "You win! : )";
		scoreUser += 1;
		document.getElementById('humanScore').innerHTML = scoreUser;
	}
	else {
		outcome = "You tied. : |"
	}
}