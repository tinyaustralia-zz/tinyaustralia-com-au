$(function() {
	var selectedClass = "";
	$(".filter").click(function(){
		selectedClass = $(this).attr("data-rel");
		$("#gallery").fadeTo(100, 0.1);
		$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
			setTimeout(function() {
				$("."+selectedClass).fadeIn().addClass('animation');
				$("#gallery").fadeTo(300, 1);
			}, 300);
	});
});

$(document).ready(function() {
	$('li.active').removeClass('active');
	$('a[href="' + location.pathname + '"]').closest('li').addClass('active'); 
});