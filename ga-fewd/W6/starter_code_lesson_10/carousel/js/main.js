// create an array of image sources and store as a variable
var imageBank = ["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", "images/image_4.jpg", "images/image_5.jpg", "images/image_6.jpg"];

// create an array of image scores and store as a variable
var imageScore = [0, 0, 0, 0, 0, 0];

// set an array position counter
var arrayPosish = 0;

// set up keypress listener for left and right arrow keys to advance images
$("body").keydown(function(e) {
	if(e.keyCode == 37 && arrayPosish > 0) { // left
		arrayPosish -= 1;
		advanceImage();
	} else if(e.keyCode == 39 && arrayPosish < (imageBank.length - 1)) {
		arrayPosish += 1; // right
		advanceImage();
	} else {
		console.log("keypress is broken");
	}
});

// set up button advance listeners
$("#prev").on("click", function(e) {
	if(arrayPosish > 0) { // left
		arrayPosish -= 1;
		advanceImage();
	} else {
		console.log("no previous images!");
	}
});

$("#next").on("click", function(e) {
	if(arrayPosish < (imageBank.length - 1)) { 
		arrayPosish += 1;
		advanceImage();
	} else {
		console.log("no more images!");
		$('#current-score').html(imageScore[arrayPosish]);
	}
});



// method to advance the image 
function advanceImage() {
	$('#image-to-vote-on').attr('src', imageBank[arrayPosish]); 
	if( arrayPosish === 0 ) { 			// if it's the first image, gray out "prev" button
		$("#prev").addClass("clicked");
	} else if(arrayPosish === (imageBank.length - 1)) {
		$("#next").addClass("clicked"); // if it's the last image, gray out "next" button
	} else {
		$("#prev").removeClass("clicked"); // if it's in the middle, reset button classes
		$("#next").removeClass("clicked");
	}

	$('#current-score').html(imageScore[arrayPosish]); // display the image's pre-vote score
};


// no more drop-down selector. star rating instead! 
$('.star').on("click", function(e) {
	e.preventDefault();
	imageScore[arrayPosish] += parseInt($(this).val()); // add choice to score for image
	$('#current-score').html(imageScore[arrayPosish]);  // display image's score
	$('.' + arrayPosish + ' td').last().text(imageScore[arrayPosish]);  // update image's score in score table
	if(arrayPosish < (imageBank.length - 1)) {  // unless it's the last image, advance to next after choice is made
		arrayPosish += 1;
		advanceImage();
	}
});

// pre-build score table
imageBank.forEach(function(element, index) {
		$('#scoreTable table').append('<tr class="' + String(index) + '"><td>' + element + '</td><td>' + imageScore[index] + '</td></tr>');
});





