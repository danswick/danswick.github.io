/*window.onLoad = function() {
	var sceneSVG = document.getElementById('route-sketch');
	var svgDoc = sceneSVG.contentDocument; 
	var mountainRoute = svgDoc.getElementById('mountain-route');
	

	mountainRoute.setAttribute("class", 'mountain-route-animate');
};*/

var mountain = document.querySelector('#mountain');
var mountainRoute = document.querySelector('#mountain-route');

mountain.addEventListener('click', function() {
	this.classList.toggle('mountain-clicked');
	

	if ($('.mountain-route-animate').length ) {
		$('.mountain-route-animate').remove();
	} else {
		$('#mountain-route').clone()
							.appendTo('#route-sketch')
							.removeAttr('id')
							.attr({"class": "mountain-route-animate"});
	}
});
