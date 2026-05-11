window.addEventListener('load', function() {
    //工具區
    var toolIcon_swiper = new Swiper(".module-toolIcon .swiper", {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        grid: {
            rows: 2,    
            fill: "row",
        },
        breakpoints: {
            1400: {
                slidesPerView: 8,
                slidesPerGroup: 8,
                spaceBetween: 40,
                grid: {
                    rows: 1,
                    fill: "row",
                },
            },
            1200: {
                slidesPerView: 8,
                slidesPerGroup: 8,
                spaceBetween: 0,
                grid: {
                    rows: 1,
                    fill: "row",
                },
            }
        },
    });
});
