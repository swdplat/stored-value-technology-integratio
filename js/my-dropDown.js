$(document).ready(function() {
    // 緩存常用的 jQuery 選擇器以提升效能
    const $window = $(window);
    const $body = $('body');
    const $overlay = $('.overlay-two.my-overlay');
    const $allServices = $('.allServices');
    const $dropDown = $allServices.find('.my-dropDown');
    const $titleButtons = $('.my-title-btn a');

    // 切換下拉選單的顯示與隱藏
    $titleButtons.on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        const $link = $(this);
        const $currentDropDown = $link.closest('.my-title-btn').siblings('.my-dropDown');

        $link.toggleClass('active');
        $currentDropDown.slideToggle(300, function() {
            if (!$currentDropDown.is(':visible')) {
                $link.removeClass('active').blur();
                updateFocusState();
            }
        });

        // 處理行動裝置上的 overlay
        if ($window.width() <= 570) {
            if ($link.hasClass('active')) {
                $overlay.show();
                $body.addClass('noslide');
            } else {
                $overlay.hide();
                $body.removeClass('noslide');
            }
        }
    });

    // 防止在下拉選單內點擊時關閉選單，並保持焦點
    $dropDown.on('click', function(event) {
        event.stopPropagation();
        $(this).siblings('.my-title-btn').find('a').focus();
    });

    // 點擊 overlay 時關閉下拉選單
    $overlay.on('click', function() {
        closeAllDropDowns();
    });

    // 點擊取消按鈕時關閉下拉選單並移除相關類別
    $dropDown.find('.btn-cancel').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        closeAllDropDowns(function() {
            // 動畫完成後移除額外的 focus 類別
            $titleButtons.removeClass('active').blur();
            $allServices.find('.my-btn-round.my-btn-outline, .my-btn-round-secondary svg path').removeClass('focus');
        });
        $overlay.hide();
        $body.removeClass('noslide');
        $(this).hide();
    });

    // 當 .my-modal-body 被點擊時，強制應用 focus 樣式
    $('.my-modal-body').on('click', function() {
        $allServices.find('.my-btn-round.my-btn-outline, .my-btn-round-secondary svg path').addClass('focus');
    });

    // 點擊文件的其他區域時關閉下拉選單
    $(document).on('click', function(event) {
        const $target = $(event.target);
        if (!$target.closest('.my-dropDown, .my-title-btn, .my-modal-body').length) {
            closeAllDropDowns();
            if ($window.width() <= 570) {
                $overlay.hide();
            }
        }

        // 當點擊 .btn-cancel 時，移除 focus 樣式
        if ($target.closest('.btn-cancel').length) {
            $allServices.find('.my-btn-round.my-btn-outline, .my-btn-round-secondary svg path').removeClass('focus');
        }
    });

    // 更新焦點狀態的函數
    function updateFocusState() {
        if ($dropDown.is(':hidden')) {
            $allServices.find('.my-btn-round.my-btn-outline, .my-btn-round-secondary svg path').removeClass('focus');
            $titleButtons.blur();
        } else {
            $allServices.find('.my-btn-round-secondary svg path').addClass('focus');
        }
    }

    // 關閉所有下拉選單的函數
    function closeAllDropDowns(callback) {
        $dropDown.slideUp(300, function() {
            if (typeof callback === 'function') {
                callback();
            }
            updateFocusState();
        });
        $titleButtons.removeClass('active').blur();
    }

    // 初始化時檢查下拉選單的狀態
    updateFocusState();

    // 當下拉選單顯示或隱藏時，重新檢查焦點狀態
    $dropDown.on('slideToggle', function() {
        updateFocusState();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const body = document.body;

    function toggleNoHoverClass() {
        if (window.innerWidth <= 570) {
            body.classList.add('no-hover');
        } else {
            body.classList.remove('no-hover');
        }
    }

    // 初始檢查
    toggleNoHoverClass();

    // 監聽resize事件
    window.addEventListener('resize', toggleNoHoverClass);

    // 監聽checkbox點擊事件
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            if (window.innerWidth <= 570) {
                // 根據需要進行進一步處理
                // 例如，移除特定的類別或樣式
            }
        });
    });
});