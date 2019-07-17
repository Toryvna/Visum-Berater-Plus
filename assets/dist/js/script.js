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


});


