var hours = 0;
var mins = 0;
var seconds = 0;
var timer = null;

var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

var hoursTimer = document.getElementById('hours');
var minsTimer = document.getElementById('mins');
var secondsTimer = document.getElementById('seconds');

startButton.addEventListener('click', function() {
  if (!timer) {
    startTimer();
  }
});

stopButton.addEventListener('click', function() {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
});

resetButton.addEventListener('click', function() {
  hours = 0;
  mins = 0;
  seconds = 0;
  hoursTimer.innerHTML = "00:";
  minsTimer.innerHTML = "00:";
  secondsTimer.innerHTML = "00";
});

function startTimer() {
  timer = setTimeout(function() {
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      mins++;
      if (mins > 59) {
        mins = 0;
        hours++;
        if (hours < 10) {
          hoursTimer.innerHTML = "0" + hours + ":";
        } else {
          hoursTimer.innerHTML = hours + ":";
        }
      }      
      if (mins < 10) {                     
        minsTimer.innerHTML = "0" + mins + ":";
      } else {
        minsTimer.innerHTML = mins + ":";
      }
    }
    if(seconds < 10) {
      secondsTimer.innerHTML = "0" + seconds;
    } else {
      secondsTimer.innerHTML = seconds;
    }
    startTimer();
  }, 1000);
}
    
  