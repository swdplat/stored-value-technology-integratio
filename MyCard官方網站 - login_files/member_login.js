// JavaScript Document

$(document).ready(function() {

    "use strict";

    var language = $('.select_language option:selected').val();

    console.log(language);

    if (language === "zh-hk"){
        language = "zh-tw";
    }else if(language === "ms-my" || language === "en-ph" || language === "en-sg"){
        language = "en-us";
    }

    $(".login_teaching img").attr("src", "https://image.mycard520.com/globalmycard/images/teaching_scan_login01_" + language + ".png");

    $(".push_login_teaching img").attr("src", "https://image.mycard520.com/globalmycard/images/teaching_push_login01_" + language + ".png");

    $("#scan_popup .scan_img").html("<a href='https://image.mycard520.com/mycard_app/download/mycard.apk'><img id='qrimage' src='https://image.mycard520.com/globalmycard/images/scan_login_img.png'></a>");

    //qrcode遮色片
    $("#scan_popup .refresh, #scan_popup .qrcode_mask").click(function() {
        $(".qrcode_mask").hide();
    });

    //點擊推播教學
    $(".login_form .login_teaching_btn").click(function() {
        $(".push_login_teaching , .push_login_teaching_overlay").show();
        $("#login_teaching").css("visibility", "hidden");
        $(".reveal-modal-bg").css("display", "none");
    });

    //點擊掃描登入教學
    $(".scan_box .login_teaching_btn").click(function() {
        $(".login_teaching , .teaching_overlay").show();
        $("#login_teaching").css("visibility", "hidden");
        $(".reveal-modal-bg").css("display", "none");
    });


    //掃描登入教學

    var i = 1;

    $(".login_teaching img , .teaching_overlay").click(function() {

        if (i < 3) {

            i++;
            $(this).each(function() {
                $(".login_teaching img").attr("src", "https://image.mycard520.com/globalmycard/images/teaching_scan_login0" + i + "_" + language + ".png");
            });

        } else {

            $(".login_teaching").hide();
            $(".teaching_overlay").hide();

            i = 1;
            $(this).each(function() {
                $(".login_teaching img").attr("src", "https://image.mycard520.com/globalmycard/images/teaching_scan_login0" + i + "_" + language + ".png");
            });

        }

    });

    //推播登入教學
    var j = 1;

    $(".push_login_teaching img , .push_login_teaching_overlay").click(function() {

        if (j < 4) {

            j++;
            $(this).each(function() {
                $(".push_login_teaching img").attr("src", "https://image.mycard520.com/globalmycard/images/teaching_push_login0" + j + "_" + language + ".png");
            });

        } else {

            $(".push_login_teaching").hide();
            $(".push_login_teaching_overlay").hide();

            j = 1;
            $(this).each(function() {
                $(".push_login_teaching img").attr("src", "https://image.mycard520.com/globalmycard/images/teaching_push_login0" + i + "_" + language + ".png");
            });

        }

    });

});