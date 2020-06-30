$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    if ($(window).width() > 767) {
        $('.fltr-select').select2({
            minimumResultsForSearch: Infinity
        });
    }
    if ($(window).width() <= 767) {
        $(".fltr-select").addClass("mobile-select");
        $(".fltr-select").wrap('<div class="mobile-select-cont"></div>');

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
});