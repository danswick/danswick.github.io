var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}


/*==================================================================
SWAP IN YOUR IMAGE LOCATIONS BELOW
==================================================================*/
// Note that the key (left value, before the ':') should have a 1
// or a 2 in order for the function below to work. These should 
// corresepond to the base and comparrison images you would like to 
// visualize.

var iamgePaths = {
	HP1: "img/HP-1946.jpg",
	HP2: "img/HP-2012.jpg",
	IBSP1: "img/IBSP-1946.jpg",
	IBSP2: "img/IBSP-2012.jpg",
	LB1: "img/LB-1946.jpg",
	LB2: "img/LB-2012.jpg"
};


$('#image-select').change(function() {
	var userChoice = $('#image-select').val();
	var userVariable1 = userChoice.concat('1');
	var userVariable2 = userChoice.concat('2');
	$('#base-image').css("background-image", "url(" + iamgePaths[userVariable1] + ")");
	$('#divisor').css("background-image", "url(" + iamgePaths[userVariable2] + ")");
});
