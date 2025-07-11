let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let timer = null;
let seconds = 0;
function formatTime(sec){     
    let hrs = Math.floor(sec /3600);
    let mins = Math.floor((sec % 3600) /60);
    let secs = sec % 60;
    return[
        hrs.toString().padStart(2, '0'),
        mins.toString().padStart(2,'0'),
        secs.toString().padStart(2,'0')
    ].join(':'); 
}
function startTimer() {
    if(timer !== null) return; 
    timer = setInterval(() => {
        seconds++;
        timerDisplay.textContent = formatTime(seconds);
    },1000);
}
function stopTimer(){
    clearInterval(timer);
    timer=null;
}
function resetTimer(){
    stopTimer();
    seconds =0;
    timerDisplay.textContent ="00:00:00";
}
startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click',stopTimer);
resetBtn.addEventListener('click',resetTimer);
