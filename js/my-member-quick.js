window.addEventListener('load', function() {
    //工具區
    var memberToolSwiper = new Swiper(".my-member-quick-tool-swiper .swiper", {
        direction:"horizontal",
        slidesPerView:4,
        spaceBetween: 12,
        grid: {
            rows: 2,
            fill: "row",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            570: {
                spaceBetween: 0,
                allowTouchMove: false,//禁止滑動
                direction: "vertical",//直式
                slidesPerView: 10,//顯示則數
            }
        }
    });

    var moduleMemberToolSwiper = new Swiper(".my-member-quick-points .swiper", {
        slidesPerView:1,
        spaceBetween: 24,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

        

    //大輪播
    var moduleTopImgMSwiper = new Swiper(".module-topImg-m .swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        initialSlide: 0,
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
        on: {
            lazyImageReady: function () {
              this.update(); // 重新初始化Swiper
            }
        }
    });

    //六欄
    var mClumnsSixSwiper = new Swiper(".my-module-columns-six .swiper", {
        slidesPerView: 2.8,
        slidesPerGroup: 1,
        spaceBetween: 12,
        initialSlide: 0,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            1400: {
                slidesPerView: 6,
                spaceBetween: 24,
            },
            1000: {
                slidesPerView: 4.3,
                spaceBetween: 24,
            },
            570: {
                slidesPerView: 3.3,
                spaceBetween: 24,
            }
        }
    });

    //三欄
    var mClumnsThreeSwiper = new Swiper(".my-module-columns-three .swiper", {
        slidesPerView: 1.7,
        slidesPerGroup: 1,
        spaceBetween: 12,
        initialSlide: 0,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            1400:{
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 24
            },
            1000:{
                slidesPerView: 2.3,
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

    //三欄icon
    var mClumnsThreeRowSwiper = new Swiper(".my-module-columns-three-row .swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 12,
        initialSlide: 0,
        grid: {
            fill: 'row',
            rows: 6,
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
            1400:{
                slidesPerView: 3,
                spaceBetween: 24,
                grid: {
                    fill: 'row',
                    rows: 2,
                },
            },
            1000:{
                slidesPerView: 2,
                spaceBetween: 24,
                grid: {
                    fill: 'row',
                    rows: 3,
                },
            },
            768:{
                slidesPerView: 1,
                spaceBetween: 24,
                grid: {
                    fill: 'row',
                    rows: 6,
                },
            }
        }
    });

    //會員中心工具區
    
});