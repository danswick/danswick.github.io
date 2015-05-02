##Map Help

This map displays census tracts in Cook County, Illinois. The default map shows population by tract (green is lower population, red is higher), but you can do a couple of this to manipulate the data being visualized.

There are several dimensions you can visualize:

1. Total Population
2. Population of one race: Black or African American
3. Population of one race: White
4. Population: Hispanic or Latino
5. Workers 16 years or older working from home
6. Total Households

You can activate each of the above dimensions by clicking its tab to the left. Once the tab is clicked, two things will happen: the map will change to reflect the new dimension and a bar chart within the tab will become active. 

Within an active tab, you can click and drag across the bar chart to select a range of values. You'll notice that the census tracts displayed on the map will change to reflect your selection. For greater precision, you can also type a range of values into the dimension's tab.  

To filter by multiple dimensions, just click into another tab and select an additional range of values. Now the map only shows census tracts that fall within the ranges you've selected.  

To zoom in or out, scroll with your mouse or touch pad. 

*This visualization was created using [Crosslet](http://sztanko.github.io/crosslet/) and [US Census Data](https://www.census.gov/geo/maps-data/data/tiger.html).*

>**Note:** as of May 1st, free map tile provider <a href="http://cloudmade.com/">Cloudmade</a> discontinued its free map tile service. Unfortunately, crosslet is currently (as of 6/20/2014) only compatible with cloudmade tile layers. This project will slowly be transitioned to use play <a href="http://square.github.io/crossfilter/">Crossfilter</a>, <a href="http://d3js.org/">D3</a>, and <a href="http://leafletjs.com/">leaflet</a>, but in the meantime, no basemap will be available.
