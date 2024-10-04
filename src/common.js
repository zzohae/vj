window.addEventListener('load', function(){
  //햄버거버튼
  const allMenubtn = this.document.querySelector("#hd_allmenu_bby");

  allMenubtn.addEventListener('click', function(){
    document.body.classList.toggle('menuOpen');
  })

  const mainBanner = new Swiper('#mainBanner .swiper', {
    slidesPerView: 1.4,
    spaceBetween: -50,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });
});