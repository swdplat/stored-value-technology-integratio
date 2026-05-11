// 首先加入 style 標籤
const style = document.createElement('style'); 
style.textContent = `
    .swiper {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .swiper.swiper-initialized {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// 全局變量存儲 swiper 實例
let swipers = {};

// 預備補圖用的圖片清單
const extraImages = [
    'https://image.mycard520.com/globalmycard/member/mycardweb-test/images/test/topImg-02.webp',
    'https://image.mycard520.com/globalmycard/member/mycardweb-test/images/test/topImg-03.webp',
    'https://image.mycard520.com/globalmycard/member/mycardweb-test/images/test/topImg-04.webp'
];

// 初始化函數
function initSwiper() {
    if (swipers.topImgSwiper) return;

    const swiperWrapper = document.querySelector('.topImgSwiper .swiper-wrapper');
    if (swiperWrapper) {
        let slides = swiperWrapper.querySelectorAll('.swiper-slide');
        const currentSlideCount = slides.length;

        if (currentSlideCount < 4) {
            const needed = 4 - currentSlideCount;
            for (let i = 0; i < needed; i++) {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.innerHTML = `
                    <a target="_blank">
                        <div class="imgBox">
                            <img class="mainImg" src="${extraImages[i % extraImages.length]}" alt="">
                        </div>
                    </a>
                `;
                swiperWrapper.appendChild(slide);
            }
        }
    }

    // 初始化大輪播
    swipers.topImgSwiper = new Swiper(".topImgSwiper .swiper", {
        slidesPerView: 1.1855,
        spaceBetween: 8,
        centeredSlides: true,
        loop: true,
        initialSlide: 0,
        observer: true,
        observeParents: true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        on: {
            init: function() {
                this.update();
            },
            lazyImageReady: function () {
                this.update();
            }
        },
        breakpoints: {
            1200: {
                slidesPerView: 1.785,
                spaceBetween: 24,
            },
            500: {
                slidesPerView: 1.3,
                spaceBetween: 12,
            }
        }
    });

    // 初始化搜尋框文字 swiper
    swipers.search = new Swiper(".search-swiper", {
        direction: "vertical",
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }
    });
}


// 在 DOM 完全加載後初始化
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initSwiper, 100);
});

// 處理視窗大小改變
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        if (swipers.topImgSwiper && swipers.topImgSwiper.destroy) {
            swipers.topImgSwiper.destroy(true, true);
            swipers.topImgSwiper = null;
        }
        initSwiper();
    }, 250);
});