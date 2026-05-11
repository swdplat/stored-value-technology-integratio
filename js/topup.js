$(document).ready(function () {
    // 點擊 #btn-modal-next 時
    $('.btn-modal-next').on('click', function () {
        $('.my-floating-state')
            .stop(true, true)  // 停止任何正在進行的動畫
            .hide()            // 先隱藏元素，確保初始時不可見
            .removeClass('my-d-none')  // 移除 my-d-none 類，讓元素顯示
            .fadeIn(1000)      // 逐漸顯示，持續 1 秒
            .delay(2000)       // 顯示 2 秒
            .fadeOut(1000, function () {  // 淡出動畫，持續 1 秒
                $(this).addClass('my-d-none');  // 動畫結束後，添加 my-d-none 類，隱藏元素
        });
    });

    // 點擊 #btn-checkout-next 時
    $('.btn-checkout-next').on('click', function () {
        $('.my-floating-state')
            .stop(true, true)  // 停止任何正在進行的動畫
            .hide()            // 先隱藏元素，確保初始時不可見
            .removeClass('my-d-none')  // 移除 my-d-none 類，讓元素顯示
            .fadeIn(1000)      // 逐漸顯示，持續 1 秒
            .delay(2000)       // 顯示 2 秒
            .fadeOut(1000, function () {  // 淡出動畫，持續 1 秒
                $(this).addClass('my-d-none');  // 動畫結束後，添加 my-d-none 類，隱藏元素
        });

        //未選擇月卡，點下一步會滑動到畫面中間
        var offset = $('.monthlyCard').offset().top;
        var screenHeight = $(window).height();
        var scrollPosition = offset - (screenHeight / 2) + ($('.monthlyCard').outerHeight() / 2);
        $('html, body').animate({
            scrollTop: scrollPosition
        }, 500);
    });



    //讀取畫面隱藏
    setTimeout(function () {
        $('.loading-welcome').fadeOut();
    }, 500);
    // //大輪播STR
    // var topImgSwiper = new Swiper(".topImgSwiper .swiper", {
    //     slidesPerView: 1.1855,
    //     spaceBetween: 8,
    //     centeredSlides: true,
    //     // loop: true,
    //     initialSlide: 0,
    //     navigation: {
    //         prevEl: '.swiper-button-prev',
    //         nextEl: '.swiper-button-next',
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     on: {
    //         lazyImageReady: function () {
    //             this.update(); // 重新初始化Swiper
    //         }
    //     },
    //     breakpoints: {
    //         1200: {
    //             slidesPerView: 1.785,
    //             // slidesPerView: 1.5,
    //             spaceBetween: 24,
    //         },
    //         500: {
    //             slidesPerView: 1.3,
    //             spaceBetween: 12,
    //             // centeredSlides: false,
    //         }
    //     }
    // });

    function hidden(str, fronLen, endLen) {
        var leg = str.length - frontLen - endLen;
        var xing = "";
        for (var i = 0; i < len; i++) {
            xing += "*";
        }
        return (
            str.substring(0, fronLen) + xing + str.substring(str.length - endLen)
        );
    }
    /*整理到設計系統*/
    //彈窗-更換頭像-選取
    $('.my-modal-body .faceImg-item').click(function () {
        $('.my-modal-body .faceImg-item').not(this).removeClass('click');
        $(this).addClass('click');
        $('.my-modal-footer .my-btn-main').removeClass('my-btn-disabled');
    });

    //Quick-眼睛隱碼
    $('.my-member-quick-points .iconBox').click(function () {
        var $parentContainer = $(this).closest('.swiper-slide');
        $parentContainer.find('.btn-eyeOn').toggleClass('show');
        $parentContainer.find('.btn-eyeOff').toggleClass('show');
    });
    /*整理到設計系統*/

    //選擇商品
    // $('.product-column-item').click(function() {
    //     // 找到當前活動的標籤內容區域
    //     const activeTab = $(this).closest('.my-tab-content');
        
    //     if ($(this).hasClass('active')) {
    //         // 如果已經是active狀態，則取消選取
    //         $(this).removeClass('active');
    //         // 更新radio的選中狀態
    //         $(this).find('input[type="radio"]').prop('checked', false);
    //     } else {
    //         // 只在當前標籤頁面內清除其他項目的active狀態
    //         activeTab.find('.product-column-item').removeClass('active');
    //         // 將當前項目設為active
    //         $(this).addClass('active');
    //         // 更新radio的選中狀態
    //         activeTab.find('input[type="radio"]').prop('checked', false);
    //         $(this).find('input[type="radio"]').prop('checked', true);
    //     }

    //     // 檢查是否有任何產品被選中
    //     if ($('.my-tab-content.active .product-column-item.active').length > 0) {
    //         $('.checkout').removeClass('my-d-none');
    //     } else {
    //         $('.checkout').addClass('my-d-none');
    //     }
    // });
    $('.product-column-item').click(function() {
        // 找到當前活動的標籤內容區域
        const activeTab = $(this).closest('.my-tab-content');
        
        // 先清除所有的active狀態
        $('.product-column-item').removeClass('active');
        $('.product-column-item input[type="radio"]').prop('checked', false);

        //月卡顯示
        $('.monthlyCard').removeClass('my-d-none');
        
        // 如果點擊的不是之前的active項目，則設置新的active狀態
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).find('input[type="radio"]').prop('checked', true);
        }
    
        // 檢查是否有任何產品被選中
        if ($('.my-tab-content.active .product-column-item.active').length > 0) {
            $('.checkout').removeClass('my-d-none');
        } else {
            $('.checkout').addClass('my-d-none');
        }
    });

    // 防止點擊radio時觸發兩次點擊事件
    $('.product-column-item input[type="radio"]').click(function(e) {
        e.stopPropagation();
    });

    // // 20241218 開始
    $('.tab-topUp').click(function () {
        $('.checkout').addClass('my-d-none');
        $('.product-column-item').removeClass('active');
    });
    // // 20241218 結束

    //查看詳情跳彈窗
    $('.btn-seemore').on('click', function () {
        $('.product-pup form, .topUpItem-overlay').removeClass('my-d-none');
        $('body').addClass('noslide');
    });

    //遮罩
    $('.topUpItem-overlay').on('click', function () {
        $('.product-pup form,.event-pup .my-modal, .systemMsg-pup .my-modal, .topUpItem-overlay').addClass('my-d-none');
        $('body').removeClass('noslide');
    });

    $('.my-modal-close').on('click', function () {
        $('.product-pup form, .event-pup .my-modal, .systemMsg-pup .my-modal, .topUpItem-overlay').addClass('my-d-none');
        $('body').removeClass('noslide');
    });

    // 彈窗-虛寶收合
    $('.my-modal-body .textBox-imgText-list-item').each(function () {
        // 如果有icon才顯示游標狀態
        if ($(this).find('.textBox-imgText-list-item-icon').length > 0) {
            $(this).addClass('cursor');
        }
    });

    // 點擊事件統一處理
    function toggleList(item) {
        // 收起其他列表並重置圖示
        $('.my-modal-body .textBox-imgText-list-item').not(item).find('.textBox-imgText-list').slideUp(300);
        $('.my-modal-body .textBox-imgText-list-item').not(item).find('.textBox-imgText-list-item-icon svg').removeClass('rotate-180');

        // 切換當前列表與圖示旋轉狀態
        $(item).find('.textBox-imgText-list').slideToggle(300);
        $(item).find('.textBox-imgText-list-item-icon svg').toggleClass('rotate-180');
    }

    // 點擊 .textBox-imgText-list-item
    $('.my-modal-body .textBox-imgText-list-item').click(function (e) {
        const targetSvg = $(e.target).closest('.textBox-imgText-list-item-icon svg');
        if (targetSvg.length > 0) {
            // 點擊的是圖示，直接收合其他並切換當前
            toggleList($(this));
            return;
        }
        // 點擊的是其他地方
        toggleList(this);
    });

    // 20241221
    document.querySelectorAll('.textBox-imgText-list-item-text.my-text-secondary-400').forEach(span => {
        // 阻止點擊事件冒泡
        span.addEventListener('click', event => {
            event.stopPropagation();
        });
    
        // 設定滑鼠指標樣式
        span.style.cursor = 'auto';
    });
    
    //介紹查看更多
    $('.btn-more').click(function () {
        // 切換父元素 .text 下的 .textBox 的 .heightLimit 類
        $(this).closest('.text').find('.textBox').toggleClass('heightLimit');

        // 切換 .iconBox 的 rotate-180 類
        $(this).find('.iconBox').toggleClass('rotate-180');

        // 切換按鈕文字
        var $textSpan = $(this).find('span.textBox');
        if ($textSpan.text() === '顯示更多') {
            $textSpan.text('收起更多');
        } else {
            $textSpan.text('顯示更多');
        }
    });

    //活動 查看詳情彈窗
    // 20241008
    $(".my-btn-main-text .eventItem-btn,.my-btn-main-text .my-btn-arrow,.btn-question").click(function () {
        $(this).closest('.eventItem')
            .find(".event-pup .my-modal")
            .removeClass("my-d-none");
        // If you want to keep the overlay functionality:
        $(".topUpItem-overlay").removeClass("my-d-none");
        $('body').addClass('noslide');
    });

    // 系統訊息彈窗
    $(".nextStep-btn").click(function () {
        $(".systemMsg-pup .my-modal").removeClass("my-d-none");
        
        // 顯示遮罩與鎖定滾輪
        $(".topUpItem-overlay").removeClass("my-d-none");
        $('body').addClass('noslide');
    });


    //20250407
    // 付款
    $('.paymentMain .payment-column-item').click(function() {
        const $clickedItem = $(this);
        const $paymentMain = $clickedItem.closest('.paymentMain');
        const $paymentSub = $paymentMain.siblings('.paymentSub');
        const dataKey = $clickedItem.data('key');
    
        // 1. 清除所有 active 狀態及 radio 選取
        $('.paymentMain .payment-column-item').removeClass('active');
        $('.paymentMain .payment-column-item input[type="radio"]').prop('checked', false);
    
        // 2. 設定當前點擊項目為 active 並勾選
        $clickedItem.addClass('active').find('input[type="radio"]').prop('checked', true);
    
        // 3. 額外處理 paymentSub 顯示
        if ($paymentSub.length > 0) {
            if (dataKey) {
                // 先隱藏全部
                $paymentSub.find('.payment-list').addClass('my-d-none');
                // 顯示符合 data-key 的那個
                $paymentSub.find('.payment-list[data-key="' + dataKey + '"]').removeClass('my-d-none');
            } else {
                $paymentSub.find('.payment-list').addClass('my-d-none');
            }
    
            // 5. 判斷 paymentSub 是否要顯示
            const hasVisibleItem = $paymentSub.find('.payment-list').filter(function() {
                return !$(this).hasClass('my-d-none');
            }).length > 0;
    
            if (hasVisibleItem) {
                $paymentSub.removeClass('my-d-none');
                // ===> 如果有顯示子項目
                $('.paymentMain .payment-column-item').addClass('my-wmax100');
                $('.payment-more').removeClass('my-d-none');
                $('.paymentMain .payment-column-item').addClass('my-d-none');
                $clickedItem.removeClass('my-d-none');
            } else {
                $paymentSub.addClass('my-d-none');
                // ===> 如果沒有顯示子項目
                $('.paymentMain .payment-column-item').removeClass('my-wmax100');
                $('.payment-more').addClass('my-d-none');
            }
        }
    });
    
    

    // 防止點擊 input radio 時觸發父層的 click 事件
    $('.paymentMain .payment-column-item input[type="radio"]').click(function(e) {
        e.stopPropagation();
    });
   
    //點更多
    $('.payment-more').click(function () {
        // 顯示所有 payment-column-item（移除隱藏和限制寬度）
        $(this).addClass('my-d-none');
        $('.paymentMain .payment-column-item').removeClass('my-d-none my-wmax100 active');
    
        // 隱藏所有 paymentSub
        $('.paymentSub').addClass('my-d-none');
        $('.paymentSub .payment-column-item').removeClass('active');
    });
    //

    $('.paymentSub .payment-column-item').click(function() {
        // 找到當前活動的標籤內容區域
        const activeTab = $(this).closest('.my-tab-content');
        // 先清除所有的active狀態
        $('.paymentSub .payment-column-item').removeClass('active');
        $('.paymentSub .payment-column-item input[type="radio"]').prop('checked', false);
        // 如果點擊的不是之前的active項目，則設置新的active狀態
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).find('input[type="radio"]').prop('checked', true);
        }
    });

    // 防止點擊radio時觸發兩次點擊事件
    $('.paymentSub .payment-column-item input[type="radio"]').click(function(e) {
        e.stopPropagation();
    });

    //判斷下一步按鈕是否有active，有則移除disabled
    function checkPaymentActive() {
        const $paymentSub = $('.paymentMain').siblings('.paymentSub');
    
        if ($paymentSub.length > 0 && !$paymentSub.hasClass('my-d-none')) {
            // 有 paymentSub 且有打開
            if ($paymentSub.find('.payment-column-item.active').length > 0) {
                $('.checkout .btnBox .my-btn-primary').removeClass('my-btn-disabled');
                $('.product-pup .btnBox .my-btn-primary').removeClass('my-btn-disabled');
            } else {
                $('.checkout .btnBox .my-btn-primary').addClass('my-btn-disabled');
                $('.product-pup .btnBox .my-btn-primary').addClass('my-btn-disabled');
            }
        } else {
            // 沒有 paymentSub 或 paymentSub 是隱藏的
            if ($('.paymentMain .payment-column-item.active').length > 0) {
                $('.checkout .btnBox .my-btn-primary').removeClass('my-btn-disabled');
                $('.product-pup .btnBox .my-btn-primary').removeClass('my-btn-disabled');
            } else {
                $('.checkout .btnBox .my-btn-primary').addClass('my-btn-disabled');
                $('.product-pup .btnBox .my-btn-primary').addClass('my-btn-disabled');
            }
        }
    }
    
    // 點擊 payment-column-item
    $('.paymentMain').on('click', '.payment-column-item', function() {
        $(this).addClass('active').siblings().removeClass('active');
        checkPaymentActive();
    });
    
    $('.paymentSub').on('click', '.payment-column-item', function() {
        $(this).addClass('active').siblings().removeClass('active');
        checkPaymentActive();
    });
    
    // 點擊 payment-more
    $('.paymentMain').on('click', '.payment-more', function() {
        $('.paymentMain .payment-column-item').removeClass('active');
        $('.paymentSub .payment-column-item').removeClass('active');
        checkPaymentActive();
    });

    // 0421載入更多
    $('.product').each(function () {
        const $productContainer = $(this);
        const $items = $productContainer.find('.product-column-item');
        const $btn = $productContainer.closest('form').find('.btn-loadMore');
        const initialItemsToShow = 12;
        const itemsPerLoad = 15;
        const totalItems = $items.length;
        $items.each(function (index) {
            if (index >= initialItemsToShow) {
                $(this).hide();
            }
        });
        if (totalItems <= initialItemsToShow) {
            $btn.removeClass('my-d-block').addClass('my-d-none');
        }
        $btn.on('click', function () {
            const visibleItems = $items.filter(':visible').length;
            const startIndex = visibleItems;
            const endIndex = Math.min(startIndex + itemsPerLoad, totalItems);
            for (let i = startIndex; i < endIndex; i++) {
                $items.eq(i).fadeIn(300);
            }
            if (endIndex >= totalItems) {
                $btn.removeClass('my-d-block').addClass('my-d-none');
            }
        });
    });
});

// 20240923

$(".btn-seemore,.my-modal-close,.information a.my-btn-main-text,.btn-question").click(function (e) {
    if (!$('.my-overlay').is(':visible')) { // 檢查 overlay 是否可見
        // $('.overlay').toggle();
        $('body').addClass('noslide');
    }
});
$(".my-overlay,.my-modal-close,.my-btn-main-text").click(function () {
    $('body').removeClass('noslide');
});

$("a.my-btn-main-text,.btn-question").click(function () {
    $('body').addClass('noslide');
});



// 20241218 結束
document.addEventListener('scroll', function () {
    const checkout = document.querySelector('.checkout');
    const userSelectProduct = document.querySelector('.user-selectPayment');

    if (!checkout || !userSelectProduct) return; // 確保元素存在

    // 取得 .user-selectPayment 與視窗底部的位置
    const userSelectProductBottom = userSelectProduct.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;

    // 判斷是否需要添加或移除 .fixed-bottom
    if (userSelectProductBottom <= viewportHeight - 200 && checkout.classList.contains('fixed-bottom')) {
        checkout.classList.remove('fixed-bottom'); // .user-selectPayment 底部距離視窗底部 -200px 或更少時移除 .fixed-bottom
    } else if (userSelectProductBottom > viewportHeight - 200 && !checkout.classList.contains('fixed-bottom')) {
        checkout.classList.add('fixed-bottom'); // .user-selectPayment 底部未到達視窗底部 -200px 時添加 .fixed-bottom
    }
});