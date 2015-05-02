var images=['images/image_1.jpg', 'images/image_2.jpg', 'images/image_3.jpg', 'images/image_4.jpg', 'images/image_5.jpg', 'images/image_6.jpg'];
var currentPosition = 0;
var votes = [0,0,0,0,0,0];

function nextImage(){
	$('#prev').prop('disabled', false);

	currentPosition += 1;
	changeImage();

 	if (currentPosition === images.length) {
		$('#next').prop('disabled', true);
		calculateVotes();
	}
}

function previousImage(){
	$('#next').prop('disabled', false);
	$('#score').text('');

	currentPosition -= 1;
	changeImage();

	if (currentPosition === 0 ) {
		$('#prev').prop('disabled', true);
	}
}

function changeImage(){
	$('#image-to-vote-on').attr('src', images[currentPosition]);
	$('#your-vote > option').prop('selected', false);
}

function calculateVotes(){
	var totalScore = 0;
	if(votes.length !== 0){
		votes.forEach(function(vote){
			totalScore += parseInt(vote);
		});
		totalScore = (Math.round((totalScore/votes.length) * 100) / 100).toFixed(2);

		$('#score').text('You have reached the end. Total score was: ' + totalScore);
	}
}

$('#next').on('click', nextImage);
$('#prev').on('click', previousImage);

$('#your-vote').on('change',function(){
	if(currentPosition < images.length){
		votes[currentPosition] = $('#your-vote').val();
		nextImage();
	}
});