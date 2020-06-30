$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    if ($(window).width() > 992) {
        $('.fltr-select, .add-select').select2({
            minimumResultsForSearch: Infinity
        });
    }
    if ($(window).width() <= 991) {
        $(".fltr-select").addClass("mobile-select");
        $(".add-select").addClass("mobile-select");
        $(".fltr-select").wrap('<div class="mobile-select-cont"></div>');
        $(".add-select").wrap('<div class="mobile-select-cont"></div>');

        ///////////////menu/////////////////////
        $('.menu-icon').click(function () {
            $("nav").fadeIn(300);
            $(".nav-cont").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.close-icon').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }

    $(".input-file").change(function () {
        var file = $('.input-file')[0].files[0]
        if (file) {
            $(".file-text").html(file.name)
        }
        else {
            $(".file-text").html("+ أرفق صورة صك الارض")
        }
    });
});