const swiperPhotosProyect = new Swiper('.swiperPhotosProyect', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceslidesPerView: 1,
    breakpoints: {
      1008: {
        spaceBetween: 400
      }
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    }
  });