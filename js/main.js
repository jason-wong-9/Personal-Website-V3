$(document).ready(function(){
	$('header').sticky({
    	topSpacing: 0
	});


	$('.nav a').bind("click", function(e) {

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


	// $('#type li').on('click', function(){
	// 	var types = ["ALL", "Personal", "Hackathon"];
	// 	var index = types.indexOf($(this).html());
	// 	var content = [
	// 		'<div class="col-md-4 col-sm-6 thumbnail">' + 
	// 			'<img src="img/cube-field/cube-field-0.png" onmouseover="this.src=\'img/cube-field/cube-field-1.png\'" onmouseout="this.src=\'img/cube-field/cube-field-0.png\'"/>' +
	// 		'</div>' +
	// 		'<div class="col-md-4 col-sm-6 thumbnail">' +
	// 			'<img src="img/letschill/Lets Chill.png" onmouseover="this.src=\'img/letschill/Lets Chill1.png\'" onmouseout="this.src=\'img/letschill/Lets Chill.png\'"/>' +
	// 		'</div>' +
	// 		'<div class="col-md-4 col-sm-6 thumbnail nomargin">' +
	// 			'<img src="img/mycfl/MyCFL.png" onmouseover="this.src=\'img/mycfl/MyCFL1.png\'" onmouseout="this.src=\'img/mycfl/MyCFL.png\'"/>' +
	// 		'</div>' +
	// 		'<div class="col-md-4 col-sm-6 thumbnail">' +
	// 			'<img src="img/moscrop/Moscrop.png" onmouseover="this.src=\'img/moscrop/Moscrop1.png\'" onmouseout="this.src=\'img/moscrop/Moscrop.png\'"/>' +
	// 		'</div>' +
	// 		'<div class="col-md-4 col-sm-6 thumbnail">' +
	// 			'<img src="img/course-watcher/Course Watcher.png" onmouseover="this.src=\'img/course-watcher/Course Watcher_1.png\'" onmouseout="this.src=\'img/course-watcher/Course Watcher.png\'"/>' +
	// 		'</div>' +
	// 		'<div class="col-md-4 col-sm-6 thumbnail nomargin">' +
	// 			'<img src="img/mind-the-gap/Mind the Gap.png" onmouseover="this.src=\'img/mind-the-gap/Mind the Gap1.png\'" onmouseout="this.src=\'img/mind-the-gap/Mind the Gap.png\'"/>' +
	// 		'</div>',


	// 		'<div class="col-md-6 col-sm-6 thumbnail">' +
	// 			'<img src="img/moscrop/Moscrop.png" onmouseover="this.src=\'img/moscrop/Moscrop1.png\'" onmouseout="this.src=\'img/moscrop/Moscrop.png\'"/>' +
	// 		'</div>' +
	// 		'<div class="col-md-6 col-sm-6 thumbnail nomargin">' +
	// 			'<img src="img/course-watcher/Course Watcher.png" onmouseover="this.src=\'img/course-watcher/Course Watcher_1.png\'" onmouseout="this.src=\'img/course-watcher/Course Watcher.png\'"/>' +
	// 		'</div>',
			
	// 		'<div class="col-md-4 col-sm-6 thumbnail">' + 
	// 			'<img src="img/cube-field/cube-field-0.png" onmouseover="this.src=\'img/cube-field/cube-field-1.png\'" onmouseout="this.src=\'img/cube-field/cube-field-0.png\'"/>' +
	// 		'</div>' +
	// 		'<div class="col-md-4 col-sm-6 thumbnail">' +
	// 			'<img src="img/letschill/Lets Chill.png" onmouseover="this.src=\'img/letschill/Lets Chill1.png\'" onmouseout="this.src=\'img/letschill/Lets Chill.png\'"/>' +
	// 		'</div>' +
	// 		'<div class="col-md-4 col-sm-6 thumbnail nomargin">' +
	// 			'<img src="img/mycfl/MyCFL.png" onmouseover="this.src=\'img/mycfl/MyCFL1.png\'" onmouseout="this.src=\'img/mycfl/MyCFL.png\'"/>' +
	// 		'</div>'

	// 		// '<div class="col-md-4 col-sm-6 thumbnail">' +
	// 		// 	'<img src="img/mind-the-gap/Mind the Gap.png" onmouseover="this.src=\'img/mind-the-gap/Mind the Gap1.png\'" onmouseout="this.src=\'img/mind-the-gap/Mind the Gap.png\'"/>' +
	// 		// '</div>'			
	// 	];

	// 	if (!($(this).hasClass('active'))) {
	// 		$('#type li').removeClass('active');
	//     	$(this).addClass('active');
	//     	$('#projectcontent').html(content[index])
	// 	}
	// });


});