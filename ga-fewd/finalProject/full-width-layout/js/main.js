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

$('.secondary-nav a').on('click', function(){
	$('.info-drawer section').addClass('hidden');
	$('.secondary-nav div').removeClass('active');

	// Grab appropriate HTML data parameter 
	var relatedPanel = $(this).data('tab');

	// Unhide the panel corresponding to clicked tab
	$('.' + relatedPanel).removeClass('hidden');
	$(this).parent().addClass('active');
	
	// Split coord. string into lat and lng, assign to var
	var splitCoords = ecosystemCenters[relatedPanel].split(',');
	var lat = parseFloat(splitCoords[0]);
	var lng = parseFloat(splitCoords[1]);
	// Get zoom level from object 
	var zoom = ecosystemZooms[relatedPanel];
	//Get tiles to add from object
	var tileAdd = ecosystemTiles[relatedPanel];

	// Call the pan/zoom/tile method for the clicked tab!
	moveToLandscape(lat, lng, zoom, tileAdd);
});	


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
}

$('.drawer-button').on('click', function(e){
	e.preventDefault();
	drawerMove();
});


/* --------------------------------------------
hide or show drawer depending on which element
is current the users' focus
----------------------------------------------- */
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



