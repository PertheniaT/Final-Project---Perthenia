function openNav() {
    document.getElementById("nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav").style.width = "0%";
};

$(document).ready(function() {

	// var #profile-picture = $('#profile-picture')


	// waypoint triggered and element fades in
	$('.fade-right').waypoint(function() {
	    $(this.element).addClass('fadeInRight');
	}, {
		offset: '70%'
	});

	$('.fade-left').waypoint(function() {
	    $(this.element).addClass('fadeInLeft');
	}, {
		offset: '70%'
	});

	 // add waypoint and animate fade up to h2
	$('.fade-up').waypoint(function() {
	    $(this.element).addClass('fadeInUp');
	}, {
		offset: '80%'
	});

	// $('.fade-up').waypoint(function() {
	//     $(this.element).addClass('fadeInUp');
	// }, {
	// 	offset: '70%'
	// });

});

	// slick slider
	$('.slick-slider').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});


  


