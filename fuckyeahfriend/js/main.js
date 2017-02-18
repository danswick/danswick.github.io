/*
http://localhost:9001/fuckyeahfriend/?name=erin&sheet_url=1lJAqpic-_4lOyLtrWDPcNjTt4Ha_FnK8c31XfkCoVxg
*/


function init() {
  var sheetUrl;
  if (typeof qs.sheet_url === "undefined") {
  	sheetUrl = '1moLaPZOhkgtjV4t1yz2sdQVgqo7NL-VCdx6ryMoSscI';
  } else {
  	sheetUrl = qs.sheet_url;
  }

  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/' + sheetUrl + '/pubhtml',
                   callback: function(data, tabletop) { 
                       buildPage(data);
                   },
                   simpleSheet: true } )
}

/*
 * Todo: if spreadsheet qs is undefined, load a default spreadsheet with celebrities or something 
 */

window.addEventListener('DOMContentLoaded', init);

// get query parameters
var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));


var colorCombos = [
	{
		background: "#342323",
		text: "#F6E0CB"
	},
	{
		background: "#263423",
		text: "#FFD4C2"
	},
	{
		background: "#342323",
		text: "#ECCBF6"
	},
	{
		background: "#261D1D",
		text: "#EFAEAE"
	},
	{
		background: "#273235",
		text: "#F6E0CB"
	}
];

function buildPage(data) {
	var friendName; 
	if (typeof qs.name === "undefined") {
		subjectName = "friend";
		
	} else {
		subjectName = qs.name;
	};

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
	var subjectNameEl = $('#subjectName');

	friendNameEl.html("- " + sheetData.name);
	friendQuipEl.html("<p>" + sheetData.quip + "</p>");
	subjectNameEl.html(subjectName);
	imgExists(sheetData.photo, function(exists) {
		if (exists) {
			friendPic.css('background-image', 'url(' + sheetData.photo + ')');		
		}
	});
	
	friendStory.html("<p>" + sheetData.story + "</p>");
	
	// set page colors
	var bodyEl = $('body');
	// set background color
	bodyEl.css("background-color", colorCombos[getRandomInt(0, colorCombos.length)].background);
	bodyEl.css("color", colorCombos[getRandomInt(0, colorCombos.length)].text);
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