// $(document).ready(function(){ 
// 	//頁腳-手機版 
//     $('#footer .footer-accordion-list').click(function(){
//         if ($(window).width() < 768) {
//             // 收起其他元素的列表
//             $('#footer .footer-accordion-list').not(this).find('.footer-body').slideUp(300);
//             $('#footer .footer-accordion-list').not(this).find('.icon_down').removeClass('rotate-180');
            
//             // 切換當前元素的列表狀態
//             $(this).find('.footer-body').slideToggle(300);
//             $(this).find('.icon_down').toggleClass('rotate-180');
//         }
//     });
    
//     //頁腳-如果有可關閉式圖片底部樣式，則新增class add-mb4
//     if ($('body .closableImg.botton').length > 0) {
//         $('#footer').addClass('add-mb4');
//     }
// });	
$(document).ready(function(){ 
    // 初始化頁腳狀態
    function initFooter() {
        if ($(window).width() >= 768) {
            // 桌面版，展開所有 footer-body
            $('#footer .footer-body').show();
            // 重置所有圖示的旋轉狀態
            $('#footer .icon_down').removeClass('rotate-180');
        } else {
            // 行動版，根據需要初始化 footer-body 的顯示狀態
            // 例如，可以選擇全部收合
            $('#footer .footer-body').hide();
            $('#footer .icon_down').removeClass('rotate-180');
        }
    }

    // 初始呼叫以設置頁腳狀態
    initFooter();

    // 當視窗大小變更時，重新初始化頁腳狀態
    $(window).resize(function(){
        initFooter();
    });

    // 頁腳-手機版點擊事件
    $('#footer .footer-accordion-list').click(function(){
        if ($(window).width() < 768) {
            // 收起其他元素的列表
            $('#footer .footer-accordion-list').not(this).find('.footer-body').slideUp(300);
            $('#footer .footer-accordion-list').not(this).find('.icon_down').removeClass('rotate-180');
            
            // 切換當前元素的列表狀態
            $(this).find('.footer-body').slideToggle(300);
            $(this).find('.icon_down').toggleClass('rotate-180');
        }
    });
    
    // 頁腳-如果有可關閉式圖片底部樣式，則新增class add-mb4
    if ($('body .closableImg.botton').length > 0) {
        $('#footer').addClass('add-mb4');
    }
});
