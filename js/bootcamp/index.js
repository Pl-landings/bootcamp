if(window.screen.width > 750) {
    const swiperEl = document.querySelector('.js-swiper');
    swiperEl.classList.add('swiper');
    swiperEl.children[0].classList.add('swiper-wrapper');
    [...swiperEl.children[0].children].forEach(el=>el.classList.add('swiper-slide'))
    const swiper = new Swiper('.js-swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 'auto',
        spaceBetween: 40,
        breakpoints: {
            1280: {
                spaceBetween: 45,
            }
        }
    })
}
