//var submitEl = document.querySelector("#tip-amount");
var totalEL = document.querySelector("#input");
var tipEL = document.querySelector("#tip-amount");

submitEl.addEventListener("click", function(event) {
  event.preventDefault();
  updateValue(submitEl);
  console.log(submitEl);
  
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
});


//const input = document.querySelector('form');
//const log = document.getElementById('values');

function updateValue(e) {
  var log = e * .20; 
  log.textContent;
}