// Wibble Wobble

// This function checks whether the argument string fulfills the requirements
// for "Wibble". It should return true if the string has an even number of characters
// and false if it doesn't
function checkWibble(str) {

  // ---------- Your Code Here ----------
  if (str.length %2 === 0){
    console.log('string is even');
    return true;
  }
  else {
    console.log('string is odd')
    return false;
  }

  // ----------- End Code Area -----------

}


// This function checks whether the argument string fulfills the requirements
// for "Wobble". It should return true if the string has an odd number of vowels
// and false if it doesn't
function checkWobble(str) {

  // ---------- Your Code Here ----------
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (el === "a" || el ===  "e" || el ===  "i" || el ===  "o" || el === "u" || el ===  "y"){
          vowelCount++;
          //console.log(el);
          //console.log('vowel count incremented + ' + vowelCount)
        }
    
  }
  // str.forEach(el => {
  //   if (el === "a" || el ===  "e" || el ===  "i" || el ===  "o" || el === "u" || el ===  "y"){
  //     vowelCount++;
  //   }

    if (vowelCount %2 === 1){
      console.log('vowel count = ' + vowelCount)
      return true;
    }

  // ----------- End Code Area -----------

}


// This is the `wibbleWobble` function. It takes in an array of strings and replaces
// the elements that have an even number of characters with "Wibble" and the elements
// that have an odd number of vowels with "Wobble". If a element has both an even number
// of characters and an odd number of vowels, it should replace that element with
// "WibbleWobble". 

function wibbleWobble(arr) {
  
  // ---------- Your Code Here ----------
  arr.forEach(myFunction);
    
    function myFunction(el,i,arr) {
      if(checkWibble(el)) {
        arr[i] = 'Wibble';
      }
      else if(checkWobble(el)){
        arr[i] = 'WibbleWobble';
        //console.log(el)
      }

      else {
        arr[i] = 'Wobble';
      }

    } 

  // ----------- End Code Area -----------
  console.log(arr)
  return arr;
}


// The following code will call on your function and display the results on the webpage
$(function() {

  // This is the array we're going to use to test your code:
  var testArray = [
    "respond",
    "even",
    "banana",
    "hello",
    "goodbye",
    "yes",
    "okay",
    "seeks",
    "desk",
    "amazing",
    "wonder",
    "excel",
    "achieves",
    "someone",
    "people",
    "odd"
  ]

  // Make a copy of the testArray to use with the `wibbleWobble` function
  var newArray = wibbleWobble(testArray.slice(0));

  // This populates our table with the initial values of the array
  // and what they are after our `wibbleWobble` function
  for (var i = 0; i < newArray.length; i++) {
    var newRow = $("<tr>")
    newRow.append($("<td>").text(testArray[i]));
    newRow.append($("<td>").text(newArray[i]));
    $("#display").append(newRow);
  }

})