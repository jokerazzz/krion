$( function () {

    $('#product').on('click', function(){
        $('#product-menu').toggleClass('active');

    });
    $('#about').on('click', function(){
        $('#about-menu').toggleClass('active');

    });
    $('#contacts').on('click', function(){
        $('#contact-menu').toggleClass('active');

    });

    $('.product__item span').on('click', function(){
        $('.products__content').toggleClass('active'),
        $('#products__content').toggleClass('active'),
        $('.slider').toggleClass('active'),
        $('.header').toggleClass('active');
    });

    $('#products__content-title span').on('click', function(){
        $('.slider').removeClass('active'),
        $('.header').removeClass('active');
        $('#products__content').removeClass('active');
    });
    

    $('.menu__btn').on('click', function(){
        $('.header__menu').toggleClass('active');
    });

    $('.menu__btn').on('click', function(){
        $('.b-color').toggleClass('active');
    });

    $('.slider__item button').on('click', function(){
        $('.modal_menu').toggleClass('active'),
        $('.b-color').toggleClass('modal');
    });

    $('.close').on('click', function(){
        $('.modal_menu').removeClass('active'),
        $('.b-color').toggleClass('modal');
    });

    $('.dropdown__btn').on('click', function(){
        $('.buttons').toggleClass('active'),
        $('.fa-chevron-up').toggleClass('active');
    });
    
    $('.tabs__dropdowns span').on('click', function(){
        $('.tabs__btn button').toggleClass('active'),
        $('.fa-chevron-up').toggleClass('active');
    });

    $('#article').on('click', function(){
        $('#artic').addClass('active'),
        $('.about__item').addClass('active'),
        $('#vid').removeClass('active'),
        $('#pho').removeClass('active'),
        $('.fa-chevron-up').addClass('active');
    });

    $('#photo').on('click', function(){
        $('#pho').addClass('active'),
        $('#vid').removeClass('active'),
        $('#artic').removeClass('active'),
        $('.about__item').removeClass('active'),
        $('.fa-chevron-up').addClass('active');
    });
    $('#video').on('click', function(){
        $('#vid').addClass('active'),
        $('#pho').removeClass('active'),
        $('#artic').removeClass('active'),
        $('.about__item').removeClass('active'),
        $('.fa-chevron-up').addClass('active');
    });

    $('.media__btn').on('click', function(){
        $('.media__tabs-item').toggleClass('active'),
        $('.b-color').toggleClass('active');
    });

    
    

    $('.certification__slider').slick({
        slidesToShow: 4,
        infinite: true,
        dots: true,
        slidesToScroll:4,
        prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 660,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        },
        ]
      });


      $('.partners__slider').slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 660,
                settings: {
                arrows: false,
                }
            },
        ]
      });
      
      
    
});