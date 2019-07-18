$(document).ready(function(){

    jcf.replaceAll();
    
    var bannerSlider = new Swiper('.banner__slider', {
        slidesPerView: 3,
        breakpoints: {
            1023: {
                slidesPerView: 1
            }
        },
        navigation: {
            nextEl: '.sw-button-next',
            prevEl: '.sw-button-prev',
        },
    });

    var slider_tabs = undefined;
    function initSwiper() {
        var screenWidth = $(window).width();
        if(screenWidth < 768 && slider_tabs == undefined) {            
            slider_tabs = new Swiper('.slider_tabs', {
                slidesPerView: 3,
                loop: true,
                navigation: {
                    nextEl: '.sw-button-next',
                    prevEl: '.sw-button-prev'
                },
          });
        } else {
            // slider_tabs.destroy();
            slider_tabs = undefined;
            $('.slider_tabs .swiper-wrapper').removeAttr('style');
            $('.slider_tabs .swiper-slide').removeAttr('style');            
        }        
    }
    initSwiper();
    

    //Tabs
    $('.filter-items').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.filter-items').removeClass('active');
        $('.tab-item').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });
});