document.addEventListener("DOMContentLoaded", function() {

    function setupTabSwitching(card) {
        // 判斷li數量 ul動態新增class list-tab
        var titleTabs = card.querySelectorAll('.my-card-title ul');
    
        titleTabs.forEach(function(ul) {
            var liElements = ul.querySelectorAll('li');
            if (liElements.length > 1) {
                ul.classList.add('list-tab');
                liElements[0].classList.add('active');
            }
    
            liElements.forEach(function(li) {
                li.addEventListener('click', function() {
                    liElements.forEach(function(otherLi) {
                        otherLi.classList.remove('active');
                    });
                    li.classList.add('active');
    
                    //找到相對應的標籤內容並切換其可見性
                    var index = Array.from(li.parentElement.children).indexOf(li);
                    var tabContents = card.querySelectorAll('.tab-content');
                    tabContents.forEach(function(content) {
                        content.classList.remove('active');
                    });
                    tabContents[index].classList.add('active');
                });
            });
        });
    
        // 如果 card_box 中有兩個內容，則將類別 'content' 替換為 'tab-content'
        var cardBoxes = card.querySelectorAll('.card_box');
        cardBoxes.forEach(function(cardBox) {
            var cardBoxContents = cardBox.querySelectorAll('.content');
            if (cardBoxContents.length > 1) {
                cardBoxContents.forEach(function(content) {
                    content.classList.replace('content', 'tab-content');
                });
                cardBoxContents[0].classList.add('active');
            }
        });
    }

    
    
    // 找到所有 card 並對它們設置 tab 切換功能
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        setupTabSwitching(card);
    });
    

    // 頁籤-超過範圍可滑動
    var curXPosTab = 0,
    curDownTab = false;

    var cardTabList = $(".my-card-title h3 .list-tab");
    var isMouseOverTab = false;

    cardTabList.on("mouseenter", function() {
    isMouseOverTab = true;
    });

    cardTabList.on("mouseleave", function() {
    isMouseOverTab = false;
    });

    cardTabList.on("mousedown", function(e) {
    curDownTab = true;
    curXPosTab = e.pageX;
    });

    cardTabList.on("mouseup", function() {
    curDownTab = false;
    });

    cardTabList.on("mousemove", function(e) {
    if (isMouseOverTab === true && curDownTab === true) {
        cardTabList.scrollLeft(cardTabList.scrollLeft() + (curXPosTab - e.pageX));
        curXPosTab = e.pageX;
    }
    });

    // 藍色頁籤-超過範圍可滑動
    var curXPosBlueTab = 0,
    curDownBlueTab = false;

    var blueTabList = $(".tabs .my-tabs-box");
    var isMouseOverBlueTab = false;

    blueTabList.on("mouseenter", function() {
    isMouseOverBlueTab = true;
    });

    blueTabList.on("mouseleave", function() {
    isMouseOverBlueTab = false;
    });

    blueTabList.on("mousedown", function(e) {
    curDownBlueTab = true;
    curXPosBlueTab = e.pageX;
    });

    blueTabList.on("mouseup", function() {
    curDownBlueTab = false;
    });

    blueTabList.on("mousemove", function(e) {
    if (isMouseOverBlueTab === true && curDownBlueTab === true) {
        blueTabList.scrollLeft(blueTabList.scrollLeft() + (curXPosBlueTab - e.pageX));
        curXPosBlueTab = e.pageX;
    }
    });

    
    
 
    //卡片式
    // const colorSlides = document.querySelectorAll('.gradient .swiper-slide,.color-block .swiper-slide');
    // colorSlides.forEach(slide => {
    //     const link = slide.querySelector('a');
    //     const img = slide.querySelector('.mainImg');
    //     if (slide.closest('.card_more')) return;
    //     link.classList.add('skeleton_cardColumn');
    //     const checkImageLoadStatus = () => {
    //         if (img.complete && img.naturalWidth !== 0) {
    //             link.classList.remove('skeleton_cardColumn');
    //             clearInterval(checkInterval);
    //         }
    //     };
    //     const checkInterval = setInterval(checkImageLoadStatus, 100);
    // });
    
//     //強檔活動
//     const highlightsSlides = document.querySelectorAll('.highlights .swiper-slide');
//     highlightsSlides.forEach(slide => {
//         const link = slide.querySelector('a');
//         const img = slide.querySelector('.mainImg');
//         link.classList.add('skeleton_cardRow');
//         const checkImageLoadStatus = () => {
//             if (img.complete && img.naturalWidth !== 0) {
//                 link.classList.remove('skeleton_cardRow');
//                 clearInterval(checkInterval);
//             }
//         };
//         const checkInterval = setInterval(checkImageLoadStatus, 100);
//     });

//     //儲值教學
//     const teachSlides = document.querySelectorAll('.teach .swiper-slide');
//     teachSlides.forEach(slide => {
//         const link = slide.querySelector('a');
//         const img = slide.querySelector('.mainImg');
//         link.classList.add('skeleton_square_row');
//         const checkImageLoadStatus = () => {
//             if (img.complete && img.naturalWidth !== 0) {
//                 link.classList.remove('skeleton_square_row');
//                 clearInterval(checkInterval);
//             }
//         };
//         const checkInterval = setInterval(checkImageLoadStatus, 100);
//     });

//     //1比1
//     const topUpSlides = document.querySelectorAll('.featured .swiper-slide,.recommend .swiper-slide,.topUp .swiper-slide');
//     topUpSlides.forEach(slide => {
//         const link = slide.querySelector('a');
//         const img = slide.querySelector('.mainImg');
//         if (slide.closest('.card_more')) return;
//         link.classList.add('skeleton_square_column');
//         const checkImageLoadStatus = () => {
//             if (img.complete && img.naturalWidth !== 0) {
//                 link.classList.remove('skeleton_square_column');
//                 clearInterval(checkInterval);
//             }
//         };
//         const checkInterval = setInterval(checkImageLoadStatus, 100);
//     });



//    //16比1
//    const premiumSlides = document.querySelectorAll('.feedback .swiper-slide,.premium .swiper-slide');
//    premiumSlides.forEach(slide => {
//        const link = slide.querySelector('a');
//        const img = slide.querySelector('.mainImg');
//        link.classList.add('skeleton_rectangle_l');
//        const checkImageLoadStatus = () => {
//            if (img.complete && img.naturalWidth !== 0) {
//                link.classList.remove('skeleton_rectangle_l');
//                clearInterval(checkInterval);
//            }
//        };
//        const checkInterval = setInterval(checkImageLoadStatus, 100);
//    });

//    //
//    const cooperationSlides = document.querySelectorAll('.cooperation .swiper-slide');
//    cooperationSlides.forEach(slide => {
//        const link = slide.querySelector('a');
//        const img = slide.querySelector('.mainImg');
//        link.classList.add('skeleton_rectangle_m');
//        const checkImageLoadStatus = () => {
//            if (img.complete && img.naturalWidth !== 0) {
//                link.classList.remove('skeleton_rectangle_m');
//                clearInterval(checkInterval);
//            }
//        };
//        const checkInterval = setInterval(checkImageLoadStatus, 100);
//    });
    });
/**/