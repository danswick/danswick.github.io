// Map setup
var zoomSetting = 16.2;
var bboxS = 37.8185,
    bboxN = 37.84764,
    bboxE = -122.467,
    bboxW = -122.5488;

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuc3dpY2siLCJhIjoieUZiWmwtVSJ9.0cPQywdbPVmvHiHJ6NwdXA';

var customStyle = 'mapbox://styles/danswick/cilnegnzr00439gkf7urxz0xk';
var map = new mapboxgl.Map({
    container: 'map', 
    style: customStyle, 
    minZoom: zoomSetting,
    maxZoom: zoomSetting,
    maxBounds: [[bboxE, bboxN], [bboxW, bboxS]],
    center: [-122.55, 37.84], 
    zoom: zoomSetting,
    dragPan: false
});


// Hex setup 
var bbox = [bboxE, bboxN, bboxW, bboxS];
var cellWidth = 0.15;
var units = 'miles';
var grid = turf.hexGrid(bbox, cellWidth, units);

// Add unique IDs and a property to store info 
// on whether we've visitied each hex
for(i = 0; i < grid.features.length; i++) {
    grid.features[i].properties.idNum = i;
    grid.features[i].properties.visited = 'no';
    grid.features[i].properties.hover = 'n';
}

var popup = new mapboxgl.Popup();


map.on('style.load', function () {
    loadTheGrid();
});

var source;
var waypointSource;

function loadTheGrid() {
    // Great a new GeoJSON source from our hex geojson
    source = new mapboxgl.GeoJSONSource({
        data: grid
    });
    waypointSource = new mapboxgl.GeoJSONSource({
        data: waypoints
    });

    // Add hex source to the map
    map.addSource('hexgrid', source);
    map.addSource('waypoints', waypointSource);

    /* Set up a few layers: 
     *   - 2 hex outlines to make them look spooky
     *   - The un-visited hexes, {visited} = 'no' 
     *   - Visited hexes, {visited} == 'yes'
     */

    // Add a layer showing the markers.
    map.addLayer({
        "id": "waypoints",
        "interactive": true,
        "type": "circle",
        "source": "waypoints",
        "layout": {},
        "paint": {
            "circle-radius": 20,
            "circle-color": "#9932CC",
            "circle-blur": 0.6
        }
    });
    map.addLayer({
        "id": "waypoints-inner",
        "interactive": true,
        "type": "circle",
        "source": "waypoints",
        "layout": {},
        "paint": {
            "circle-radius": 13,
            "circle-color": "#7a1fa8",
            "circle-blur": 0
        }
    });
    map.addLayer({
        'id': 'hexgrid-line-2',
        'type': 'line',
        'source': 'hexgrid',
        'layout': {
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#333',
            'line-opacity': 0.8,
            'line-width': 50,
            'line-blur': 60,
        },
        'filter': ['==', 'visited', 'no']
    });
    map.addLayer({
        'id': 'hexgrid-line',
        'type': 'line',
        'source': 'hexgrid',
        'layout': {
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#333',
            'line-opacity': 0.8,
            'line-width': 30,
            'line-blur': 30,
        },
        'filter': ['==', 'visited', 'no']
    });
    map.addLayer({
        'id': 'hexgrid',
        'interactive': true,
        'type': 'fill',
        'source': 'hexgrid',
        'layout': {},
        'paint': {
            'fill-color': '#222',
            'fill-opacity': 1
        },
        'filter': ['==', 'visited', 'no']
    });
    map.addLayer({
        'id': 'hexgrid-visited',
        'type': 'fill',
        'source': 'hexgrid',
        'layout': {},
        'paint': {
            'fill-color': '#fff',
            'fill-outline-color': '#777',
            'fill-opacity': 0
        },
        'filter': ['==', 'visited', 'yes']
    });
    map.addLayer({
        "id": "hex-hover",
        "type": "fill",
        "source": "hexgrid",
        "interactive": true,
        "layout": {},
        "paint": {
            'fill-color': '#343434',
            'fill-opacity': 0.2,
        },
        "filter": ["<", "idNum", 1]
    });

    map.on('mousemove', function(e){
        map.featuresAt(e.point, {
            radius: 1,
            layer: ["hexgrid"]
        }, function (err, features) {
            if (!err && features.length) {
                map.setFilter("hex-hover", ["==", "idNum", features[0].properties.idNum]);
            } else {
                map.setFilter("hex-hover", ["<", "idNum", 1]);
            }
        });
    });


    map.on('click', function(e){

        map.panTo(map.unproject(e.point));

        map.featuresAt(e.point, {
            radius: 15, // Half the marker size (15px).
            includeGeometry: true,
            layer: 'waypoints'
        }, function (err, features) {

            if (err || !features.length) {
                popup.remove();
                return;
            }

            var feature = features[0];

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(feature.geometry.coordinates)
                .setHTML(feature.properties.description)
                .addTo(map);
        });
    });
    // Whenever the map is moving, check to see if we've 
    // visited the hex under the center coord
    map.on('move', function(e) {
        map.featuresAt(map.project(map.getCenter()), {layer: 'hexgrid', radius: 1, includeGeometry: true}, function (err, features) {
            if (err) throw err;
            visitMe(features[0].properties.idNum);
        });
    });
    // When we're done moving, update the hex source's data
    // note: this is not ideal, but updating source data
    // continually is much worse! 
    map.on('moveend', function(e){
        source.setData(grid);
        map.setFilter("hex-hover", ["<", "idNum", 1]);
    });

    // Update the hex under the center coord's visited property!
    function visitMe(featureId) {
        grid.features[featureId].properties.visited = 'yes';
    }
}

function satelliteHint() {
    map.setLayoutProperty('mapbox-mapbox-satellite', 'visibility', 'visible');
    map.setPaintProperty('hexgrid', 'fill-opacity', 0);
    setTimeout(function(){
            map.setPaintProperty('hexgrid', 'fill-opacity', 1);
            map.setLayoutProperty('mapbox-mapbox-satellite', 'visibility', 'none');

    }, 10000);
}

function pathHint(hint) {
    map.setFilter('adventure paths', ['all', ['==', 'pathName', hint]])
}



/* Potential choose-your-own-adventure bits for later on
 * -----------------------------------------------------
var gameLocations = [
    {
        "name": "Home",
        "coordinates": [-122.261, 37.837]
    },
    {
        "name": "The mountain",
        "coordinates": [-121.915, 37.882]
    },
    {
        "name": "The marshland",
        "coordinates": [-122.089, 37.5566]
    }
];

var picky = document.getElementById('choice');
picky.onclick = function(e) {
    var target = $(e.target).parent();
    var coords = $(target).data(coords);
    var myCoords = JSON.parse("[" + coords.coords + "]");
    nextPosition(myCoords);
}
for (i=0; i < gameLocations.length; i++) {
    $('#choice').append("<div class='choice-item' data-coords='" + gameLocations[i].coordinates + "'><span class='choice-name'>" + gameLocations[i].name) + "</span>"
}

function nextPosition(endLocation) {
    map.panTo(endLocation, {duration: 5000});
}
 * -----------------------------------------------------
 */