// basemap tiles (mapbox sat)
var mapTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/danswick.lff6ij2d/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGFuc3dpY2siLCJhIjoieUZiWmwtVSJ9.0cPQywdbPVmvHiHJ6NwdXA', {
      attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank'>&copy; Mapbox &copy; OpenStreetMap</a> <a class='mapbox-improve-map' href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a>",
      maxZoom: 17,
    });

// Vector styles for each lanscape type
var ecosystemStyles = {
	woodland: { "color": "#a6611a",	"fillOpacity": 0, "weight": 10 },
	prairie: { "color": "#dfc27d", "opacity": 0.5 },
	wetland: { "color": "#80cdc1", "opacity": 0.5 },
	stream: { "color": "#018571", "opacity": 0.5  },
	econet: { "color": "darkgreen",	"opacity": 0.5 }
};

// Landscape example centers (for panning)
var ecosystemCenters = {
	"woodland": "41.709, -87.892",
	"prairie": "41.380, -88.100",
	"wetland": "41.661, -87.032",
	"stream": "42.420, -88.164",
	"econet": "42.202, -88.453"
};

// Landscape example zoom levels 
var ecosystemZooms = {
	"woodland": 12,
	"prairie": 12,
	"wetland": 13,
	"stream": 14,
	"econet": 8
};

// Tilesets for each ecosystem 
var ecosystemTiles = {
	"woodland": 'http://givcore-danswick.rhcloud.com/GIV_core_layers/{z}/{x}/{y}.png',
	"prairie": 'http://givcore-danswick.rhcloud.com/GIV_core_layers/{z}/{x}/{y}.png',
	"wetland": 'http://givcore-danswick.rhcloud.com/GIV_core_layers/{z}/{x}/{y}.png',
	"stream": 'http://givcore-danswick.rhcloud.com/GIV_core_layers/{z}/{x}/{y}.png',
	"econet": 'http://tilehut-danswick.rhcloud.com/GIV_subset/{z}/{x}/{y}.png'
};

// Initialize the map
var map = L.map('leaflet-map', {
	center: [42.2, -88.5],
	zoom: 8,
	zoomAnimationThreshold: 5,
	zoomControl: false
});

// Add the basemap 
mapTiles.addTo(map);


// Method for panning, zooming ,adding tile layer programmatically.
function moveToLandscape(lat, lng, zoom, tiles) {
	map.panTo(new L.LatLng(lat, lng), {animate: true, duration: 1});
	map.once('moveend', function() { // set a one-time event listener (omg so cool)
		map.setZoom(zoom);
	});

	var tilesToAdd = L.tileLayer(tiles, {
		maxZoom: 17,
		opacity: 0.75,
	});

	$('.leaflet-tile-pane .leaflet-layer').slice(1).remove();

	tilesToAdd.addTo(map);
}