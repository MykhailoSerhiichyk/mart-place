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

    $('.singles-content__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.singles-content__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.singles-content__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
    });

    $('.blog__aside__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.blog__aside__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.blog__aside__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
    });

    var mixer = mixitup('.product-mixitup__inner-box');

});