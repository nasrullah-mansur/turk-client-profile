$(document).ready(function () {
    "use strict";

   
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

    $('.input-item .eye-btn').on('click', function() {
        let inputItem = $(this).parents('.input-item').find('input');
        inputItem.attr('type', function() {
            if(inputItem.attr('type') === 'text') {
                return 'password';
            } else {
                return 'text';
            }
        })
        $(this).children('i').toggleClass('la-copy la-eye-slash')
    })

    $('.nice-select').niceSelect();

    // Copy text;
    function copyToClipboard(text) {
        const elem = document.createElement('textarea');
        elem.value = text;
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        document.body.removeChild(elem);
     }

    $('.client-dashboard .right-side .form-content .input-item .copy-btn').on('click', function() {
        let text = document.getElementById('copy-text').value;
        copyToClipboard(text)
    })

});