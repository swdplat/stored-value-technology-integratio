window.addEventListener('load', function() {
    //六欄藍色標籤
    const clumns_6_tab_swiper = new Swiper(".module-imgtext-columns-6.tab[data-swiper='quick'] .swiper", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 12,
        grid: {
            fill: 'row',
            rows: 8,
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
                slidesPerView: 6,
                spaceBetween: 24,
                grid: {
                    fill: 'row',
                    rows: 4,
                },
            },
            768:{
                slidesPerView: 4,
                spaceBetween: 24,
                grid: {
                    fill: 'row',
                    rows: 6,
                },
            },
            570:{
                slidesPerView: 4,
                spaceBetween: 12,
                grid: {
                    fill: 'row',
                    rows: 8,
                },
            }
        }
    });
});