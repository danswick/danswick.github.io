var humanScore = 0;
var computerScore = 0;

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

function play(humanPlay) {
  
  computerPlay = getComputerPlay();
  
  document.getElementById('status').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>";
  
  if(humanPlay == computerPlay) {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";

  } else if (humanPlay == 'paper' && computerPlay == 'rock' ||
             humanPlay == 'rock' && computerPlay == 'scissors' ||
             humanPlay == 'scissors' && computerPlay == 'paper') {

    document.getElementById('status').innerHTML += "<p>You win! :)</p>";
    humanScore++; 

  } else if (humanPlay == 'scissors' && computerPlay == 'rock' ||
             humanPlay == 'rock' && computerPlay == 'paper' ||
             humanPlay == 'paper' && computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
  }
  
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  
}

function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}