$(function(){

    var mySwiper = new Swiper('.company__slider .swiper-container', {
        slidesPerView:'auto',
        loop: true,
        spaceBetween:150,
        centeredSlides: true,
        grabCursor: true,
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            720: {
                spaceBetween:140,
            },
            500: {
                spaceBetween:70,
            },
            375: {
                spaceBetween:30,
            },
            320: {
                spaceBetween:10,
            },
            
        }
        
      });

});

