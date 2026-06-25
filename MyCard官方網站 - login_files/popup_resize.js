// JavaScript Document

$(window).on('load', function(){

"use strict";

	//跳窗
	
	$(".reveal-modal").each(function(){
  		var h = $(this).height()/2;
  		$(this).css("margin-top",-h);
	});

	var wh = $(window).width();

	var large_popup_h;
	large_popup_h = ($(".large_popup").height())/2;

	if (wh < 768) {
		$(".large_popup").css("top","2%")
					     .css("margin-top",0);

	}else{
		$(".large_popup").css("margin-top",-large_popup_h);
	}	

});

