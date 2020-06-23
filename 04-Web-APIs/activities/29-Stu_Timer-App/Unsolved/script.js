var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds ;
var secondsElapsed = 0;
var interval;

function startTimer() {
  // Write code to start the timer here

  totalSeconds = workMinutesInput.value * 60;
  //console.log(totalSeconds);
  setInterval(function () {
    totalSeconds--;
    //console.log(totalSeconds);
    secondsDisplay.textContent = totalSeconds;
    if (totalSeconds === 0) {
      clearInterval(totalSeconds);

    }

  }, 1000);

   
  
  console.log(secondsDisplay);

}

playButton.addEventListener("click", startTimer);



  
