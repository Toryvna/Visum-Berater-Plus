$(document).ready(function(){
    
    var custSelect = $('select');
  
    // Options for custom Select
    jcf.setOptions('Select', {
        wrapNative: false,
        wrapNativeOnMobile: false,
        fakeDropInBody: false,
        maxVisibleItems: 10
    });
    
    jcf.replace(custSelect);

    //add applicant
    var max_fields = 3;
    var num = 1;
    $('.applicants-wrap').each(function () {
        var $wrapper = $('.multi-fields', this);
        $("#addApplicant", $(this)).click(function (e) {
            if (num < max_fields) {
                num++;
                $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('.numApplicant').text(num);
                if(num == max_fields){
                    $('#addApplicant').hide();
                }
            }
        });
    });

    //add place
    $('.places-wrap').each(function () {
        var $wrapper = $('.multi-places', this);
        $(".addPlace", $(this)).click(function (e) {
            $('.multi-place:first-child', $wrapper).clone(true).appendTo($wrapper);
        });
    });

    //datepicker
    $( ".datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd.mm.yy',
        yearRange: "nn:+10"
    });

    $( ".datepicker-year" ).datepicker({
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'yy',
        onClose: function(dateText, inst) { 
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).datepicker('setDate', new Date(year, 1));
        }
    });
    $(".datepicker-year").focus(function () {
        $(".ui-datepicker-calendar").hide();
    });

    //show/hide accordion
    $('.accordion-heading').on('click', function(){
        $(this).parent().toggleClass('active');
    });


});
