/* --------------------------------------------
check for URL hash and activate correct content
----------------------------------------------- */

var hash = window.location.hash;

var hashClass = hash.replace('#', '');

if(hash != ''){
	var selectionString = '.secondary-nav .' + hashClass;
	setTimeout(function(){
		$(selectionString).find('a').trigger('click');
	}, 10);
};


/* --------------------------------------------
switch content when content nav buttons are clicked
----------------------------------------------- */

// change content in info window
	$('.secondary-nav a').on('click', function(){
		$('.info-drawer section').addClass('hidden');
		$('.secondary-nav div').removeClass('active');

		
		var relatedPanel = $(this).data('tab');
		console.log("clicked on " + relatedPanel + " link");

		$('.' + relatedPanel).removeClass('hidden');
		$(this).parent().addClass('active');
		
/*
		// scrolltop insanity
		var sectionHeight = $('section' + '.' + relatedPanel).offset().top;
		console.log('sectionHeight= ' + sectionHeight);
		var headerHeight = $('header').outerHeight();
		var secondaryNavHeight = $('.secondary-nav').outerHeight();
		$('.info-drawer').scrollTop(sectionHeight - headerHeight - secondaryNavHeight);
		console.log(sectionHeight - headerHeight - secondaryNavHeight);*/
		var splitCoords = ecosystemCenters[relatedPanel].split(',');
		var lat = parseFloat(splitCoords[0]);
		var lng = parseFloat(splitCoords[1]);
		var zoom = ecosystemZooms[relatedPanel];
		var tileAdd = ecosystemTiles[relatedPanel];

		moveToLandscape(lat, lng, zoom, tileAdd);
	});	

// change data displayed on the map





/* --------------------------------------------
hide info drawer when hide button is clicked
----------------------------------------------- */

function drawerMove(){

	$('.info-drawer').toggleClass('closed');
	$('.drawer-button').toggleClass('button-closed');

	if($('.info-drawer').hasClass('closed')) {
		$('.drawer-button a').html('&rsaquo;');
	} else {
		$('.drawer-button a').html('&lsaquo;');
	}

	/*
	var viewportWidth = $(window).width();
	if($('.info-drawer').hasClass('closed')){ // if it is 'closed' when clicked
		$('#drawer-button a').html('&lsaquo;'); // switch to the 'open' char
		$('.info-drawer').animate({ // open it on up!
			left: '0%'
			}, 200, function() {	
				$('.info-drawer').toggleClass('closed'); // then switch off the 'closed' class
		});
	} else { // if it isn't closed
		$('#drawer-button a').html('&rsaquo;'); // switch to the 'closed' char
		
		if(viewportWidth > 1000) {
			$('.info-drawer').animate({ // shut it down!
				left: '-40%'
				}, 200, function() {	
					$('.info-drawer').toggleClass('closed'); // then switch on the 'closed' class
			});
		} else if(viewportWidth > 600) {
			$('.info-drawer').animate({ // shut it down!
				left: '-65%'
				}, 200, function() {	
					$('.info-drawer').toggleClass('closed'); // then switch on the 'closed' class
			});
		} else {
			$('.info-drawer').animate({ // shut it down!
				left: '-77%'
				}, 200, function() {	
					$('.info-drawer').toggleClass('closed'); // then switch on the 'closed' class
			});
		}
	}*/
}

$('.drawer-button').on('click', function(e){
	e.preventDefault();
	drawerMove();
});

$('#leaflet-map').focus(function(e){
	e.preventDefault();
	
	if(!$('.info-drawer').hasClass('closed')){
		$('.info-drawer').addClass('closed');
		$('.drawer-button').addClass('button-closed');
		$('.drawer-button a').html('&rsaquo;');
	}
});

$('.info-drawer').focus(function(e){
	e.preventDefault();
	if($('.info-drawer').hasClass('closed')){
		$('.info-drawer').removeClass('closed');
		$('.drawer-button').removeClass('button-closed');
		$('.drawer-button a').html('&lsaquo;');
	}
});

/*$('#leaflet-map').blur(function(e){
	e.preventDefault();
	drawerMove();
});*/

/* --------------------------------------------
hamburger nav nonsense
----------------------------------------------- */

$('#nav-toggle').on('click', function(){
	if(!$('#nav-toggle').hasClass('nav-active')){
		$(this).toggleClass('nav-active');
		$('.primary-nav').css('display', 'block');
	} else {
		$(this).toggleClass('nav-active');
		$('.primary-nav').css('display', 'none');
	}
});



