var mapTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/danswick.lff6ij2d/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGFuc3dpY2siLCJhIjoieUZiWmwtVSJ9.0cPQywdbPVmvHiHJ6NwdXA', {
      attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank'>&copy; Mapbox &copy; OpenStreetMap</a> <a class='mapbox-improve-map' href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a>",
      maxZoom: 17,
    });

var ecosystemStyles = {
	woodland: { "color": "#a6611a",	"opacity": 0.5 },
	prairie: { "color": "#dfc27d", "opacity": 0.5 },
	wetland: { "color": "#80cdc1", "opacity": 0.5 },
	stream: { "color": "#018571", "opacity": 0.5  },
	econet: { "color": "darkgreen",	"opacity": 0.5 }
};

var map = L.map('leaflet-map', {
	center: [41.902, -89.453],
	zoom: 8
});

mapTiles.addTo(map);

$('.secondary-nav a').on('click', function(){
	$('.leaflet-zoom-animated g').remove(); // ugh, this is terrible, but i can't think of a better way to remove the existing layer before adding the new one
	var regionStyle = ecosystemStyles[$(this).data('tab')];
	$.getJSON("CW_region.geojson", function(regionData){
		var geojson = L.geoJson(regionData, {
			onEachFeature: function (feature, layer) {
				layer.bindPopup(feature.properties.Name);
			}
		});
		geojson.setStyle(regionStyle);
		geojson.addTo(map);
	});
});

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