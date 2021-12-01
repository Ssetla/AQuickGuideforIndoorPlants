$(document).ready(function() {
					
	// VARIABLES
	var controller1 = new ScrollMagic.Controller();
	var controller2 = new ScrollMagic.Controller();
	var controller3 = new ScrollMagic.Controller();
	var controller4 = new ScrollMagic.Controller();
	// EVENT HANDLERS

	// FUNCTIONS
	


	//Explore button
	$('.button').on('click', function(event){
		event.preventDefault();
		var destination = $(this).attr('href');
	$('html, body').stop(true).animate({
		scrollTop: $(destination).offset().top-0
	}, 1500,'easeInOutExpo');
	$('.navBar').delay(1000).fadeIn(500);
	});

	//Nav scroll 
	$('header a').on('click', function(event){
		event.preventDefault();
		var destination = $(this).attr('href');
	$('html, body').stop(true).animate({
		scrollTop: $(destination).offset().top-0
	}, 1500,'easeInOutExpo');
	});

	//Scroll Magic
	//Section 1
	$('.fadeIn').each(function(){
		var scene = new ScrollMagic.Scene({
			triggerElement: '.fadeIn'
		})
		.setClassToggle('.fadeIn','show')
		.addTo(controller1);
	})
	//Section2
	$('.fadeIn2').each(function(){
		var scene = new ScrollMagic.Scene({
			triggerElement: '.fadeIn2'
		})
		.setClassToggle('.fadeIn2','show')
		.addTo(controller2);
	})

	$('.fadeIn3').each(function(){
		var scene = new ScrollMagic.Scene({
			triggerElement: '.fadeIn3'
		})
		.setClassToggle('.fadeIn3','show')
		.addTo(controller3);
	})

	$('.fadeIn4').each(function(){
		var scene = new ScrollMagic.Scene({
			triggerElement: '.fadeIn4'
		})
		.setClassToggle('.fadeIn4','show')
		.addTo(controller4);
	})

	//Back to the top
	$(document).ready(function() {
			$('#footer').on('click', function(event){
				event.preventDefault();
				var destination = $('#headerPage');
				$('html, body').stop(true).animate({
					scrollTop: $(destination).offset().top-300
				}, 1500,'easeInOutExpo');
			});
		});


	$(".modal").colorbox({rel:'modal'});
	//Start function
	function start(){
		$('.title').delay(1000).fadeIn(1000);
		$('.titleButton').delay(2000).fadeIn(500);
		
	};

	// INITIALIZATION
	start();
	
});