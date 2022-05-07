
(()=> {
    if(window.innerWidth > 750 ) {
        const swiperEl = document.querySelector('.js-swiper');
        swiperEl.classList.add('swiper');
        swiperEl.children[0].classList.add('swiper-wrapper');
        [...swiperEl.children[0].children].forEach(el=>el.classList.add('swiper-slide'))
        const swiper = new Swiper('.js-swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 2,
            spaceBetween: 40,
            breakpoints: {
                1260: {
                    spaceBetween: 45,
                    slidesPerView: 3
                }
            }
        })

        const slides = document.querySelectorAll('.program__slide');

        const tabs = document.querySelectorAll('.program__tab-name');
        const updateSlide = (index) => {
            slides.forEach(slide => slide?.classList.remove('program__slide_active'))
            tabs.forEach(tab => tab?.classList.remove('program__tab-name_active'))
            slides[index]?.classList.add('program__slide_active')
            tabs[index]?.classList.add('program__tab-name_active')
        }

        tabs.forEach((tab,index)=> {
            tab.addEventListener('click',()=>updateSlide(index))
        })
    } else {
        const swiperEl = document.querySelector('.js-program-slider');
        swiperEl.classList.add('swiper');
        swiperEl.children[0].classList.add('swiper-wrapper');
        [...swiperEl.children[0].children].forEach(el=>el.classList.add('swiper-slide'))
        const swiper = new Swiper('.js-program-slider', {
            pagination: {
                el: '.js-program-slider .swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 40,
        })
    }
    const dropdown = document.querySelector('.header__nav')
    const btn = document.querySelector('.header__menu-btn');
    btn.addEventListener('click',()=> {
        btn.classList.toggle('open');
        dropdown.classList.toggle('active');
    })
    const scroll = new SmoothScroll('a[href*="#"]',{
        header: 'header.header'
    });
})()
