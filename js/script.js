$(function () {

    'use strict';

    // banner slider part start
    $('.bann_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    // banner slider part end



    // portfolio slider part start
    $('.portfolio_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fa-solid fa-arrow-left prev_arr"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-right nxt_arr"></i>',
    });
    // portfolio slider part end
    
});