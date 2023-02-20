const initMobileSwiper = function () {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.17,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            360: {
                slidesPerView: 1.25,
            },
            400: {
                slidesPerView: 1.6,
            },
            460: {
                slidesPerView: 1.8,
            },
            520: {
                slidesPerView: 2.1,
            },
            600: {
                slidesPerView: 2.4,
            },
            680: {
                slidesPerView: 2.6,
            }
        }
    });

    if (document.documentElement.clientWidth >= 768) {
        swiper.destroy()
    }
};

initMobileSwiper()
window.addEventListener('resize', initMobileSwiper);






