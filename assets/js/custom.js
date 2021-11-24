$(document).ready(function () {
    "use strict";

    $('.dashboard-content .slider').slick({
        dots: true,
        arrows: false,
    });

    $('.dashboard-header .mobile-btn .notification-toggler').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.dashboard-header .mobile-btn .profile-toggler').removeClass('active');
        $('.dashboard-header .mobile-btn .profile').hide();
        $('.dashboard-header .mobile-btn .notification').toggle();
    });

    $('.dashboard-header .mobile-btn .profile-toggler').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.dashboard-header .mobile-btn .notification').hide();
        $('.dashboard-header .mobile-btn .notification-toggler').removeClass('active');
        $('.dashboard-header .mobile-btn .profile').toggle();
    });

    $('.dashboard-header .mobile-btn .mobile-toggler, .body-overlay').on('click', function () {
        $('.dashboard-header .mobile-nav').toggle();
        $('.body-overlay').toggle();
    })

    $('.dashboard-content a.hide-offer').on('click', function (e) {
        e.preventDefault();
        let text = $(this).text();
        $('.dashboard-content .tab-content .content .list').slideToggle();
        $('.dashboard-content a.dots').toggle();

        if (text == 'Hide Offers') {
            $(this).text('Show Offers');
        }

        if(text == 'Show Offers') {
            $(this).text('Hide Offers');
        }

        if(text == 'اخفاء العروض') {
            $(this).text('عرض العروض');
        }

        if(text == 'عرض العروض') {
            $(this).text('اخفاء العروض');
        }


    })

    $('.nice-select').niceSelect();


    $('.ratting-modal .ratting input').on('click', function () {
        let inputVal = $(this).val();

        let allLabel = $('.ratting-modal .ratting label');
        Array.from(allLabel).forEach((label) => {
            let checkInput = label.querySelector('input');
            let checkIcon = label.querySelector('i').classList;

            if (checkInput.value <= inputVal) {
                label.classList.add('active');
                checkIcon.remove('far');
                checkIcon.add('fas');
            } else {
                label.classList.remove('active');
                checkIcon.remove('fas');
                checkIcon.add('far');
            }
        })

    })


    $('.dashboard-content .tab-content .content .top .btn-area span.dots').on('click', function () {
        $(this).children('a').fadeToggle();
    });


    $('.dashboard-content .tab-content .title .search form input').on('focus', function () {
        $(this).parents('form').addClass('active');
    })

    $('.dashboard-content .tab-content .title .search form input').on('blur', function () {
        $(this).parents('form').removeClass('active');
    })


    // checkout details;
    if($('.details-collapse').length > 0) {
        $('.invoice-details input').on('click', function() {
            if($(this).val() == 1 ) {
                $('.details-collapse').slideUp();
            } else {
                $('.details-collapse').slideDown();
            }
        })
    }

});