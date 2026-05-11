// 窗口大小改變事件
window.addEventListener('resize', function () {
    systemTopImgSwiper.destroy(); // 銷毀現有 Swiper 實例
    initSwiper(); // 重新初始化 Swiper
});

// 頁面切換事件（使用相應的事件，比如路由切換等）
document.addEventListener('DOMContentLoaded', function () {
    initSwiper(); // 初始化 Swiper
});

window.addEventListener('load', function() {
    //大輪播
    var topImg_swiper = new Swiper(".module-topImg .swiper", {
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        spaceBetween: 8,
        centeredSlides: true,
        loop: true,
        // effect: "fade",
        autoplay: {
            delay: 4000,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 24
            },
            570: {
                slidesPerView: 1.3,
                slidesPerGroup: 1,
                spaceBetween: 12
               
            }
        }
    });
    //工具區
    // var toolIcon_swiper = new Swiper(".module-toolIcon .swiper", {
    //     slidesPerView: 4,
    //     slidesPerGroup: 4,
    //     spaceBetween: 16,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     grid: {
    //         rows: 2,    
    //         fill: "row",
    //     },
    //     breakpoints: {
    //         1400: {
    //             slidesPerView: 8,
    //             slidesPerGroup: 8,
    //             spaceBetween: 40,
    //             grid: {
    //                 rows: 1,
    //                 fill: "row",
    //             },
    //         },
    //         1200: {
    //             slidesPerView: 8,
    //             slidesPerGroup: 8,
    //             spaceBetween: 0,
    //             grid: {
    //                 rows: 1,
    //                 fill: "row",
    //             },
    //         }
    //     },
    // });
    
    //兩欄
    var columns_2_swiper = new Swiper(".module-imgtext-columns-2[data-swiper='normal'] .swiper", {
        slidesPerView: 1.15,
        slidesPerGroup: 1,
        spaceBetween: 12,
        grid: {
            fill: 'row',
            rows: 1,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            768:{
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 24
            }
        }
    });

    //兩欄色塊
    var columns_2_color_Swiper = new Swiper(".module-imgtext-columns-2.module-imgtext-type-card.module-imgtext-type-card-block[data-swiper='normal'] .swiper", {
        slidesPerView: 1.15,
        slidesPerGroup: 1,
        spaceBetween: 12,
        grid: {
            fill: 'row',
            rows: 1,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            1200:{
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 24
            },
            1000:{
                slidesPerView: 1.5,
                slidesPerGroup: 1,
                spaceBetween: 24
            },
            768:{
                slidesPerView: 1.15,
                slidesPerGroup: 1,
                spaceBetween: 24
            }
        }
    });

    // 三欄
    var columns_3_swiper = new Swiper(".module-imgtext-columns-3[data-swiper='normal'] .swiper", {
        slidesPerView: 1.7,
        slidesPerGroup: 1,
        spaceBetween: 12,
        grid: {
            fill: 'row',
            rows: 1,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            1000:{
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 24
            },
            768:{
                slidesPerView: 1.7,
                slidesPerGroup: 1,
                spaceBetween: 24
            }
        }
    });

    // 三欄icon
    var columns_3_icon_swiper = new Swiper(".module-imgtext-columns-3.module-imgtext-grid-row[data-swiper='icon'] .swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 12,
        grid: {
            fill: 'row',
            rows: 3,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1000:{
                slidesPerView: 3,
                spaceBetween: 24,
                grid: {
                    fill: 'row',
                    rows: 2,
                },
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 24,
                grid: {
                    fill: 'row',
                    rows: 4,
                },
            }
        }
    });

    //四欄
    var columns_4_swiper = new Swiper(".module-imgtext-columns-4[data-swiper='normal'] .swiper", {
        slidesPerView: 2.2,
        slidesPerGroup: 2,
        spaceBetween: 12,
        grid: {
            fill: 'row',
            rows: 1,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            1400:{
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 24
            },
            1000:{
                slidesPerView: 3.2,
                slidesPerGroup: 2,
                spaceBetween: 24
            },
            768:{
                slidesPerView: 2.2,
                slidesPerGroup: 2,
                spaceBetween: 24
            }
        }
    });

    //四欄icon
    var columns_4_icon_swiper = new Swiper(".module-imgtext-columns-4.module-imgtext-grid-row[data-swiper='icon'] .swiper", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 12,
        grid: {
            fill: 'row',
            rows: 4,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: false,
        },
        breakpoints: {
            1000:{
                slidesPerView: 4,
                spaceBetween: 24,
                grid: {
                    fill: 'row',
                    rows: 2,
                },
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 24,
                grid: {
                    fill: 'row',
                    rows: 4,
                },
            }
        }
    });

    //六欄
    var clumns_6_swiper = new Swiper(".module-imgtext-columns-6[data-swiper='normal'] .swiper", {
        slidesPerView: 2.8,
        slidesPerGroup: 1,
        spaceBetween: 12,
        grid: {
            fill: 'row',
            rows: 1,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            1000: {
                slidesPerView: 6,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 5.3,
                spaceBetween: 24,
            },
            570: {
                slidesPerView: 3.3,
                spaceBetween: 24,
            }
        }
    });

    //六欄藍色標籤
    // const clumns_6_tab_swiper = new Swiper(".module-imgtext-columns-6.tab[data-swiper='quick'] .swiper", {
    //     slidesPerView: 3,
    //     slidesPerGroup: 1,
    //     spaceBetween: 12,
    //     grid: {
    //         fill: 'row',
    //         rows: 8,
    //     },
    //     navigation: {
    //         prevEl: '.swiper-button-prev',
    //         nextEl: '.swiper-button-next',
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: false,
    //     },
    //     breakpoints: {
    //         1000:{
    //             slidesPerView: 6,
    //             spaceBetween: 24,
    //             grid: {
    //                 fill: 'row',
    //                 rows: 4,
    //             },
    //         },
    //         768:{
    //             slidesPerView: 4,
    //             spaceBetween: 24,
    //             grid: {
    //                 fill: 'row',
    //                 rows: 6,
    //             },
    //         },
    //         570:{
    //             slidesPerView: 4,
    //             spaceBetween: 12,
    //             grid: {
    //                 fill: 'row',
    //                 rows: 8,
    //             },
    //         }
    //     }
    // });

    // 搜尋框文字
    var search_swiper = new Swiper(".search-swiper", {
        direction: "vertical",
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        // mousewheel: true,
    });
});

$(document).ready(function(){
    // 輪播-滑鼠移入時才顯示控制箭頭
    $('.module-imgtext .swiper').mouseenter(function(){
        $(this).find('.swiper-button-prev').removeClass('swiper-button-hidden');
        $(this).find('.swiper-button-next').removeClass('swiper-button-hidden');
    }).mouseleave(function(){
        $(this).find('.swiper-button-prev').addClass('swiper-button-hidden');
        $(this).find('.swiper-button-next').addClass('swiper-button-hidden');
    });

    //圖文模組-卡片式-色塊 是否執行輪播
    // $(window).resize(function() {
    //     if ($(window).width() >= 1000) {
    //         $(".module-imgtext-columns-6.module-imgtext-type-card.module-imgtext-type-card-column.module-imgtext-type-card-block[data-swiper='normal'] .swiper-wrapper").addClass('swiper-no-swiping');
    //     } else {
    //         $(".module-imgtext-columns-6.module-imgtext-type-card.module-imgtext-type-card-column.module-imgtext-type-card-block[data-swiper='normal'] .swiper-wrapper").removeClass('swiper-no-swiping');
    //     }
    // }).trigger('resize'); // 初始化，確保頁面加載時執行一次

    //圖文模組-橫式 是否執行輪播
    // $(window).resize(function() {
    //     if ($(window).width() >= 1000) {
    //         $(".module-imgtext-columns-3.module-imgtext-grid-row[data-swiper='icon'] .swiper-wrapper").addClass('swiper-no-swiping');
    //     } else {
    //         $(".module-imgtext-columns-3.module-imgtext-grid-row[data-swiper='icon'] .swiper-wrapper").removeClass('swiper-no-swiping');
    //     }
    // }).trigger('resize'); // 初始化，確保頁面加載時執行一次
});

