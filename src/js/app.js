/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

// import burgerMenu from './modules/burger-menu';
import burgerMenu from './modules/burger-menu';
import swiperSlider from './modules/slider';
import timer from './modules/timer';
import close from './modules/close-popup';
import video from './modules/video';
import tabs from './modules/tabs';

(($) => {
  // When DOM is ready
  $(() => {
    burgerMenu.init();
    swiperSlider.init();
    timer.init();
    close.init();
    video.init();
    tabs.init();
    const pre = document.querySelector('pre');
    if (typeof (pre) !== 'undefined' && (pre) != null) {
      const ps = new PerfectScrollbar(pre);
    }
  });
})(jQuery);
