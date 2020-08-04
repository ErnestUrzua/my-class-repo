// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================
function insertionSort(array) {
  for (var i = 0; i < arraySize; i++) {
    var temp = array[i];
    var j = i;

    while (j > 0 && temp < array[j - 1]) {
      array[j] = array[j - 1];
      j = j - 1;

    }
    array[j] = temp;
  }
}


// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array);
console.log("---------------------------");
console.log("POST-SORT");
insertionSort(array);
console.log(array);
