$( document ).ready(function() {
    //可關閉式圖片-向下滑動隱藏，向上滑動顯示
    //滑到底部50px時不執行add remove add-mb4 避免抖動
    if ($('.module-closableImg.botton').length > 0) {
        $('.module-closableImg.botton').addClass('show');
    
        var lastScrollTop = 0;
    
        $(window).scroll(function(event) {
            var st = $(this).scrollTop();
            var windowHeight = $(window).height();
            var documentHeight = $(document).height();
            var scrollBottom = documentHeight - windowHeight - st;
    
            if (Math.abs(st - lastScrollTop) > 20) {
                if (st < lastScrollTop && scrollBottom > 50) {
                    // 向下滾動
                    $('.module-closableImg.botton').addClass('show');
                    $('#footer').addClass('add-mb4');
                } else {
                    // 向上滾動或者滾動到網頁內容底部50
                    $('.module-closableImg.botton').removeClass('show');
                    $('#footer').removeClass('add-mb4');
                }
                lastScrollTop = st;
            }
        });
    }
    

    // 蓋台-判斷顯示的話背景不能滑動
    if ($('.module-coverImg.show-b').length > 0) {
        $('body').addClass('noslide');
    }

    //可關閉式圖片-關
    $('.module-coverImg .icon-close, .module-coverImg.my-overlay').click(function(){
        $(this).fadeOut(300, function(){
            $(this).removeClass('show-b');
            $('body').removeClass('noslide');
        });
    });

    $('.module-closableImg .icon_close').click(function(){
        $(this).closest('.module-closableImg').addClass('none');
    });

    // // 可關閉式圖片-倒數時間
    // var closableImgTime = 120;

    // // 更新可關閉式圖片倒數時間的函數
    // function updateClosableImgCountdown() {
    //     var hours = Math.floor(closableImgTime / 3600);
    //     var minutes = Math.floor((closableImgTime % 3600) / 60);
    //     var seconds = closableImgTime % 60;

    //     // 更新可關閉式圖片倒數時間顯示
    //     $('.module-closableImg .time .hour').text(hours.toString().padStart(2, '0'));
    //     $('.module-closableImg .time .minute').text(minutes.toString().padStart(2, '0'));
    //     $('.module-closableImg .time .second').text(seconds.toString().padStart(2, '0'));

    //     // 減少可關閉式圖片倒數時間
    //     closableImgTime--;

    //     // 倒數完後隱藏圖片區塊
    //     if (closableImgTime < 0) {
    //         $('.module-closableImg').fadeOut().removeClass('show-b');
    //         $('#footer').removeClass('add-mb4');
    //     }
    // }

    // // 初始更新可關閉式圖片倒數時間
    // updateClosableImgCountdown();

    // // 每秒更新一次可關閉式圖片倒數時間
    // var closableImgCountdownInterval = setInterval(updateClosableImgCountdown, 1000);
    
    // 可關閉式圖片-倒數時間
    var closableImgTime = 120;
    // 更新可關閉式圖片倒數時間的函數
    function updateClosableImgCountdown() {
        var hours = Math.floor(closableImgTime / 3600);
        var minutes = Math.floor((closableImgTime % 3600) / 60);
        var seconds = closableImgTime % 60;
        // 更新可關閉式圖片倒數時間顯示
        $('.module-closableImg .time .hour').text(hours.toString().padStart(2, '0'));
        $('.module-closableImg .time .minute').text(minutes.toString().padStart(2, '0'));
        $('.module-closableImg .time .second').text(seconds.toString().padStart(2, '0'));
        // 減少可關閉式圖片倒數時間
        closableImgTime--;
        // 倒數完後隱藏圖片區塊
        if (closableImgTime < 0) {
            $('.module-closableImg').fadeOut().removeClass('show-b');
            $('#footer').removeClass('add-mb4');
            clearInterval(closableImgCountdownInterval);  // 清除倒數計時
        }
    }
    // 初始更新可關閉式圖片倒數時間
    updateClosableImgCountdown();
    // 每秒更新一次可關閉式圖片倒數時間
    var closableImgCountdownInterval = setInterval(updateClosableImgCountdown, 1000);
    // 點擊可關閉式圖片時隱藏圖片區塊並停止倒數
    $('.module-closableImg').on('click', function() {
        // 立即隱藏圖片區塊
        $('.module-closableImg').fadeOut().removeClass('show-b');
        $('#footer').removeClass('add-mb4');
        clearInterval(closableImgCountdownInterval);  // 清除倒數計時
    });


    // // 蓋台圖片倒數時間
    // var coverImgTime = 5;
    // // 更新蓋台圖片倒數時間的函數
    // function updateCoverImgCountdown() {
    //     var hours = Math.floor(coverImgTime / 3600);
    //     var minutes = Math.floor((coverImgTime % 3600) / 60);
    //     var seconds = coverImgTime % 60;

    //     // 更新蓋台圖片倒數時間顯示
    //     $('.module-coverImg .timeBox .hour').text(hours.toString().padStart(2, '0'));
    //     $('.module-coverImg .timeBox .minute').text(minutes.toString().padStart(2, '0'));
    //     $('.module-coverImg .timeBox .second').text(seconds.toString().padStart(2, '0'));

    //     // 減少蓋台圖片倒數時間
    //     coverImgTime--;

    //     // 倒數完後隱藏圖片區塊
    //     if (coverImgTime < 0) {
    //         $('.module-coverImg').fadeOut().removeClass('show-b');
    //         $('body').removeClass('noslide');
    //     }
    // }

    // // 初始更新蓋台圖片倒數時間
    // updateCoverImgCountdown();

    // // 每秒更新一次蓋台圖片倒數時間
    // var coverImgCountdownInterval = setInterval(updateCoverImgCountdown, 1000);

    // 蓋台圖片倒數時間
    var coverImgTime = 120;
    // 更新蓋台圖片倒數時間的函數
    function updateCoverImgCountdown() {
        var hours = Math.floor(coverImgTime / 3600);
        var minutes = Math.floor((coverImgTime % 3600) / 60);
        var seconds = coverImgTime % 60;
        // 更新蓋台圖片倒數時間顯示
        $('.module-coverImg .timeBox .hour').text(hours.toString().padStart(2, '0'));
        $('.module-coverImg .timeBox .minute').text(minutes.toString().padStart(2, '0'));
        $('.module-coverImg .timeBox .second').text(seconds.toString().padStart(2, '0'));
        // 減少蓋台圖片倒數時間
        coverImgTime--;
        // 倒數完後隱藏圖片區塊
        if (coverImgTime < 0) {
            $('.module-coverImg').fadeOut().removeClass('show-b');
            $('body').removeClass('noslide');
            clearInterval(coverImgCountdownInterval);  // 清除倒數計時
        }
    }
    // 初始更新蓋台圖片倒數時間
    updateCoverImgCountdown();
    // 每秒更新一次蓋台圖片倒數時間
    var coverImgCountdownInterval = setInterval(updateCoverImgCountdown, 1000);
    // 點擊 .module-coverImg.my-overlay 時隱藏圖片區塊
    $('.module-coverImg.my-overlay').on('click', function() {
        // 立即隱藏圖片區塊
        $('.module-coverImg').fadeOut().removeClass('show-b');
        $('body').removeClass('noslide');
        clearInterval(coverImgCountdownInterval);  // 清除倒數計時
    });
});