$(function(){

    $(".rate-star").rateYo({
        starWidth: "15px",
        rating: 4.6,
        readOnly: true
      });

    $('.product-slider__inner').slick({

    });

    $('.folowers-slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('.search select').styler();

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 320,
        from: 50,
        to: 200,
        prefix: "$"
    });

    $('.lnr-list').on('click', function(){
        $('.category__content-item').addClass('list');
        $('.lnr-list').addClass('active');
        $('.lnr-frame-expand').removeClass('active');
    });

    $('.lnr-frame-expand').on('click', function(){
        $('.category__content-item').removeClass('list');
        $('.lnr-frame-expand').addClass('active');
        $('.lnr-list').removeClass('active');
    });

    $('.aside-item__first-title').on('click', function(){
        $('.aside-item__first-list').toggleClass('active');
    });

    $('.aside-item__second-title').on('click', function(){
        $('.aside-item__second-list').toggleClass('active');
    });

    $('.aside-item__third-title').on('click', function(){
        $('.aside-item__form').toggleClass('active');
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function(){
        $('.header__top-box').toggleClass('active');
    });

    var mixer = mixitup('.product-mixitup__inner-box');

});