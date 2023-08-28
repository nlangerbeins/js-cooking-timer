'use strict';
const btnBoiled = document.querySelector('#eggs_boiled');
const btnSoft = document.querySelector('#eggs_soft');
const btnMedium = document.querySelector('#eggs_medium');
const btnHard = document.querySelector('#eggs_hard');

const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnReset = document.querySelector('#reset');

const countdown = document.querySelector('#countdown');


const timerBoiled = 3;
let timerBoiledSeconds =  timerBoiled * 60;
let timerID;

const timerSoftboiled = 6;
let timerSoftboiledSeconds = timerSoftboiled * 60;  

const timerMediumboiled = 8;
let timerMediumboiledSeconds = timerMediumboiled * 60; 

const timerHardboiled = 11;
let timerHardboiledSeconds = timerHardboiled * 60; 


let minutes;
let seconds;

const player = document.querySelector('#player');

// If button Boiled is pressed
btnBoiled.addEventListener('click', () => {
    calculateTime ();
    btnBoiled.style.pointerEvents = 'none'; //buttn Boiled is disabled
    btnBoiled.classList.add ('chosen');
    btnSoft.style.pointerEvents = 'none';
    btnSoft.classList.add ('disabled');
    btnMedium.style.pointerEvents = 'none';
    btnMedium.classList.add ('disabled');
    btnHard.style.pointerEvents = 'none';
    btnHard.classList.add ('disabled');
    
    //If button Start is pressed, countdown begins.
    btnStart.addEventListener ('click', () => {
        timerID = setInterval( calculateTime, 1000);
        btnStart.style.pointerEvents = 'none';
        btnStop.style.pointerEvents = 'auto';
    })

    //If button Pause is pressed, countdown paused.
    btnStop.addEventListener('click', () => {
        stopTimer ();
        btnStart.style.pointerEvents = 'auto';
        btnStop.style.pointerEvents = 'none';
    } )

    function calculateTime () {   
        let minutes = Math.floor(timerBoiledSeconds/60);
        let seconds = timerBoiledSeconds%60;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        countdown.textContent = `${minutes} : ${seconds}`;
        timerBoiledSeconds--;   

        if(timerBoiledSeconds < 0) {
            timerBoiledSeconds = 0;
            stopTimer ();
            countdown.textContent = '00 : 00'
            player.play();  
        }
    }
});


/*--------------Button Soft Boiled-----------------*/
btnSoft.addEventListener('click', () => {
    calculateTime ();
    btnSoft.classList.add ('chosen');
    btnSoft.style.pointerEvents = 'none'; //buttn Boiled is disabled
    btnBoiled.style.pointerEvents = 'none';
    btnBoiled.classList.add ('disabled');
    btnMedium.style.pointerEvents = 'none';
    btnMedium.classList.add ('disabled');
    btnHard.style.pointerEvents = 'none';
    btnHard.classList.add ('disabled');
    
    
    //If button Start is pressed, countdown begins.
    btnStart.addEventListener ('click', () => {
        timerID = setInterval(calculateTime, 1000);
        btnStart.style.pointerEvents = 'none';
        btnStop.style.pointerEvents = 'auto';
    })

    //If button Pause is pressed, countdown paused.
    btnStop.addEventListener('click', () => {
        stopTimer ();
        btnStart.style.pointerEvents = 'auto';
        btnStop.style.pointerEvents = 'none';
    } )

    function calculateTime () {     
        minutes = Math.floor(timerSoftboiledSeconds/60);
        seconds = timerSoftboiledSeconds%60;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        countdown.textContent = `${minutes} : ${seconds}`;
        timerSoftboiledSeconds--;

        if(timerSoftboiledSeconds < 0) {
            timerSoftboiledSeconds = 0;
            stopTimer ();
            countdown.textContent = '00 : 00';  
            player.play();  
        }
    }
})

/*--------------Button Medium Boiled-----------------*/
btnMedium.addEventListener('click', () => {
    calculateTime ();
    btnMedium.classList.add ('chosen');
    btnMedium.style.pointerEvents = 'none'; //buttn Boiled is disabled
    btnBoiled.style.pointerEvents = 'none';
    btnBoiled.classList.add ('disabled');
    btnSoft.style.pointerEvents = 'none';
    btnSoft.classList.add ('disabled');
    btnHard.style.pointerEvents = 'none';
    btnHard.classList.add ('disabled');
    
    
    //If button Start is pressed, countdown begins.
    btnStart.addEventListener ('click', () => {
        timerID = setInterval(calculateTime, 1000);
        btnStart.style.pointerEvents = 'none';
        btnStop.style.pointerEvents = 'auto';
    })

    //If button Pause is pressed, countdown paused.
    btnStop.addEventListener('click', () => {
        stopTimer ();
        btnStart.style.pointerEvents = 'auto';
        btnStop.style.pointerEvents = 'none';
    } )

    function calculateTime () {     
        minutes = Math.floor(timerMediumboiledSeconds/60);
        seconds = timerMediumboiledSeconds%60;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        countdown.textContent = `${minutes} : ${seconds}`;
        timerMediumboiledSeconds--;

        if(timerMediumboiledSeconds < 0) {
            timerMediumboiledSeconds = 0;
            countdown.textContent = '00 : 00';  
            stopTimer ();
            player.play();  
        }
    }
})

/*--------------Button Hard Boiled-----------------*/
btnHard.addEventListener('click', () => {
    calculateTime ();
    btnHard.classList.add ('chosen');
    btnHard.style.pointerEvents = 'none'; //buttn Boiled is disabled
    btnBoiled.style.pointerEvents = 'none';
    btnBoiled.classList.add ('disabled');
    btnSoft.style.pointerEvents = 'none';
    btnSoft.classList.add ('disabled');
    btnMedium.style.pointerEvents = 'none';
    btnMedium.classList.add ('disabled');
    
    
    //If button Start is pressed, countdown begins.
    btnStart.addEventListener ('click', () => {
        timerID = setInterval(calculateTime, 1000);
        btnStart.style.pointerEvents = 'none';
        btnStop.style.pointerEvents = 'auto';
    })

    //If button Pause is pressed, countdown paused.
    btnStop.addEventListener('click', () => {
        stopTimer ();
        btnStart.style.pointerEvents = 'auto';
        btnStop.style.pointerEvents = 'none';
    } )

    function calculateTime () {     
        minutes = Math.floor(timerHardboiledSeconds/60);
        seconds = timerHardboiledSeconds%60;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        countdown.textContent = `${minutes} : ${seconds}`;
        timerHardboiledSeconds--;

        if(timerHardboiledSeconds < 0) {
            timerHardboiledSeconds = 0;
            stopTimer ();
            countdown.textContent = `00 : 00`;  
            player.play();  
        }
    }
})

// Countdown pause
function stopTimer() {
    clearInterval(timerID);
   
}

// Button Reset
btnReset.addEventListener ('click', () => {
    location.reload();
})



