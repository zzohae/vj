window.addEventListener('load', function(){
  const mainBanner = new Swiper('#mainBanner .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    // centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 2000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    draggable: true,
  });
});