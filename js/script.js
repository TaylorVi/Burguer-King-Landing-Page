var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 120,
    speed: 800,
    pagination:{
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.btn-prev-right',
        prevEl: '.btn-prev-left',
      },
    
  });

  AOS.init({
    duration: 1000,
    once: true,
    
  });