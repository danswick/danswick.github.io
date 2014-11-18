#GIS and Delta

##Intro...why we're talking about this 

- Demands for geospatial work have gone up over the last few months, leading to some bottlenecks. Over the past few years, most requests have gone through me, but that's about to change! 
- We're going to cover a few things today. Feel free to ask questions and follow along on your own. 
    + Demystifying GIS, the cliff notes version
    + Hey, maybe it's about more than ArcMap
    + A typical Delta case study
    + How to request a map product for your project: save time, make friends, be excellent 

- Demystifying GIS, the Cliff's notes version 
    + What are we talking about here? A few different things:
        * You want some information displayed on a map
            - Example: Detroit demo permits 
        * You have some geospatial data and you want to use it to answer a question
            - Example: Little Village brownfields 
        * You want to use a map to get a better sense of a problem: 
            - Example: Prioritizing erosion vulnerability 
        * You are preparing a publication and need something _designed_. 
            - Example: K6 binder cover 
    + Before we get too far in the weeds, let's talk about that GIS is and isn't
        * "A geographic information system (GIS) is a computer system designed to capture, store, manipulate, analyze, manage, and present all types of spatial or geographical data." - [Wikipedia](http://en.wikipedia.org/wiki/Geographic_information_system)
        * That's all well and good, but when most people talk about GIS, they are really talking about: 
        * ![ArcMap logo](http://www.ce.memphis.edu/tcegis/resources/graphics/ArcMap_01.jpg)
        * ArcMap is the quintessential desktop GIS. It's very powerful and most of us have interacted with in one way or another at some point, but it can be cumbersome, has some tricky proprietary formats and so on, so we use a whole suite of tools
        * Some folks here have gotten a crash course in QGIS, an open-source desktop GIS that can do pretty much everything ArcMap can do and is free. I also tend to think its workflows are a bit more sensible and believe in working with common standards rather than proprietary formats. Anyway... 
        * We also use a bunch of free or paid online services: Google Maps, Google Earth, Google Fusion Tables, GeoCommons, BatchGeo, CartoDB, CrossLet, ESRI Business Analyst Online, ESRI ArcGIS Online, GeoJSON.io, etc, etc
        * Based on the earlier GIS definition, all of these things qualify as GIS and each has a part in the way we collect, manipulate, analyze and present geospatial data. 
        * Let's take a quick look under the hood. We'll cover a couple of things really quickly, so don't worry if some of it still feels abstract. We don't have enough time to go really in depth, so I've tried to link to resources wherever possible. 
            1. Show QGIS and some basic features. This is classic desktop GIS. It's complicated, yes, but at its core it functions much like any other desktop software you've used. No magic involved. 
            2. Show a couple of common data formats. There are two main types of geodata you'll run into: vector and raster. 
            3. Vector geo data has three things: geometry, a location, and attribute information. 
                - http://maptime.io/geodata/#22
                - http://maptime.io/anatomy-of-a-web-map/#73 
                - http://maptime.io/anatomy-of-a-web-map/#75
                - http://maptime.io/anatomy-of-a-web-map/#76
                - http://maptime.io/anatomy-of-a-web-map/#77
            3. Like vector data, raster data contains location. But it stores its attribute information differently. Raster data stores its information in its pixels. This information can include height, slope, direction, color, and many others.
                - http://maptime.io/geodata/#21
            4. Attributes. Geodata can store all kinds of information. We'll get into this a bit more during the case study. 
            5. Geodesy (gee-Odyssey). A lot of folks who learn ArcMap miss out on the finer points (because ArcMap is smart and abstracts this bit away), but geodesy is what makes mapping work. Here's a real brief rundown: 
                - Geoids: http://lyzidiamond.com/geodesy/#5 - #23 
                - Datums: http://lyzidiamond.com/geodesy/#29 - #47
                - Projections: http://lyzidiamond.com/geodesy/#63 - #89 (GOWSE)
                - To recap, there are three main pieces of geodetic information required to properly display and analyze your geodata: 
                    + You need to know the geoid or, to put another way, mathematical model of our "lumpy earth"
                    + You need to know the datum, or coordinate system that takes into account all of your reference earth's lumps 
                    + You need to define a projection, or method for turning transforming your data from a sphere to a plane. 
        * Okay, great. Let's talk more about that process with an example.
    + This is a fairly typical workflow we see across our projects and we'll use it to talk about how we typically get from idea to finished product and all of the steps along the way. 
    + Example 1: Little Village
        * Concept: 
            1. Use a bunch of readily available data to figure out where potential redevelopment sites are located, within Little Village's neighborhood boundaries.
            2. Once you've got your list of sites, use the geospatial data to help guide on-the-ground data collection 
            3. Produce a large, illustrative map for a stakeholder meeting 
        * ID'ing sites, step 1: OMG addresses 
            - SIGNPOST: geocoding. Geocoding is the process of turning *addresses* into lat/long *coordinates*. This process is what allows us to put a bunch of points onto a map and view them. It relies on super complicated databases, usually maintained by private companies like ESRI or Google (though there is an amazing community-let effort to change this - openaddresses.io) in order to function. 
            - Show Lucy's data table and the results of the geocoding process. Note that the resulting data has an attribute table that retains all of the original tabular data. 
        * ID'ing sites, step 2: Crap. It turns out the *city's* address database doesn't align with the *county's* parcel boundaries. 
            - We really needed to know the county PIN for each potential site in order to look up that site's assessor data, but there didn't seem to be a single dataset with **both** the addresses **and** the county PINs.
            - Enter geosprocessing! 
            - Geoprocessing is what separates data analysis in excel from data analysis in a GIS. Because your data is *spatially enabled* (this really just means that your data has lat/long coordinates associated with it), GIS software can perform some fancy analysis, such as: 
            - Tell me whether this **point** (address) falls within a **polygon** (parcel) and, if it does, spit out a *new* dataset with that extra info tacked on at the end. 
        * ID'ing sites, step 3: Oh no. Our project boundary wasn't correctly defined. 
            - This happens all the time. Once you get into a project, you realize you forgot something at the beginning. In this case, our partner told us that the project fell across two zip codes. Turns out it was 3. That's okay. At the end of this presentation, we'll talk about a couple of ways we can try to avoid these issues by asking some strategic questions at the outset. 
        * Helping out the data collectors: 
            - We had our list of sites, but sometimes you just can't beat on-the-ground observation, which meant sending a bunch of students out into the field with tablets. In order to help them find their way, I put together some printed maps. These had coded site labels that corresponded to a printed table with lots of info about each site. 
            - Show image of these maps. 
            - This step required a bit of back-and-forth and some design decisions regarding how best to display the data for the students. 
        * Producing a map for the stakeholder meeting: 
            - Another key element of the LV project is the stakeholder process. This is common with Delta projects. It's basically a big, easy-to-read map with some important elements displayed. In this case, the map helped facilitate the discussion and get people thinking about how a bunch of potential redevelopment sites fit into the fabric of their neighborhood. Some key elements to this process: 
                + How big is the map going to be? This will dictate how each map element gets scaled and placed in the designed product. 
                + Which information should be displayed? 
                + Do we already have that information or do we need to find it or create it? What format is it in and how much cleanup will need to be performed? 
                + Who is going to print the map for us and what format do they require? 
                + Who needs to review the product before it is printed? When are they expecting to receive a draft and how long will they need to respond? 
        * To recap: 
            - We geocoded a lot of different datasets and brought them together
            - We used geoprocessing to figure out where addresses (points) fell withing parcels (polygons) and generated a *new* dataset with both types of information. 
            - We created some field maps for students to use while conducting site visits
            - We made a big ol' printed map for a stakeholder meeting 
    + Wow, that was a ton of information. Why did I tell you that? A couple of reasons: 
        1. I am hoping this will give you a better sense of how to plan your projects with regard to geospatial products 
        2. GIS and mapping are not black boxes and we shouldn't treat them that way 
        3. I'm about to propose a process for planning the geospatial aspects of your projects and, if necessary, bringing your fellow Deltoids in to help. 
    + Run through Google form - https://docs.google.com/a/delta-institute.org/forms/d/1eE6ALfdrYctKi8bJbFbNbAm0-ZVCgiEjME1aeQkOaLY/viewform 


















