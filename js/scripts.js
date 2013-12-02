/* ---------------------------------------------------------------------- */
/*	LOADER
/* ---------------------------------------------------------------------- */
$(window).load(function() {
	"use strict";
	$("#loading").fadeOut("1000", function() {
	// Animation complete
		$('#loading img').css("display","none");
		$('#loading').css("display","none");
		$('#loading').css("background","none");
		$('#loading').css("width","0");
		$('#loading').css("height","0");
	});
	$("#part1").attr('class', 'fadein_1');
	$("#part2").attr('class', 'fadein_2');
	$("#part2_1").attr('class', 'fadein_2_1');
	$("#part2_2").attr('class', 'fadein_2_2');
	$("#part3").attr('class', 'fadein_3');
});

$(document).ready(function(){
	"use strict";
	/* ---------------------------------------------------------------------- */
	/*	DIV HOME POSITION
	/* ---------------------------------------------------------------------- */
	
	var windowHeight = $(window).height();
	var homepageHeight = $('#home').height();
	
	if (windowHeight >= homepageHeight){
		$('#home').css("margin-top", ((windowHeight-homepageHeight))/2);
	}	

	$(window).resize(function() {		
		var windowHeight = $(window).height();
		var homepageHeight = $('#home').height();
		
		if (windowHeight >= homepageHeight){
			$('#home').css("margin-top", ((windowHeight-homepageHeight))/2);			
		}	
	});
	
	/* ---------------------------------------------------------------------- */
	/*	MAP HEIGHT & CANVAS
	/* ---------------------------------------------------------------------- */
	
	if (windowHeight >= homepageHeight){
		$('.map-content').css("height", (windowHeight));
		$('.map-content').css("margin-top", (windowHeight));
		$('#canvas').css("height", (windowHeight));
	} else{
		$('.map-content').css("height", (homepageHeight));
		$('.map-content').css("margin-top", (homepageHeight+50));
		$('#canvas').css("height", (homepageHeight));
	}
	
	$(window).resize(function() {
		var windowHeight = $(window).height();
		var homepageHeight = $('#home').height();
		
		if (windowHeight >= homepageHeight){
			$('.map-content').css("height", (windowHeight));
			$('.map-content').css("margin-top", (windowHeight));
			$('#canvas').css("height", (windowHeight));
		} else{
			$('.map-content').css("height", (homepageHeight));
			$('.map-content').css("margin-top", (homepageHeight+50));
			$('#canvas').css("height", (homepageHeight));
		}
	});
	
	/* ---------------------------------------------------------------------- */
	/*  DIV CONTACTFORM POSITION
	/* ---------------------------------------------------------------------- */
	
	var footerHeight = $('.footer').height();
	var contactHeight = $('.contact').height();
	var windowtWidth = $(window).width();
	var mapContentHeight = $('.map-content').height();
	
	if (windowtWidth >= 478){
		var difference = mapContentHeight - footerHeight;
		$('.contact').css("top", ((difference-contactHeight)/2));
	} else{
		$('.contact').css("top", '0');
	}
	
	$(window).resize(function() {
		var footerHeight = $('.footer').height();
		var contactHeight = $('.contact').height();
		var windowtWidth = $(window).width();
		var mapContentHeight = $('.map-content').height();
		
		if (windowtWidth >= 478){
			var difference = mapContentHeight - footerHeight;
			$('.contact').css("top", ((difference-contactHeight)/2));
		} else{
			$('.contact').css("top", '0');
		}
	});
	
	/* ---------------------------------------------------------------------- */
	/*	SCROLL MEET-US
	/* ---------------------------------------------------------------------- */
	
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	if (windowWidth <= 480){
		$('.meet-us').css("height", (windowHeight-70));
	}
	
	/* ---------------------------------------------------------------------- */
	/*	SCROLL PAGE WITH EASING EFFECT
	/* ---------------------------------------------------------------------- */
    
	$('#link-map').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(target, 750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	});
	
	$('#home-top').bind('click', function(e) {
		e.preventDefault();
	    $.scrollTo(0, 750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	})
	
	/* ---------------------------------------------------------------------- */
	/*	TEXT EFFECTS
	/* ---------------------------------------------------------------------- */
	
	$(window).scroll(function(){
		var windowHeight = $(window).height();
		var homepageHeight = $('#home').height();
		
		  // get the height of #wrap
		  var h = $(window).height();
		  var y = $(window).scrollTop();
		  
		  if (windowHeight >= homepageHeight){
			  var altura1 = h*.15;
		  }else{
			  var altura1 = h*.75;
		  }
		  
		  if ( y > altura1 ){
			  $("#part1").attr('class', 'fadeout_1');
			  $("#part2").attr('class', 'fadeout_2');
			  $("#part2_1").attr('class', 'fadeout_2_1');
			  $("#part2_2").attr('class', 'fadeout_2_2');
			  $("#part3").attr('class', 'fadeout_3');
		  } else{
			  $("#part1").attr('class', 'fadein_1');
			  $("#part2").attr('class', 'fadein_2');
			  $("#part2_1").attr('class', 'fadein_2_1');
			  $("#part2_2").attr('class', 'fadein_2_2');
			  $("#part3").attr('class', 'fadein_3');
		  } 
		  
		  if ( y < (h*.75) ){
			  $("#part4").attr('class', 'fadeout_4');
			  $("#part5_1").attr('class', 'fadeout_5_1');
			  $("#part5_2").attr('class', 'fadeout_5_2');
			  $("#part5_3").attr('class', 'fadeout_5_3');
			  $("#part5_4").attr('class', 'fadeout_5_4');
		  } else{
			  $("#part4").attr('class', 'fadein_4');
			  $("#part5_1").attr('class', 'fadein_5_1');
			  $("#part5_2").attr('class', 'fadein_5_2');
			  $("#part5_3").attr('class', 'fadein_5_3');
			  $("#part5_4").attr('class', 'fadein_5_4');
		  } 
		  
		  if ( y < h ){
			  $("#part6").attr('class', 'fadeout_6');
		  } else{
			  $("#part6").attr('class', 'fadein_6');
		  }
		 
	 });
		
	/* ---------------------------------------------------------------------- */
	/*	COUNTDOWN
	/* ---------------------------------------------------------------------- */
	var now = new Date();
	var date = new Date('2013','12','11');
	var difference = date - now - (30*24*60*60*1000); //fix a gap of 30 days
	var countTo = difference + now.valueOf();
	//var countTo = 25 * 24 * 60 * 60 * 1000 + now.valueOf();
	$('.timer').countdown(countTo, function(event) {
		var $this = $(this);
		switch(event.type) {
			case "seconds":
			case "minutes":
			case "hours":
			case "days":
			case "weeks":
			case "daysLeft":
				$this.find('span.'+event.type).html(event.value);
				break;
			case "finished":
				$this.hide();
				break;
		}
	});
	
	/* ---------------------------------------------------------------------- */
	/*	SUSCRIPTION FORM
	/* ---------------------------------------------------------------------- */

    $('.success-message').hide();
    $('.error-message').hide();

    $('.subscribe form').submit(function() {
        var postdata = $('.subscribe form').serialize();
        $.ajax({
            type: 'POST',
            url: 'php/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.error-message').fadeIn();
                }
                else {
                    $('.error-message').hide();
                    $('.success-message').hide();
                    $('.subscribe form').hide();
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn();
                }
            }
        });
        return false;
    });
	
	/* ---------------------------------------------------------------------- */
	/*	CONTACT FORM
	/* ---------------------------------------------------------------------- */

	// Needed variables
	var $contactform 	= $('#contactform'),
		$success		= 'Your message has been sent. Thank you!';
	
	$contactform.submit(function(){
		$.ajax({
			type: "POST",
			url: "php/contact.php",
			data: $(this).serialize(),
			success: function(msg)
			{
				if(msg == 'SEND'){
					var response = '<div class="success">'+ $success +'</div>';
				}
				else{
					var response = '<div class="error">'+ msg +'</div>';
				}
				// Hide any previous response text
				$(".error,.success").remove();
				// Show response message
				$contactform.prepend(response);
			}
		});
		return false;
	});

	/* ---------------------------------------------------------------------- */
	/*	GOOGLE MAPS
	/* ---------------------------------------------------------------------- */

	// Needed variables
	var $map 				= $('#map'),
		$address 			= 'Paseo de la Castellana, 1, 28046, Madrid'; //Here, you put your adress

		$map.gMap({
			address: $address,
			zoom: 14,
			scrollwheel: false,
		    navigationControl: false,
		    mapTypeControl: false,
		    scaleControl: false,
		    draggable: false,
		    mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		
	/* ---------------------------------------------------------------------- */
	/*  TOOLTIP
	/* ---------------------------------------------------------------------- */
	
	$('.footer-social a').tooltip();
			
});
