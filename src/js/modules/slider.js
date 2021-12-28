/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

import { data } from 'jquery';

/* eslint-disable no-undef */
const swiperSlider = (() => {
  const roadmapInit = new Swiper('.js-roadmap-slider', {
    enabled: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 800,
    navigation: {
      nextEl: '.roadmap-button-next',
    },
    breakpoints: {
      768: {
        enabled: false,
        slidesPerView: 4,
      },
    },
  });
  const partnersInit = new Swiper('.js-partners-slider', {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    speed: 800,
    centeredSlides: true,
    navigation: {
      nextEl: '.partners-button-next',
      prevEl: '.partners-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
      },
    },
  });
  const buildInit = new Swiper('.js-build-slider', {
    direction: 'vertical',
    slidesPerView: 7,
    loop: true,
    centeredSlides: true,
    mousewheel: false,
    slideToClickedSlide: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  const init = () => { };

  return {
    init,
  };
})();
export default swiperSlider;
