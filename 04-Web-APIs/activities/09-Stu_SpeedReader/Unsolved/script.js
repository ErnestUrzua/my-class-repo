var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 6;

function prepareRead() {
  // Create the countdown timer.
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
}

  function speedRead() {
    // Print words to the screen one at a time.
    function sendMessage() {
      var res = poem.split(" ");
      document.getElementById("main").innerHTML = res;
    }

  }

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

prepareRead();
setTime();
speedRead();