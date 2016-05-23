$(document).ready(function(){
	$('header').sticky({
    	topSpacing: 0
	});


	$('.scroll a').bind("click", function(e) {

    	var anchor = $(this);
    	$('html, body').stop().animate({
        	scrollTop: $(anchor.attr('href')).offset().top
    	}, 1000);
    	e.preventDefault();
	});

	$('.nav a').on('click', function(){
	    $('.navbar-toggle').click();
	});

	$('body').scrollspy({
		target: '.navbar',
		offset: 50
	});



});