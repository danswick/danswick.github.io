var mapTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/danswick.lff6ij2d/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGFuc3dpY2siLCJhIjoieUZiWmwtVSJ9.0cPQywdbPVmvHiHJ6NwdXA', {
      attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank'>&copy; Mapbox &copy; OpenStreetMap</a> <a class='mapbox-improve-map' href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a>",
      maxZoom: 17,
    });

var ecosystemStyles = {
	woodland: { "color": "#a6611a",	"fillOpacity": 0, "weight": 10 },
	prairie: { "color": "#dfc27d", "opacity": 0.5 },
	wetland: { "color": "#80cdc1", "opacity": 0.5 },
	stream: { "color": "#018571", "opacity": 0.5  },
	econet: { "color": "darkgreen",	"opacity": 0.5 }
};

var ecosystemCenters = {
	"woodland": "41.709, -87.892",
	"prairie": "41.380, -88.100",
	"wetland": "41.661, -87.032",
	"stream": "42.420, -88.164",
	"econet": "42.202, -88.453"
};

var ecosystemZooms = {
	"woodland": 12,
	"prairie": 12,
	"wetland": 13,
	"stream": 14,
	"econet": 8
};

var ecosystemTiles = {
	"woodland": 'http://givcore-danswick.rhcloud.com/GIV_core_layers/{z}/{x}/{y}.png',
	"prairie": 'http://givcore-danswick.rhcloud.com/GIV_core_layers/{z}/{x}/{y}.png',
	"wetland": 'http://givcore-danswick.rhcloud.com/GIV_core_layers/{z}/{x}/{y}.png',
	"stream": 'http://givcore-danswick.rhcloud.com/GIV_core_layers/{z}/{x}/{y}.png',
	"econet": 'http://tilehut-danswick.rhcloud.com/GIV_subset/{z}/{x}/{y}.png'
};

var map = L.map('leaflet-map', {
	center: [42.2, -88.5],
	zoom: 8,
	zoomAnimationThreshold: 5,
	zoomControl: false
});

mapTiles.addTo(map);


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

/*$.getJSON("CW_region.geojson", function(regionData){
	var geojson = L.geoJson(regionData, {
		onEachFeature: function (feature, layer) {
			layer.bindPopup(feature.properties.Name);
		}
	});
	
	var map = L.map('leaflet-map', {
		center: [41.902, -89.453],
		zoom: 8
	});

	mapTiles.addTo(map);
	geojson.setStyle(regionStyle);
	geojson.addTo(map);
});*/


// add geojson and style it
/*$('.secondary-nav a').on('click', function(){
	$('.leaflet-zoom-animated g').remove(); // ugh, this is terrible, but i can't think of a better way to remove the existing layer before adding the new one
	var regionStyle = ecosystemStyles[$(this).data('tab')];
	$.getJSON("CW_region.geojson", function(regionData){
		var geojson = L.geoJson(regionData);
		geojson.setStyle(regionStyle);
		geojson.addTo(map);
	});
});*/