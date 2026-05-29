// JavaScript Document

$(document).ready(function(){
	
	"use strict";
    $("#Coupon").blur(function(){
		$(".error").each(function(){
			if($(this).children().children().html != ''){
				$(this).css("display","block");
			}
		});
    });

	
	$(".btn, .send_btn, .verify .btn_grey").click(function(){
		$(".error").each(function(){
			if($(this).children().children().html != ''){
				$(this).css("display","block");
			}
		});
	});

	//清除錯誤訊息高度
	$(".error").each(function(){
		if($(this).height() == 0){
			$(this).hide();
		}
	});

	//漢堡選單展開收合

	$(".menu_icon").click(function(){
		$("#hamburger").slideToggle();
			if(x > 750){
				$("#m_header").hide();
			}
	});

	$(".quick_link").click(function(){
		$("#hamburger").slideToggle();
	});

	//hamburger圖標
	var acc = $(".accordion_hamburger h2")
	var j;
	for( j = 0; j < acc.length; j++){
		acc[j].onclick = function(){
			this.classList.toggle("active");
		}
	}
});

//漢堡選單展開收合

$(document).ready(function(){
	x=$(window).width();
		if(x < 767){
			$(".accordion_hamburger").accordion({
				heightStyle: "content",
				collapsible:true,
				active:false
			})
			$("#m_header").show();
		}
		
		else{
			$(".accordion_hamburger").accordion({
				  heightStyle: "content",
				  collapsible:false,
				  active:false
			})
			$("#m_header").hide();
		}


	//header高度修正
	if(document.documentElement.offsetWidth-4 < document.documentElement.clientWidth){
		$("body").css("paddingTop","61px");
	}

	//暫時提醒修復
	$('.info').each(function(){
		txt = $(this).text();
		if(txt == '請於10分鐘內回填，以免失效' || txt == '請於 10 分鐘內回填，以免失效'){
			$(this).text('請先點選「發送」取得認證碼，再於10分鐘內回填，以免失效。');
		}else if(txt == 'Your SMS verification  code  will be valid  for  10  minutes.' || txt == 'Your SMS verification  code  will  valid  for  10  minutes.'){
			$(this).text('Click the “Send Code” button to get the verification code. The verification code will be valid for 10 minutes.');
		}else if(txt == 'Kode verifikasi yang dikirim ke ponsel Anda berlaku dalam 10 menit.'){
			$(this).text('Silakan klik tombol “Kirim” untuk mendapatkan kode verifikasi. Kode verifikasi hanya berlaku dalam 10 menit.');
		}else if(txt == 'กรุณากรอกข้อมูลภายใน 10 นาที เพื่อป้องกันการล้มเหลว'){
			$(this).text('โปรดกด "ส่งออก" เพื่อรับรหัสยืนยัน จากนั้นกรอกรหัสยืนยันกลับภายใน 10 นาที ก่อนที่รหัสจะใช้งานไม่ได้');
		}else if(txt == '请于10分钟内回填，以免失效'){
			$(this).text('请先点选「发送」取得认证码，再于10分钟内回填，以免失效。');
		}else if(txt == '當您收到email驗證碼，請於1 小時內完成認證手續，以免驗證碼失效' || txt.match(/當您收到email驗證碼，請於1*/)){
			$(this).text('請先點選「發送」取得認證碼。當您收到email驗證碼，請於1小時內完成認證手續，以免驗證碼失效。');
		}else if(txt == 'Your Email verification code will valid for 1 hour.'){
			$(this).text('Click the “Send Code” button to get the verification code. Your Email verification code will valid for 1 hour.');
		}else if(txt == 'Kode verifikasi yang dikirim ke email Anda berlaku dalam waktu 1 jam.'){
			$(this).text('Silakan klik tombol “Kirim” untuk mendapatkan kode verifikasi. Kode verifikasi yang dikirim ke email Anda berlaku dalam waktu 1 jam.');
		}else if(txt == '当您收到email验证码，请于1小时内完成认证手续，以免验证码失效'){
			$(this).text('请先点选「发送」取得认证码。当您收到email验证码，请于1小时内完成认证手续，以免验证码失效。');
		}else if(txt == 'เมื่อได้รับรหัสยืนยันEmail โปรดทำตามขั้นตอนการตรวจสอบภายใน1ชั่วโมง เพื่อป้องกันไม่ให้รหัสยืนยันกลายเป็นโมฆะ'){
			$(this).text('โปรดกด "ส่งออก" เพื่อรับรหัสยืนยัน เมื่อได้รับรหัสยืนยันEmail โปรดทำตามขั้นตอนการตรวจสอบภายใน1ชั่วโมง เพื่อป้องกันไม่ให้รหัสยืนยันกลายเป็นโมฆะ');
		}
	});

	//暫時領獎專區搜尋圖片修復
	$("#prizezone .searchnotfound .img img").attr("src", "https://service.mycard520.com/wp-content/themes/service/images/cannot_find.png");

	//暫時活動轉址
	const url = window.location.href;
	const des = 'PrizeZone/VirtualResult?ActId=mm2410G08';
	if(url.indexOf(des) >= 0){ 
		setTimeout(function(){ 
			window.location.href = "https://my24.tw/jZK1xX";
		}, 3000);
	}

});