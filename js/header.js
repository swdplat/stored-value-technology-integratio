$(document).ready(function () {
    //遮罩
    $('.overlay').click(function () {
        // 20241004直接隱藏
        $(this).hide();
        //畫面不能滾動
        $('body').removeClass('noslide');
        // 漢堡選單
        $('#ham').removeClass('show');
        $('#ham .ham-category.language ').removeClass('show');
        // 20241001遮罩zindex 增加動畫
        $('#header').css('z-index', '101');
        // $('#header').css('opacity', '0').css('z-index', '100').animate({
        //     opacity: 1
        // }, 300, function () {
        //     $(this).css('z-index', '101');  
        // });
        //搜尋框
        $("#header .header-search").removeClass("show-b");
        $("#header .header-search .header-dropDown").removeClass("show-b");
        //註冊登入
        $('#header .header-login .header-dropDown').removeClass("show-b");
        //mb icon顏色移除
        $('#header .header-search-login .iconBox').removeClass('click');
        //選擇頭像
        $('#quick-electAvatar').removeClass("show-b");
    });

    // 導覽列-下拉選單-
    $('#header .header-navbar .header-item').mouseenter(function () {
        $(this).find('.header-dropDown').addClass('show-f');
    }).mouseleave(function () {
        var li = $(this);
        var menu = li.find('.header-dropDown');
        var timeout;
        var delay = 200;

        timeout = setTimeout(function () {
            if (!li.is(':hover') && !menu.is(':hover')) {
                menu.removeClass('show-f');
            }
        }, delay);
    });

    //漢堡選單-開
    $('#header .icon_menu').click(function () {
        // 20241004 直接出現
        $('.overlay').show();
        $('#ham').addClass('show');
        $('#header').css('z-index', '100');
        $('body').addClass('noslide');
        //mb icon顏色移除
        $('#header .header-search-login .iconBox').removeClass('click');
        //搜尋框移除
        $("#header .header-search").removeClass("show-b");
        $("#header .header-search .header-dropDown").removeClass("show-b");
        //註冊登入移除
        $('#header .header-login .header-dropDown').removeClass("show-b");
    });

    //漢堡選單-關
    $('#ham .ham-menu-btn-close').click(function () {
        // 20241004 直接關閉
        $('.overlay').hide();
        $('#ham').removeClass('show');
        $('#header').css('z-index', '101');
        $('body').removeClass('noslide');
    });

    //漢堡選單-下拉收合
    $('#ham .ham-menu-one .ham-menu-list > .ham-menu-item').click(function () {
        var ul = $(this).find('.ham-menu-second');
        ul.slideToggle(300);
        $(this).find('.icon_down').toggleClass('rotate-180');
        $('#ham .ham-menu-one .ham-menu-list > .ham-menu-item').not(this).find('.ham-menu-second').slideUp(300);
        $('#ham .ham-menu-one .ham-menu-list > .ham-menu-item').not(this).find('.icon_down').removeClass('rotate-180');
    });

    //漢堡選單-語系層
    $('#ham .ham-menu-language').click(function () {
        $('#ham .ham-category.language').addClass('show')
    });
    $('#ham .ham-menu-btn-return').click(function () {
        $('#ham .ham-category.language').removeClass('show')
    });

    // 搜尋框-pc開
    $("#header .header-search .inputBox input.text").click(function (e) {
        e.stopPropagation();
        $("#header .header-search .header-search-box").addClass("border");
        $("#header .header-search .header-dropDown").addClass("show-b");
        //旁邊其他下拉關閉-註冊登入
        $('#header .header-login .header-dropDown').removeClass("show-b");
        //旁邊其他下拉關閉-已登入會員
        $('#member_menu').removeClass("show-b");

        // 搜尋框-點擊其他區域關閉
        $(document).on("click", function (e) {
            if (!$(e.target).closest(".header-search").length) {
                $("#header .header-search .header-search-box").removeClass("border");
                $("#header .header-search .header-dropDown").removeClass("show-b");
            }
        });
    });

    // 搜尋框-mb開
    // $("#header .header-search-mb").click(function(e) {

    //     if (!$('.overlay').is(':visible')) { // 檢查 overlay 是否可見
    //         $('.overlay').toggle();
    //     } else if (!$('#header .header-login-mb .iconBox').hasClass('click')) { // 如果 overlay 可見且註冊登入下拉選單沒有展開，則關閉它
    //         $('.overlay').toggle();
    //     }

    //     setTimeout(function() {
    //         $("#header #inputSearch").focus();
    //         $("#header .header-search .header-search-box").addClass("border");
    //     }, 300); // 延遲300毫秒觸發焦點
    //     if ($(window).width() < 768) {
    //         e.stopPropagation();
    //         $('body').addClass('noslide');
    //         $("#header .header-search").toggleClass("show-b");
    //         $("#header .header-search .header-dropDown").toggleClass("show-b");
    //         // 旁邊其他下拉關閉-已登入會員
    //         $('#header .header-login .header-dropDown').removeClass("show-b");
    //         $('#header .iconBox').removeClass('click');
    //         $('#header .header-search-mb .iconBox').addClass('click');
    //     }
    // });
    // 當點擊搜索圖標時顯示搜索框
    $("#header .header-search-mb").click(function (e) {
        if (!$('.overlay').is(':visible')) { // 檢查 overlay 是否可見
            $('.overlay').toggle();
        } else if (!$('#header .header-login-mb .iconBox').hasClass('click')) { // 如果 overlay 可見且註冊登入下拉選單沒有展開，則關閉它
            $('.overlay').toggle();
        }

        setTimeout(function () {
            $("#header #inputSearch").focus();
            $("#header .header-search .header-search-box").addClass("border");
        }, 300); // 延遲300毫秒觸發焦點

        if ($(window).width() < 768) {
            e.stopPropagation();
            $('body').addClass('noslide');
            $("#header .header-search").toggleClass("show-b");
            $("#header .header-search .header-dropDown").toggleClass("show-b");
            // 旁邊其他下拉關閉-已登入會員
            $('#header .header-login .header-dropDown').removeClass("show-b");

            // 如果點擊同一個目標重複時，移除 .click 類別
            if ($('#header .header-search-mb .iconBox').hasClass('click')) {
                $('#header .header-search-mb .iconBox').removeClass('click');
                /*20241231-處理重複點擊背景要可以滑動的問題*/
                $('body').removeClass('noslide');
            } else {
                $('#header .iconBox').removeClass('click');
                $('#header .header-search-mb .iconBox').addClass('click');
            }
        }
    });

    // 註冊登入-mb開
    $('#header .header-login-mb').click(function (e) {
        if (!$('.overlay').is(':visible')) { // 檢查 overlay 是否可見
            $('.overlay').toggle();
        } else if (!$('#header .header-search-mb .iconBox').hasClass('click')) { // 如果 overlay 可見且搜尋框下拉選單沒有展開，則關閉它
            $('.overlay').toggle();
        }

        if ($(window).width() < 768) {
            //旁邊其他下拉關閉-搜尋框
            $('body').addClass('noslide');
            $('#header .header-login .header-dropDown').toggleClass("show-b");
            $('#header .header-search').removeClass("show-b");

            // 如果點擊同一個目標重複時，移除 .click 類別
            if ($('#header .header-login-mb .iconBox').hasClass('click')) {
                $('#header .header-login-mb .iconBox').removeClass('click');
                $('body').removeClass('noslide');
            } else {
                $('#header .iconBox').removeClass('click');
                $('#header .header-login-mb .iconBox').addClass('click');
            }
        }
    });


    // 註冊登入-pc開
    $('#header .header-login .header-login-icon').click(function (e) {
        e.stopPropagation();
        $('#header .header-login .header-dropDown').toggleClass("show-b");
        //旁邊其他下拉關閉-搜尋框
        $('#header .header-search .header-dropDown').removeClass("show-b");
        //旁邊其他下拉關閉-已登入會員
        $('#member_menu').removeClass("show-b");

        //註冊登入-點擊其他區域關閉
        $(document).on("click", function (e) {
            if (!$(e.target).closest(".login").length) {
                $("#header .header-login .header-dropDown").removeClass("show-b");
            }
        });
    });

    // 註冊登入-mb開
    // $('#header .header-login-mb').click(function(e){

    //     if (!$('.overlay').is(':visible')) { // 檢查 overlay 是否可見
    //         $('.overlay').toggle();
    //     } else if (!$('#header .header-search-mb .iconBox').hasClass('click')) { // 如果 overlay 可見且搜尋框下拉選單沒有展開，則關閉它
    //         $('.overlay').toggle();
    //     }

    //     if ($(window).width() < 768) {
    //         //旁邊其他下拉關閉-搜尋框
    //         $('body').addClass('noslide');
    //         $('#header .header-login .header-dropDown').toggleClass("show-b");
    //         $('#header .header-search').removeClass("show-b");
    //         $('#header .iconBox').removeClass('click');
    //         $('#header .header-login-mb .iconBox').addClass('click');
    //     }
    // });

    //搜尋框-輪播文字
    var textJumpSwiper = new Swiper(".textJumpSwiper", {
        direction: "vertical",
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
    });

    $('.header-search .inputBox .text').on('input', function () {
        var searchText = $(this).val().trim();
        $('.header-search .inputBox .textJump').toggle(searchText === '');

        // 如果搜索框為空，啟動輪播；否則停止輪播
        if (searchText === '') {
            textJumpSwiper.autoplay.start();
        } else {
            textJumpSwiper.autoplay.stop();
        }
    });




    //已登入會員-STR
    $('.header-login-face').click(function (e) {
        e.stopPropagation();
        $('#member_menu').toggleClass('show-b');
        //旁邊其他下拉關閉-搜尋框
        $('#header .header-search .header-dropDown').removeClass("show-b");
        //旁邊其他下拉關閉-註冊登入
        $('#header .header-login .header-dropDown').removeClass("show-b");

        //已登入會員-點擊其他區域關閉

        // 20241001 點擊 .menu-touchbar 關閉 quick
        $(document).click(function (e) {
            if (!$(e.target).closest('.loginFace').length &&
                !$(e.target).closest('#member_menu').length &&
                !$(e.target).closest('.menu-touchbar').length) {
                $('#member_menu').removeClass('show-b');
            } else if ($(e.target).closest('#member_menu a, #member_menu input').length ||
                $(e.target).closest('.menu-touchbar').length) {
                $('#member_menu').removeClass('show-b');
            }
        });

        if ($(window).width() < 768) {
            $('body').addClass('noslide');
            // 20241004 速度100
            $('.overlay').fadeIn(100);
            $('#header').css('z-index', '100');
            $('#member_menu').css('z-index', '201');
            //旁邊其他下拉關閉-搜尋框
            $('#header .header-search').removeClass("show-b");
            $('#header .header-search-login .iconBox').removeClass('click');
        }
    });
    // 20241001 點擊 .menu-touchbar 關閉 quick end

    // 20241001 點擊 .menu-touchbar 關閉 quick
    $('.overlay-two,#share .btn_close,#member_portrait .btn_close,.menu-touchbar').click(function () {
        $('body').removeClass('noslide');
        $('.overlay').hide();
        $('.my-overlay').removeClass('show-b');
        $('#share').removeClass('show-b');
        $('#header').css('z-index', '101');
        $('#member_portrait').fadeOut();

    });
    // 20241001 點擊 .menu-touchbar 關閉 quick end

    //quick分享專屬碼
    $('#member_menu .share,.sideBar .share').click(function () {
        $('.overlay-two').addClass('show-b');
        $('#share').addClass('show-b');
        $('body').addClass('noslide');
    });

    //quick複製卡密
    function copyTxt(txt) {
        var $temp = $("<input class='copy_append'>");
        // $("body").append($temp);
        $temp.val(txt).select();
        document.execCommand('copy');
    }

    $(window).on('load', function () {
        $('.member_num .share').click(function () {
            $('#share').reveal({ animation: "fade", revealId: "share" });
        });

        $('.copy_btn').click(function () {
            var txt = $(this).prev().val();
            copyTxt(txt);
            alert('邀請碼已複製');
        });

    });

    //quick設定頭像
    $('.portrait, #member .photo_group img').on('click', function () {
        $('#member_portrait').fadeIn(); // 或者使用 .show() 函數
        $('.overlay-two').addClass('show-b');
        $('body').addClass('noslide');
        $('#member_menu').removeClass('show-b');
    });

    //
    $('#myPortraitLoading').hide();
    $('.portrait').click(function () {
        $('#myPortraitError').hide();
        $('#member_portrait #myPortrait').reveal({ animation: "fade", revealId: "myPortrait" });
    });

    //
    $('#portraitImg').click(function () {
        $('#myPortraitError').hide();
        $('#member_portrait #myPortrait').reveal({ animation: "fade", revealId: "myPortrait" });
    });
    $('#myPortrait .btn_blue').click(function () {
        $('#myPortrait .tbx_blue').click();
    });
    $('#myPortrait .tbx_blue').change(function () {
        $('#myPortraitError').hide();
        $('#myPortraitErrorMessage').empty();
        var file = this.files[0];
        this.value = '';
        if (!file || file.size < 1 || file.size > 1048576) {
            $('#myPortraitErrorMessage').text('頭像檔案大小不正確');
            $('#myPortraitError').show();
            return;
        }
        if (file.type != 'image/jpeg' && file.type != 'image/gif' && file.type != 'image/png' && file.type != 'image/bmp') {
            $('#myPortraitErrorMessage').text('頭像格式不正確');
            $('#myPortraitError').show();
            return;
        }
        var reader = new FileReader();
        reader.onload = function () {
            var image = new Image();
            image.onload = function () {
                if (this.height < 140 || this.width < 140) {
                    $('#myPortraitErrorMessage').text('頭像高度或寬度不正確');
                    $('#myPortraitError').show();
                    return;
                }
                $.ajax('/zh-tw/Centre/Save', {
                    beforeSend: function (controller, settings) {
                        $('#myPortraitLoading').show();
                        $('#myPortraitError').hide();
                        $('#myPortraitErrorMessage').empty();
                    },
                    data: {
                        stringData: reader.result
                    },
                    dataType: 'json',
                    type: 'POST'
                }).done(function (data, textStatus, jqXHR) {
                    try {
                        if (data.IsSuccess) {
                            window.location.reload(false);
                        }
                        else {
                            $('#myPortraitErrorMessage').text('(' + data.Error.Code + ')' + data.Error.Desription);
                            $('#myPortraitError').show();
                            $('#myPortraitLoading').hide();
                        }
                    }
                    catch (e) {
                        $('#myPortraitErrorMessage').text('發生未處理的例外');
                        $('#myPortraitError').show();
                        $('#myPortraitLoading').hide();
                    }
                }).fail(function (jqXHR, textStatus, errorThrown) {
                    $('#myPortraitErrorMessage').text('傳輸過程發生錯誤：' + textStatus);
                    $('#myPortraitError').show();
                    $('#myPortraitLoading').hide();
                });
            };
            image.onerror = function () {
                $('#myPortraitErrorMessage').text('無法讀取不相容的圖片檔案');
                $('#myPortraitError').show();
            };
            image.src = reader.result;
        };
        reader.readAsDataURL(file);
    })
});
