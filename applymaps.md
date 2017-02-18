apple maps javascript API

We've seen [some chatter](http://www.sparkgeo.com/blog/apple-maps-api/) around the _geoblogosphere_ about a possible new javascript mapping API from Apple in the works. The fervor began around the time Apple launched this year's WWDC site, which features a slippy map of conference locations on the [attending page](https://developer.apple.com/wwdc/attending/), though the speculation goes a bit farther back. Apple has made no indication in this direction, but lots of Internet geo people have taken the slim evidence to mean that Apple is planning to launch a web version of MapKit along the lines of Google Maps or Leaflet. Here are some things we know, followed by a summary of opinions from resident Apple-watchers @friedbunny and @1ec5. 

- It's called MapKit (or `mapkit.js`), just like the iOS SDK
- According to @1ec5, [`mapkit.js`](https://cdn.apple-mapkit.com/mk/3.1.x/mapkit.js) is transpiled from the mobile MapKit. Popups are even called *annotations* in the web version of MapKit. 
- A few folks put together [demos](http://fruitymaps.com/), but they're all broken now, presumably because Apple didn't want others to be displaying the web version of MapKit. From what I can tell, Apple simply rotated their access token, disabling all of the demos out there in the wild. 
- As far as I can tell, the web MapKit is displaying raster tiles in a canvas. There are some nice-looking transitions and interaction animations, but no vector tile action. 

@friendbunny and @1ec5 weigh in

- This is not the first time people have speculated that Apple is on the verge of releasing a new JS maps API. In fact, they've had tiled versions of their maps for years
- Apple hasn't released any substantial development tools for the web since [web objects](https://en.wikipedia.org/wiki/WebObjects#2006:_Apple_deprecates_WebObjects_developer_tools) and it's not likely that they're going to do so for maps. Web developers aren't really Apple's market








