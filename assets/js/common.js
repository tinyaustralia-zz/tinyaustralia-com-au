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

//set active navigation after click
$(".nav-link").on("click", (event) => {
  $(".navbar-nav").find(".active").removeClass('active');
  $(event.target).parent().addClass('active');
});