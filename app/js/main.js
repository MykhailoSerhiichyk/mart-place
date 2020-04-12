$(function(){

    $(".rate-star").rateYo({
        starWidth: "15px",
        rating: 4.6,
        readOnly: true
      });

    $('.product-slider__inner').slick({

    });
    
    var mixer = mixitup('.product-mixitup__inner-box');

    $('.folowers-slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('select').styler();


});