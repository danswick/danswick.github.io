function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1lJAqpic-_4lOyLtrWDPcNjTt4Ha_FnK8c31XfkCoVxg/pubhtml',
                   callback: function(data, tabletop) { 
                       buildPage(data);
                   },
                   simpleSheet: true } )
}


window.addEventListener('DOMContentLoaded', init);

function buildPage(data) {
	var n = getRandomInt(0, data.length); 
	var sheetData = {
		name: data[n].name,
		quip: data[n].quip,
		story: data[n].story,
		photo: data[n].photo
	}

	var friendNameEl = $('#friendName');
	var friendQuipEl = $('#friendQuip');
	var friendPic = $('#friendPic');
	var friendStory = $('#friendQuote');

	friendNameEl.html(sheetData.name);
	friendQuipEl.html("<p>" + sheetData.quip + "</p>");
	imgExists(sheetData.photo, function(exists) {
		if (exists) {
			friendPic.css('background-image', 'url(' + sheetData.photo + ')');		
		}
	});
	
	friendStory.html("<p>" + sheetData.story + "</p>");
	
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function imgExists(url, callback) {
	var img = new Image();
	img.onload = function() { callback(true); };
	img.onerror = function() { callback(false); };
	img.src = url; 
}