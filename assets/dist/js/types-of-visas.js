$(document).ready(function(){
    $('.sideMenu_heading').on('click', function(){
        $('.sideMenu_list').toggleClass('open');
    })

    //fixing sidebar
    var $window = $(window);  //окно
    var $wrap = $('.sideMenu'); //весь сайдбар
    var $sidebar = $(".sideMenu_wrap"); //элемент, который будет фиксированным
    var $headerHeight = $('.header').height(); //высота шапки сайта
    var $sidebarOffset = $sidebar.offset(); //текущее положение фиксированного элемента
    var $breadCrumbs = $('.bread-crumbs').height(); //высота хлебных крошек
    function sidebarFix() {
        var $sidebarWidth = $('.sideMenu').width(); //ширина сайдбара
        var $sidebarHeight = $sidebar.height();
        var $footerOffsetTop = $("footer").offset().top;
        var $contentHeight = $('#text-page').height();
        if ($window.width() >= 1024){
            if ($contentHeight > ($sidebarHeight)) {
                if ($window.scrollTop() > ($sidebarOffset.top)) {
                    $wrap.addClass("fixed");
                } else {
                    $wrap.removeClass("fixed");
                }
                if ($window.scrollTop() + $sidebarHeight + $breadCrumbs + 60 > $footerOffsetTop) {
                  $sidebar.css({
                      "bottom": -50,
                      "top": 'inherit',
                      'position': 'absolute',
                      'width' : $sidebarWidth
                    });
    
                } else {
                    $sidebar.css({
                        "bottom": 'inherit',
                        "top": $headerHeight + $breadCrumbs,
                        'position': 'fixed',
                        'width' : $sidebarWidth
                      });
                }
                if ($window.scrollTop() <=  ($headerHeight)){
                    $sidebar.css({
                        "bottom": 'inherit',
                        "top": '0',
                        'position': 'static',
                    });
                }
            }
        }else{
            $sidebar.css({
                "bottom": 'inherit',
                "top": 'inherit',
                'position': 'inherit',
                'width' : '100%',
            });
        }
    }
    sidebarFix();

    $window.scroll(function () {
        sidebarFix();
    });

    $window.resize(function () {
        sidebarFix();
    });
});