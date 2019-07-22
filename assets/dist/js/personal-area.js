$(document).ready(function(){
    
    //Tabs
    $('.tabsList li').on('click', function(){
        if ($(window).width() < 768){
            $("#current_value").html($(this).html());
            $("#current_menu").slideToggle();
        }
        var dataTab = $(this).data('tab');
        $('.tabsList li').removeClass('active');
        $('.tab-content').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    //mobile tabs like select
    $("#current_value").click(function(){
        $("#current_menu").slideToggle();
        $(this).toggleClass('show')
    });

    //upload image 
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('.preview').html('<img src="' + e.target.result + '">' );
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#file").change(function(){
        readURL(this);
    });
      

});

//js для выбора даты
window.onload = function () {

    var day = new Date,
        md = (new Date(day.getFullYear(), day.getMonth() + 1, 0, 0, 0, 0, 0)).getDate(),
        $month_name = "01 02 03 04 05 06 07 08 09 10 11 12".split(" ");

    function set_select(a, c, d, e) {  
        var el = document.getElementsByName(a)[0];
        for (var b = el.options.length = 0; b < c; b++) {
            el.options[b] = new Option(a == 'month' ? $month_name[b] : b + d, b + d);
         }
        el.options[e] && (el.options[e].selected = !0);
    }
    set_select("day", md, 1, day.getDate() - 1);
    set_select("month", 12, 1, day.getMonth());
    set_select("year", 70, day.getFullYear() - 70);


    var year = document.getElementById('year');
    var month = document.getElementById("month");

    function check_date() {
        var a = year.value | 0,
            c = month.value | 0;
        md = (new Date(a, c, 0, 0, 0, 0, 0)).getDate();
        a = document.getElementById("day").selectedIndex;
        set_select("day", md, 1, a)
    };

    if (document.addEventListener) {
        year.addEventListener('change', check_date, false);
        month.addEventListener('change', check_date, false);

    } else {
        year.detachEvent('onchange', check_date);
        month.detachEvent('onchange', check_date);
    }

    $('#day').prepend($("<option value='' selected='selected'>дата</option>"));
    $('#month').prepend($("<option value='' selected='selected'>мес</option>"));
    $('#year').prepend($("<option value='' selected='selected'>год</option>"));
    
    var custSelect = $('select');
  
    // Options for custom Select
    jcf.setOptions('Select', {
        wrapNative: false,
        wrapNativeOnMobile: false,
        fakeDropInBody: false,
        maxVisibleItems: 10
    });
    
    jcf.replace(custSelect);

}