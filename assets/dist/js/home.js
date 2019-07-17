$(document).ready(function(){
    
    var noveltySlider = new Swiper('.banner__slider', {
        slidesPerView: 3,
        breakpoints: {
            768: {
                slidesPerView: 1
            }
        },
        navigation: {
            nextEl: '.sw-button-next',
            prevEl: '.sw-button-prev',
        },
    });
});