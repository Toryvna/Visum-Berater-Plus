$(document).ready(function(){
    $('.accordion-item .top').on('click', function(){
        $(this).parent().toggleClass('active');
    });

});