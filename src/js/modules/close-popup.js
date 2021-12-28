const closePopup = (() => {
  const CLOSE = document.querySelector('.js-close');
  const POPUP = document.querySelector('.js-popup');

  const closeInit = () => {
    CLOSE.addEventListener('click', () => {
      POPUP.style.display = 'none';
    });
  };

  const init = () => {
    if (typeof (CLOSE) !== 'undefined' && CLOSE != null) {
      closeInit();
    }
  };

  return {
    init,
  };
})();

export default closePopup;
