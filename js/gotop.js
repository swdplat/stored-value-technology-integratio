$(document).ready(function(){ 
	$(window).scroll(function(){
		if($(this).scrollTop() > 150){
			$("#gotop").fadeIn();
		} else {
			$("#gotop").fadeOut();
		}
	});
		$("#gotop").click(function(){
		$("html,body").animate({scrollTop:0},400);
    });
});	