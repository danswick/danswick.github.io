var mapTiles = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL,</a> and <a href="https://data.cityofchicago.org/Service-Requests/311-Service-Requests-Rodent-Baiting/97t6-zrhs?">City of Chicago</a>',
      maxZoom: 17,
    });

var regionStyle = {
	"color": "green",
	"opacity": 0.5
};

$.getJSON("../../data/CW_region.geojson", function(regionData){
	var geojson = L.geoJson(regionData, {
		onEachFeature: function (feature, layer) {
			layer.bindPopup(feature.properties.Name);
		style: regionStyle
		}
	});
	
	var map = L.map('leaflet-map').fitBounds(geojson.getBounds());

	mapTiles.addTo(map);
	geojson.addTo(map);
});