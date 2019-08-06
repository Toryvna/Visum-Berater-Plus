$(document).ready(function(){


    //add applicant
    var max_fields = 3;
    var num = 1;
    var content = $('.main-clone').clone().removeClass('main-clone');
    // console.log(content.html());
    $('.applicants-wrap').each(function () {
        
        var $wrapper = $('.multi-fields', this);
        $("#addApplicant", $(this)).click(function (e) {
            if (num < max_fields) {
                num++;
                $(content, $wrapper).clone(true).appendTo($wrapper).addClass('clone' + num).find('.numApplicant').text(num);
                // $wrapper.addClass('class');
                 jcf.replace($('.clone' + num).find('select'));
                if(num == max_fields){
                    $('#addApplicant').hide();
                }
            }
        });
    });

    //add place
    var el = 1;
    var con = $('.main-place').clone().removeClass('main-place');

    $('.places-wrap').each(function () {
        var $wrapper = $('.multi-places', this);
        $(".addPlace", $(this)).click(function (e) {
            el++;
            $(con, $wrapper).clone(true).appendTo($wrapper).addClass('element' + el);
            // $wrapper.addClass('class');
             jcf.replace($('.element' + el).find('select'));

            // $('.multi-place:first-child', $wrapper).clone(true).appendTo($wrapper);
        });
    });

    // Options for custom Select
    jcf.setOptions('Select', {
        wrapNative: false,
        wrapNativeOnMobile: false,
        fakeDropInBody: false,
        maxVisibleItems: 10
    });
    
    jcf.replace($('.main-clone select, .main-place select, .currentSelect'));

    //datepicker
    $( ".datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd.mm.yy',
        yearRange: "nn:+10"
    });

    $( ".datepicker-year" ).datepicker({
        changeYear: true,
        dateFormat: 'yy',
        yearRange: "-100:+0",
        onClose: function(dateText, inst) { 
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).datepicker('setDate', new Date(year, 1));
        }
    });

    //show/hide accordion
    $('.accordion-heading').on('click', function(){
        $(this).parent().toggleClass('active');
    });

    //show all applicants
    $('.applicants-row .show-all').on('click', function(){
        $(this).hide();
        $(this).closest('.applicants-row').addClass('show');
    });

    //переход между шагами
    $('.form-buttons button').on('click', function(){
        $('.step').removeClass('active');
        $('.' + $(this).attr('data-step')).addClass('active');
    })


});
