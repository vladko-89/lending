/* eslint-disable quote-props */
/* eslint-disable no-use-before-define */
const timer = (() => {
  const timerInit = () => {
    const getTimeRemaining = (endtime) => {
      const t = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
      };
    };

    const initializeClock = (id, endtime) => {
      const clock = document.getElementById(id);
      const daysSpan = clock.querySelector('.days');
      const hoursSpan = clock.querySelector('.hours');
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');

      const updateClock = () => {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = (`0${t.hours}`).slice(-2);
        minutesSpan.innerHTML = (`0${t.minutes}`).slice(-2);
        secondsSpan.innerHTML = (`0${t.seconds}`).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      };

      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    };
    const deadline = 'December 31 2021';
    // const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('countdown', deadline);
  };

  const init = () => {
    const element = document.getElementById('countdown');
    if (typeof (element) !== 'undefined' && element != null) {
      timerInit();
    }
  };

  return {
    init,
  };
})();

export default timer;
