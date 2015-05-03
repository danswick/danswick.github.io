var mapTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/danswick.lff6ij2d/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGFuc3dpY2siLCJhIjoieUZiWmwtVSJ9.0cPQywdbPVmvHiHJ6NwdXA', {
      attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank'>&copy; Mapbox &copy; OpenStreetMap</a> <a class='mapbox-improve-map' href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a>",
      maxZoom: 17,
    });

var givTiles = L.tileLayer('http://tilehut-danswick.rhcloud.com/GIV_subset/{z}/{x}/{y}.png', {
      maxZoom: 17,
    });

var map = L.map('leaflet-aside', {
	center: [41.902, -89.453],
	zoom: 8,
	zoomAnimationThreshold: 5
});

mapTiles.addTo(map);

givTiles.addTo(map);