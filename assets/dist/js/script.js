$(document).ready(function(){
    //mobile menu
    $('.toggle-menu').on('click touch', function () {
        $('.header__menu').toggleClass('show');
    });
    $('.closeMenu').on('click touch', function () {
        $('.header__menu').removeClass('show');
    });
    $(document).mouseup(function(e){
        var menu = $('.header__menu.show');
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('show');
        }

    });
    //end mobile menu

    //открытие страницы или попапа в зависимости от размера экрана
    $('.open-visas_instructions__popup').on("click",function(e){
        if($(window).width() > 1024) {
            e.preventDefault();
            $('.overlay-contacts').removeClass('active');
            $('.overlay-visas_instructions').addClass('active');
        }
    });
    $('.overlay-visas_instructions .closeBtn').on("click",function(){
        $('.overlay-visas_instructions').removeClass('active');
    });

    $('.open-contacts__popup').on("click",function(e){
        if($(window).width() > 1024) {
            e.preventDefault();
            $('.overlay-visas_instructions').removeClass('active');
            $('.overlay-contacts').addClass('active');
        }
    });
    $('.overlay-contacts .closeBtn').on("click",function(){
        $('.overlay-contacts').removeClass('active');
    });

    if($(window).width() > 1024) {
        $('.open-visas_instructions__popup a').attr('href', 'javascript:void(0)');
        $('.open-contacts__popup a').attr('href', 'javascript:void(0)');
    }
});


