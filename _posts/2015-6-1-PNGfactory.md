---
layout: post
title: Making a PNG Factory
---

For the past 9 months, I've had the opportunity to work on a fun, challenging [project](http://deltalumin.com) centered around helping people understand their relationship to electricity in their homes. It sits in a kind of strange edge area near [services](http://www.bidgely.com/) desiged to give you live, high-resolution data on your electricity consumption and the kinds of advice-based [services](http://www.opower.com/) a lot of utilities have started offering their customers in recent years. As a small non-profit, we aren't concerned with besting these more mature services, but rather trying to learn more about how specific population segments react to a range of different bits of information presented to them. 

Our project introduces a lot of small and subtle tweaks to the way electricity information has traditionally been presented to consumers, but it all starts with that all-too-common foundation we've become so familiar with: the dashbaord. Lots of charts, graphs, and numbers, all replicated in a few different places, from a live website, to regular emails, to paper letters. Our participants get to choose which channel they prefer and we make sure the info gets to them in a readable fashion. 

We have a relatively small pool of participants (less than 100) and they only receive direct communication twice per month, but with 4-6 images apiece, that comes out to 600 images per month on the lowest end of the spectrum. Not fun to create manually, but since we've already got the live dashboard running, why not just build them automatically? 

![monthly-energy]({{ site.baseurl }}img/home-energy.png)

## Making a whole lot of charts

We have a basic user-facing dashboard that builds out a bunch of custom D3 charts based on the user's ID. I had already built out all of the chart functions to accept the user's ID number as a paramter, so it was just a matter of iterating through *all* of the users, building charts for each one, then running some kind of script to convert them from an SVG to an image at a size that was appropriate for email and printed letters. At first I thought I should build and download one chart at a time, but it turned out to be a lot simpler and faster to do them all at once (at least that's what I found based on my limited abilities). 

First, I wrote a little function to build prototype containers for each of my chart types: 

{% highlight javascript %}
function buildPrototypeContainers(thingToAppend) {
            function defineContainers(usr) {
                return  
                '<div id="adminSectionHeader'+ (usr) + '">' + '<h1>' + (usr + 1) + '</h1></div>'+
                '<div id="calendarChart' + (usr) + '" class="calendar-chart"></div>'+
                '<div class="proto-week" id="weekChart' + (usr) + '"></div>'+ 
                '<div class="proto-month" id="monthChart' + (usr) + '"></div>'+ 
                '<div id="applianceChart' + (usr) + '"></div>';
            }
            // create div destination containers w/ unique ID's 
            $('#vizContainer').append( defineContainers(thingToAppend) );
        }
{% endhighlight %}

Next, I wrote a function to take all of my users' data (returned as an array of objects) and run it through my chart-building functions: 

{% highlight javascript %}
function containersIterate(returnedData) {
            dashboardData = returnedData; 
            for (var i = 0; i < returnedData.length; i++ ) {
                    try {
                        buildPrototypeContainers(i);
                        buildWeekChart2(i);
                        buildMonthChart2(i);
                        makeAnApplianceChart(i);
                        makeACalendarChart(i);
                    }
                    catch(e) {
                        $('#errorMessageBlock').append("<span class='user-error'><strong>The following users have encountered errors</strong>: " + (i + 1) + "</span>" + " ");
                    }
                    
                }
        }
{% endhighlight %}

This function includes some error checking so that 1) it doesn't get hung up on the inevitable broken bit of information in our user data and 2) it alerts us when data doesn't look right by popping the offending user ID into the `#errorMessageBlock` div at the very top of the page. 

## Running charts through the PNG factory

So we've got all of our SVG charts in one place, how do we turn them into images? Luckily, I found this *super* handy script, [saveSvgAsPng](https://github.com/exupero/saveSvgAsPng) from GitHub user [exupero](https://github.com/exupero). This script takes an element, output filename, and a few options as arguments and spits out nice PNGs, including all of your CSS formatting. Excellent! To make it work for my project, I just created a little `for` loop to iterate over all of the SVG charts I created in previous step, running the saveSvgAsPng functions at each iteration.

This results in a hillarious flurry of download animations, but it gets the job done! 

![download-fury]({{ site.baseurl }}img/download-fury.gif)

## Gotchas and features

I ran into a few gotchas along the way, some of which have already been addressed in saveSvgAsPng, some of which are easy to work around with a few tweaks. 

#### Scaling inline images

One of our charts uses inline SVG icons, which posed a bit of a problem because saveSvgAsPng recreates the image in its own canvas with its own coordinate system. However, I found that by tweaking the paramters in `ctx.drawImage()` (read more [here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)), I could easily overcome this issue by passing in explicit height and width for the icons I was using. In the future, I'd like to do this programmatically, but since our icon sizes aren't going to change, I'm okay hard-coding their width and height. 

{% highlight javascript %}
img.onload = function() {
        img.width = 300;
        img.height = 300;
        canvas.width = img.width;
        canvas.height = img.height;
        // ctx.drawImage(image, dx, dy, dWidth, dHeight);
        ctx.drawImage(img, 0, 0,330, 280);

        // etc etc...
{% endhighlight %}

#### Scaling the output PNG

saveSvgAsPng has a neat built-in scaling option that you can pass when you call the function. Rather than hard-code it, I decided to give the user the option to choose how to scale the images they download (see the little input box in the gif above). This makes sense for our project because some images may be exported for emails and others for print letters. I wanted to give the person designing the document some flexibility in order to avoid weird pixellation. 2x scaling seemed to work pretty well for our use. 

<img src="{{ site.baseurl }}img/icon-sample-image.png" alt="icon-image-sample" style="padding: 1em; width: 80%;"/>

#### Using external fonts

saveSvgAsPng does a nice job pulling in styles from your CSS, but runs into some trouble with external fonts. At the time of this post, [this was a known issue](https://github.com/exupero/saveSvgAsPng/issues/24) and the recommended workaround is to encode `@font-face` as Base64. I found [this article](http://sosweetcreative.com/2613/font-face-and-base64-data-uri) particularly helpful and followed its advice successfully. 

That's it! My PNG factory is up and running after a bit of trial and error and our project continues to hum along without resorting to manually building 700 individual charts every month. 

