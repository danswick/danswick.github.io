var mapTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/danswick.lff6ij2d/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGFuc3dpY2siLCJhIjoieUZiWmwtVSJ9.0cPQywdbPVmvHiHJ6NwdXA', {
      attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank'>&copy; Mapbox &copy; OpenStreetMap</a> <a class='mapbox-improve-map' href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a>",
      maxZoom: 17,
    });

var regionStyle = {
	"color": "green",
	"opacity": 0.5
};

$.getJSON("CW_region.geojson", function(regionData){
	var geojson = L.geoJson(regionData, {
		onEachFeature: function (feature, layer) {
			layer.bindPopup(feature.properties.Name);
		style: regionStyle
		}
	});
	
	var map = L.map('leaflet-map', {
		center: [41.902, -89.453],
		zoom: 8
	});

	mapTiles.addTo(map);
	geojson.addTo(map);
});