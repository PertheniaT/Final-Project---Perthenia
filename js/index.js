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

});


