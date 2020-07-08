$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    $('.nav-a.log').click(function () {
        $(".log-modal").fadeIn(300);
        $(".mo-modal").addClass("open");
        $("body").addClass("overflow");
    });
    $('.modal-absolute').click(function () {
        $(".log-modal").fadeOut(400);
        $(".mo-modal").removeClass("open");
        $("body").removeClass("overflow");
        if ($(window).width() <= 991) {
            $("body").addClass("overflow");
        }
    });
    $('.mo-modal').click(function (e) {
        e.stopPropagation();
    });
    $('.close-modal').click(function () {
        $(".log-modal").fadeOut(400);
        $(".mo-modal").removeClass("open");
        $("body").removeClass("overflow");
        if ($(window).width() <= 991) {
            $("body").addClass("overflow");
        }
    });

    if ($(window).width() > 992) {
        $('.fltr-select, .add-select,.contact-select').select2({
            minimumResultsForSearch: Infinity
        });
    }

    if ($(window).width() <= 991) {
        $(".fltr-select").addClass("mobile-select");
        $(".add-select").addClass("mobile-select");
        $(".contact-select").addClass("mobile-select");
        $(".fltr-select").wrap('<div class="mobile-select-cont"></div>');
        $(".add-select").wrap('<div class="mobile-select-cont"></div>');
        $(".contact-select").wrap('<div class="mobile-select-cont"></div>');

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
    $(".search-icon").click(function () {
        $(".search-icon").toggleClass("open");
        $(".fixed-form").toggleClass("open");
    });

    $('.condtion-cont input').change(function () {
        if ($(this).is(':checked')) {
            $(".add-submit").removeClass("disabled")
            $(".add-submit").removeAttr("disabled")
        } else {
            $(".add-submit").addClass("disabled")
            $(".add-submit").addAttr("disabled")
        }
    });


    $("#inputGroupFile").change(function (event) {
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            var filename = $("#inputGroupFile").val();
            filename = filename.substring(filename.lastIndexOf('\\') + 1);
            reader.onload = function (e) {
                if ($(window).width() > 992) {
                    $('#preview').attr('src', e.target.result);
                    $('.img-preview').show();
                }
                $('.file-text').text(filename);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }


    $('.add-report').click(function () {
        $(".report-form").slideToggle(400);
        $(".add-report").toggleClass("open");
    });

    $('.report-form .reset-report').click(function () {
        $(".report-form").slideUp(400);
        $(".add-report").removeClass("open");
    });
});