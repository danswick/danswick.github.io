var images = ['images/image_1.jpg', 'images/image_2.jpg', 'images/image_3.jpg', 'images/image_4.jpg', 'images/image_5.jpg', 'images/image_6.jpg'];
var currentPosition = 0;

$('#next')on('click', nextImage);
$('#prev').on('click', previousImage);

function nextImage(){
	$('#prev').prop('disabled', false);
	currentPosition += 1;
	changeImage();

 // 	if (currentPosition === images.length - 1) {
	// 	$('#next').prop('disabled', true);
	// }
}

function previousImage(){
	$('#next').prop('disabled', false);
	currentPosition -= 1;
	changeImage();

	if (currentPosition === 0 ) {
		$('#prev').prop('disabled', true);
	}
}

function changeImage(){
	$('#image-to-vote-on').attr('src', images[position]);
}
