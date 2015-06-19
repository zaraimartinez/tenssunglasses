  $(window).scroll(function() {
  	var menu= $(this).scrollTop();
  	if (menu > 50){
  		$(".navbar").addClass("scroll");
  	}
    // if ($(window).scrollTop() > ($(window).height() - 10)) {
    else if (menu < 50){
      $(".navbar").removeClass("scroll");
    }

  });