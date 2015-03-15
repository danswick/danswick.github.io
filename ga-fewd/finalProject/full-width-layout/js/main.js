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
	});	

// change data displayed on the map





/* --------------------------------------------
hide info drawer when hide button is clicked
----------------------------------------------- */

$('#drawer-button').on('click', function(e){
	e.preventDefault();

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
				left: '-80%'
				}, 200, function() {	
					$('.info-drawer').toggleClass('closed'); // then switch on the 'closed' class
			});
		}

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



