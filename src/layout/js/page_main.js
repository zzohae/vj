window.addEventListener('load', function(){
  const mainBanner = new Swiper('#mainBanner .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 2000,
    pagination: {
      el: ".indicate",
      clickable: true,
      renderBullet: function (index, className) {
        var swiperSlide = this.slides[index];

        var btnMsg = swiperSlide.dataset.btnmsg;

        return '<span class="' + className + ' w-auto h-auto px-3 py-2 mx-3 border border-white">' + btnMsg + '</span>';
      },
    },
    draggable: true,
    on : {
      init : function(){

      },
      realIndexChange: function() {
        // 실제슬라이드가 변경되면
      
       const activeIndex = this.activeIndex; // 현재 활성화된 슬라이드의 인덱스
       const realIndex = this.realIndex; // 실제 슬라이드의 인덱스
      console.log(activeIndex,realIndex )

      const classesToRemove = Array.from(document.body.classList).filter(className => className.startsWith('slide-'));
      document.body.classList.remove(...classesToRemove);

      document.body.classList.add(`slide-${realIndex}`);
    }

    }
  });
})