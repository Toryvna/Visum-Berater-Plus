$(document).ready(function(){


    //add applicant
    var max_fields = 3;
    var num = 1;
    var content = $('.main-clone').clone().removeClass('main-clone');

    $('.applicants-wrap').each(function () {
        
        var $wrapper = $('.multi-fields', this);
        $("#addApplicant", $(this)).click(function (e) {
            if (num < max_fields) {
                num++;
                $(content, $wrapper).clone(true).appendTo($wrapper).addClass('clone' + num).find('.numApplicant').text(num);

                jcf.replace($('.clone' + num).find('select'));
                $( ".clone" + num ).find('.datepicker-year').datepicker({
                    changeYear: true,
                    dateFormat: 'yy',
                    yearRange: "-100:+0",
                    onClose: function(dateText, inst) { 
                        var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                        $(this).datepicker('setDate', new Date(year, 1));
                    }
                });
                $( ".clone" + num ).append('<div class="remove-field">X</div>');

                $('.remove-field').on('click', function(){
                    $(this).closest('.multi-field').remove();
                    num--;
                })

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
    $('.accordion-heading label').on('click', function(){
        $(this).closest('.accordion').toggleClass('active');
    });

    //show all applicants
    $('.applicants-row .show-all').on('click', function(){
        $(this).hide();
        $(this).closest('.applicants-row').addClass('show');
    });

    //show docs
    $('.showDocs').on('click', function(){
        $(this).toggleClass('show');
        $('.hiddenDocs').toggleClass('show');
    });

    //переход между шагами
    $('.form-buttons .btn').on('click', function(){
        $('.step').removeClass('active');
        $('.' + $(this).attr('data-step')).addClass('active'); 

        if($('.step.active').hasClass('step1')){
            $('.visa__top>.item').removeClass('active');
            $('.visa__top>.item').eq(0).addClass('active');
        }else if($('.step.active').hasClass('step2')){
            $('.visa__top>.item').removeClass('active');
            $('.visa__top>.item').eq(1).addClass('active');
            $('.visa__top>.item').eq(0).addClass('done');
        }else{
            $('.visa__top>.item').removeClass('active');
            $('.visa__top>.item').eq(2).addClass('active');
            $('.visa__top>.item').eq(1).addClass('done');
        }

        window.scrollTo(0, $('.step.active .step__inner').offset().top - 100);
        
        // $('.visa__top .item.done').on('click', function(){
        //     $('.step').removeClass('active');
        //     $('.' + $(this).attr('data-step')).addClass('active'); 
    
        //     $('.visa__top .item').removeClass('active');
        //     $(this).addClass('active');
        // });
    });
    $('body').on('click', '.visa__top .item.done', function() {
        $('.step').removeClass('active');
        $('.' + $(this).attr('data-step')).addClass('active'); 

        $('.visa__top .item').removeClass('active');
        $(this).addClass('active');
        $(this).next().removeClass('done');
    });

    // datepicker range
    $( function() {
        var dateFormat = "dd.mm.yy",
          from = $( ".from" )
            .datepicker({
              defaultDate: "+1w",
              changeMonth: true,
              changeYear: true,
              yearRange: "-100:+100",
              dateFormat: "dd.mm.yy",
            })
            .on( "change", function() {
              to.datepicker( "option", "minDate", getDate( this ) );
            }),
          to = $( ".to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            changeYear: true,
            yearRange: "-100:+100",
            dateFormat: "dd.mm.yy",
          })
          .on( "change", function() {
            $(this).closest('.range-calendar').find(from).datepicker( "option", "maxDate", getDate( this ) );
          });
     
        function getDate( element ) {
          var date;
          try {
            date = $.datepicker.parseDate( dateFormat, element.value );
          } catch( error ) {
            date = null;
          }
     
          return date;
        }
    });

    //скрыть заявителя
    $('.stepResults .applicant .row-heading').on('click', function(){
        $(this).parent().toggleClass('hide');
    });

    //скрытие/открытие полей
    $('.showBlk input[type="radio"]').click(function () {
        if ($(this).attr("value") == "yes") {
            $(this).closest('.showBlk').addClass('show');
        }
        if ($(this).attr("value") == "no") {
            $(this).closest('.showBlk').removeClass('show');

        }
    });

    $('.showBlk input[type="radio"]').trigger('click'); 

    //сктрытие/открытие инфы для доставки
    $('.addressCoincide input[type="checkbox"]').click(function () {
        if( $(this).is(':checked')) {
            $(".addressCoincide-blk").removeClass('show');
        } else {
            $(".addressCoincide-blk").addClass('show');
        }
    });

    //показывать/скрывать блок, если предусмотрена доставка
    $('.delivery_wrap input[type="radio"]').click(function () {
        if ($(this).attr("value") == "without-delivery") {
            $('.shippingIncluded').hide();
        }else{
            $('.shippingIncluded').show();
        }
    });



});
