var chapterEls = geojson.features.map(function(feature) {
  var h3El = "<h3>" + feature.properties.day + ": " + feature.properties.name + "</h3>";
  var descEl = feature.properties.description ? "<p>" + feature.properties.description + "</p>" : '';
  var imgEl = feature.properties.imageUrl ? "<img src='" + feature.properties.imageUrl + "'></img>" : '';
  var linkEl = feature.properties.link ? "<a href='" + feature.properties.link + "'>Link</a>" : '';
  var sectionEl = "<section id=" + feature.properties.chapterId + " class=''>" + h3El + descEl + imgEl + linkEl + "</section>";
  return sectionEl;
});

var chapters = {};

geojson.features.forEach(function(feature) {
  var id = feature.properties.chapterId;
  var chapterData = {
    "bearing": 0,
    "center": feature.geometry.coordinates,
    "zoom": 12,
    "pitch": 0
  }

  chapters[id] = chapterData;
});

var chaptersContainer = document.getElementById('features');
chaptersContainer.innerHTML = chapterEls.join('');
document.addEventListener("DOMContentLoaded", function (event) {
  var renderedChapters = document.querySelectorAll('#features section');
  renderedChapters[0].className = 'active';

  var paddingNode = document.createElement("DIV")
  paddingNode.setAttribute("style", "height: 1000px");
  chaptersContainer.appendChild(paddingNode);
});

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuc3dpY2siLCJhIjoiY2l1dTUzcmgxMDJ0djJ0b2VhY2sxNXBiMyJ9.25Qs4HNEkHubd4_Awbd8Og';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/danswick/cjq6v9sa6bvjm2rlagqv2kcrg',
  center: [-122.26890563964842,37.8271414168374],
  zoom: 10,
  bearing: 27,
  pitch: 45
});

map.on('load', function () {
  map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": geojson
    },
    "layout": {
      "icon-image": "star",
      "text-field": "{name}",
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 0.6],
      "text-anchor": "top"
    },
    "paint": {
      "text-halo-color": "rgba(255,255,255,1)",
      "text-halo-width": 2
    }
  });
});

// On every scroll event, check which element is on screen
window.onscroll = function () {
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];
    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      break;
    }
  }
};

var activeChapterName = 'oak';
function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}

// set chapter active

