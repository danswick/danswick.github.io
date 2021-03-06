var waypoints = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "type": "normal",
        "itemCode": 0,
        "name": "Bunker",
        "description": "You meet a dog with a twinkle in his eye and a wag in his tail. He mentions a spot nearby with a great view... <button onclick='pathHint(" + '"' + 'satellite' + '"' + ")'>Ask for directions</button>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.53694415092468,
          37.83203941565131
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "type": "normal",
        "itemCode": 0,
        "name": "Storage room",
        "description": "You find an item..."
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.53561913967133,
          37.832730024277396
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "type": "normal",
        "itemCode": 0,
        "name": "Overlook",
        "description": "You can see everything from here...<br><button onclick='satelliteHint()'>Take a look</button>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.52974510192871,
          37.82154814863567
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "type": "normal",
        "itemCode": 0,
        "name": "Trail intersection",
        "description": "You cross paths with another traveller..."
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.51800775527954,
          37.83525937613405
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "type": "normal",
        "itemCode": 0,
        "name": "Start!",
        "description": "Hmmm... a few different paths to choose from. <button onclick='pathHint(" + '"' + 'start-north' + '"' + ")'>Head north?</button>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.54311323165894,
          37.839072305476435
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "type": "zombie",
        "itemCode": 1,
        "name": "startNorth",
        "description": "You got zombied."
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
            -122.543550923,
            37.842795468
        ]
      }
    }
  ]
};