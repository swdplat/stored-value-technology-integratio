// document.addEventListener('DOMContentLoaded', () => {
//     const customSelects = document.querySelectorAll('.custom-select-ul');
    
//     customSelects.forEach((customSelect) => {
//         const selectOption = customSelect.querySelector('.select-option-ul');
//         const options = customSelect.querySelector('.options-ul');
//         const hiddenSelect = customSelect.nextElementSibling;

//         selectOption.addEventListener('click', (e) => {
//             e.stopPropagation(); // 防止事件冒泡
//             const isOpen = customSelect.classList.contains('open');
            
//             // 關閉所有選單
//             customSelects.forEach(select => select.classList.remove('open'));
            
//             // 如果當前選單未打開，則打開它
//             if (!isOpen) {
//                 customSelect.classList.add('open');
//             }
//         });

//         options.querySelectorAll('li').forEach(option => {
//             option.addEventListener('click', (e) => {
//                 const value = option.dataset.value;
//                 if (value === 'select') {
//                     return;
//                 }
                
//                 // 更新顯示文字
//                 selectOption.textContent = option.textContent;
//                 selectOption.classList.remove('is-invalid');
                
//                 // 更新隱藏的 select 值
//                 if (hiddenSelect && hiddenSelect.tagName === 'SELECT') {
//                     hiddenSelect.value = value;
//                     const event = new Event('change', { bubbles: true });
//                     hiddenSelect.dispatchEvent(event);
//                 }
                
//                 // 關閉選單
//                 customSelect.classList.remove('open');
//                 e.stopPropagation();
//             });
//         });
//     });

//     // 點擊外部關閉所有選單
//     document.addEventListener('click', () => {
//         customSelects.forEach(select => {
//             select.classList.remove('open');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const customSelects = document.querySelectorAll('.custom-select-ul');
    
    customSelects.forEach((customSelect) => {
        const selectOption = customSelect.querySelector('.select-option-ul');
        const options = customSelect.querySelector('.options-ul');
        const hiddenSelect = customSelect.nextElementSibling;

        selectOption.addEventListener('click', (e) => {
            // 檢查是否有 disabled class
            if (selectOption.classList.contains('my-form-select-disabled')) {
                return; // 如果有 disabled class，直接返回不執行後續操作
            }

            e.stopPropagation(); // 防止事件冒泡
            const isOpen = customSelect.classList.contains('open');
            
            // 關閉所有選單
            customSelects.forEach(select => select.classList.remove('open'));
            
            // 如果當前選單未打開，則打開它
            if (!isOpen) {
                customSelect.classList.add('open');
            }
        });

        options.querySelectorAll('li').forEach(option => {
            option.addEventListener('click', (e) => {
                // 檢查是否有 disabled class
                if (selectOption.classList.contains('my-form-select-disabled')) {
                    return; // 如果有 disabled class，直接返回不執行後續操作
                }

                const value = option.dataset.value;
                if (value === 'select') {
                    return;
                }
                
                // 更新顯示文字
                selectOption.textContent = option.textContent;
                selectOption.classList.remove('is-invalid');
                
                // 更新隱藏的 select 值
                if (hiddenSelect && hiddenSelect.tagName === 'SELECT') {
                    hiddenSelect.value = value;
                    const event = new Event('change', { bubbles: true });
                    hiddenSelect.dispatchEvent(event);
                }
                
                // 關閉選單
                customSelect.classList.remove('open');
                e.stopPropagation();
            });
        });
    });

    // 點擊外部關閉所有選單
    document.addEventListener('click', () => {
        customSelects.forEach(select => {
            select.classList.remove('open');
        });
    });
});

$(document).ready(function() {
    // 第一層切換
    $('.my-list-tab-tiem').click(function() {
        var index = $(this).index();
        
        // 切換標籤樣式
        $('.my-list-tab-tiem').removeClass('active');
        $(this).addClass('active');
        
        // 切換內容
        $('.my-title-tab-content').removeClass('active');
        $('.my-title-tab-content').eq(index).addClass('active');
        
        // 重置第二層標籤
        $('.my-title-tab-content').eq(index).find('.my-tabs-box li:first').click();
    });

    // 第二層切換
    $('.my-tabs-box li').click(function() {
        var parentIndex = $(this).closest('.my-title-tab-content').index();
        var index = $(this).index();
        
        // 切換標籤樣式
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
        
        // 切換內容
        var tabContents = $(this).closest('.my-title-tab-content').find('.my-tab-content');
        tabContents.removeClass('active');
        tabContents.eq(index).addClass('active');
    });

    // 初始化：觸發第一個標籤的點擊事件
    $('.my-list-tab-tiem:first').click();
});