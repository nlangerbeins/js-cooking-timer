const btnBoiled = document.querySelector('#eggs_boiled');
const btnSoft = document.querySelector('#eggs_soft');
const btnMedium = document.querySelector('#eggs_medium');
const btnHard = document.querySelector('#eggs_hard');

const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnReset = document.querySelector('#reset');

const countdown = document.querySelector('#countdown');
const player = document.querySelector('#player');

let timerID;
let minutes;
let seconds;

let timer3min = 3 * 60;
let timer6min = 6 * 60;
let timer8min = 8 * 60;
let timer11min = 11 * 60;

function timer(time) {
  //If button Start is pressed, countdown begins.
  btnStart.addEventListener('click', () => {
    timerID = setInterval(calculateTime, 1000);
    btnStart.style.pointerEvents = 'none';
    btnStop.style.pointerEvents = 'auto';
  });

  // calculate time
  function calculateTime() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    time--;

    if (time < 0) {
      time = 0;
      stopTimer();
      countdown.textContent = '00 : 00';
      player.play();
    }
  }
}

//If button Pause is pressed, countdown paused.
btnStop.addEventListener('click', () => {
  stopTimer();
  btnStart.style.pointerEvents = 'auto';
  btnStop.style.pointerEvents = 'none';
});

// Countdown pause
function stopTimer() {
  clearInterval(timerID);
}

// Button Reset
btnReset.addEventListener('click', () => {
  location.reload();
});

/*--------------Button Boiled-----------------*/
btnBoiled.addEventListener('click', () => {
  timer(timer3min);
  countdown.textContent = `03 : 00`;

  btnBoiled.style.pointerEvents = 'none'; //buttn Boiled is disabled
  btnBoiled.classList.add('chosen');
  btnSoft.style.pointerEvents = 'none';
  btnSoft.classList.add('disabled');
  btnMedium.style.pointerEvents = 'none';
  btnMedium.classList.add('disabled');
  btnHard.style.pointerEvents = 'none';
  btnHard.classList.add('disabled');
});

/*--------------Button Soft Boiled-----------------*/
btnSoft.addEventListener('click', () => {
  timer(timer6min);
  countdown.textContent = `06 : 00`;

  btnSoft.classList.add('chosen');
  btnSoft.style.pointerEvents = 'none'; //buttn Boiled is disabled
  btnBoiled.style.pointerEvents = 'none';
  btnBoiled.classList.add('disabled');
  btnMedium.style.pointerEvents = 'none';
  btnMedium.classList.add('disabled');
  btnHard.style.pointerEvents = 'none';
  btnHard.classList.add('disabled');
});

// /*--------------Button Medium Boiled-----------------*/
btnMedium.addEventListener('click', () => {
  timer(timer8min);
  countdown.textContent = `08 : 00`;

  btnMedium.classList.add('chosen');
  btnMedium.style.pointerEvents = 'none'; //buttn Boiled is disabled
  btnBoiled.style.pointerEvents = 'none';
  btnBoiled.classList.add('disabled');
  btnSoft.style.pointerEvents = 'none';
  btnSoft.classList.add('disabled');
  btnHard.style.pointerEvents = 'none';
  btnHard.classList.add('disabled');
});

// /*--------------Button Hard Boiled-----------------*/
btnHard.addEventListener('click', () => {
  timer(timer11min);
  countdown.textContent = `11 : 00`;

  btnHard.classList.add('chosen');
  btnHard.style.pointerEvents = 'none'; //buttn Boiled is disabled
  btnBoiled.style.pointerEvents = 'none';
  btnBoiled.classList.add('disabled');
  btnSoft.style.pointerEvents = 'none';
  btnSoft.classList.add('disabled');
  btnMedium.style.pointerEvents = 'none';
  btnMedium.classList.add('disabled');
});
