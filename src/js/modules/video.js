/* eslint-disable no-use-before-define */
const video = (() => {
  const overlay = document.getElementById('video-overlay');
  const vid = document.getElementById('video');
  const PLAY_BTN = document.getElementById('play-btn');

  const videoInit = () => {
    if (vid) {
      if (overlay) {
        overlay.addEventListener('click', play, false);
      }
      if (PLAY_BTN) {
        PLAY_BTN.addEventListener('click', play, false);
      }
      const play = () => {
        if (vid.paused) {
          vid.play();
          overlay.classList.remove('hide');
          PLAY_BTN.classList.add('hide');
        } else {
          vid.pause();
          overlay.classList.add('hide');
          PLAY_BTN.classList.remove('hide');
        }
      };
    }
  };

  const init = () => {
    videoInit();
  };
  return {
    init,
  };
})();

export default video;
