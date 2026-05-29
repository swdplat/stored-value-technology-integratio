// JavaScript Document

$(document).ready(function(){

	"use strict";
	
	
	//同意上述事項繼續購買，一鍵打勾
	//$(".btn").click(function() {
	//	$("#check1, #check2, #check3").attr("checked", true);
	//});
	
	//提醒
	$(".member_remind_close_btn").mouseover(function(){
		$(this).rotate({animateTo:90});
	});
	
	$(".member_remind_close_btn").mouseout(function(){
	   $(this).rotate({animateTo:0});
	});
						   
	$(".member_remind_close_btn").click(function(){
		$(".member_remind").addClass("animated zoomOut");
		$(".member_remind").fadeOut();
		$("#mycard_payment .content").addClass("animated fadeInUp");
	});
	
	//提醒
	$(".member_event_close_btn").mouseover(function(){
		$(this).rotate({animateTo:90});
	});
	
	$(".member_event_close_btn").mouseout(function(){
	   $(this).rotate({animateTo:0});
	});
						   
	$(".member_event_close_btn").click(function(){
		$(".member_event").addClass("animated zoomOut");
		$(".member_event").fadeOut();
		$("#mycard_payment .content").addClass("animated fadeInUp");
	});

	$("#mycard_payment .payment_select li.more").prevAll().click(function(){
        $(".payment_select li.more").prevAll().removeClass("now");
        $(".payment_select li.more").removeClass("now");
        $(this).addClass("now");
        $(".more_area").fadeOut();
    });

    $("#mycard_payment .payment_select .more").on("click", function(){
        if($(".more_area").is(":visible") !== true){
            $(".payment_select li.more").prevAll().removeClass("now");
            $(this).addClass("now");
            $(".more_area").fadeIn();
        }
    });

    $("#mycard_payment .payment_select .more_area li").on("click", function(){
        $(".more_area").fadeOut();
    });

	/*點數卡儲值頁*/
	$('.prompt_btn').click(function(){
		$('.special_code_tip').fadeIn();
	});

	$('.special_code_tip span').click(function(){
		$('.special_code_tip').fadeOut();
	});

	/*會員扣點頁*/
	
	$('.app_btn').click(function(){
		$('.options_btn').removeClass("now");
		$('.app_btn').addClass("now");
		$('.mycard_app').show();
		$('.login').hide();
	});

	$('.login_btn').click(function(){
		$('.options_btn').removeClass("now");
		$('.login_btn').addClass("now");
		$('.login').show();
		$('.mycard_app').hide();
	});

	 //跳窗
	 $('#myModal').reveal({animation: "fade", revealId: "myModal"});
	
	/*點數卡儲值頁和會員扣點頁-輪播*/
	var slider = $('.bxslider').bxSlider({								   
		slideWidth:1140,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		pager: false,/*圓圈圈*/
		auto: true,
		responsive: true,
		pause: 3000,
	});

	$("#insufficient_balance .payment_select .list li").click(function(){
		$("#insufficient_balance .payment_select .list li").removeClass("active");
		$(this).addClass("active");
	});

});
