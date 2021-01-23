// Odd ones out


// We are creating a function that takes in an unsorted array of integers
// and returns a sorted array with all the even numbers first in ascending order
// and all the odd numbers in descending order after the even numbers

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------
var evenArr = [];
var oddArr = [];

function evenSort(arr) {


  //put all even numbers in a temp array
  arr.forEach(x => {
    //check if the element is even
    if (x % 2 == 0) {
      evenArr.push(x);
    }
  });

  evenArr.sort(function (a, b) { return (a - b) });
  //return array
  return evenArr;
}


function oddSort(arr) {


  arr.forEach(x => {
    //check if the element is odd
    if (x % 2 == 1) {
      oddArr.push(x);
    }
  });

  //sort the array in decending order
  oddArr.sort(function (a, b) { return b - a });
}

// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function upDownSort(arr) {
  // -------------------- Your Code Here --------------------
  let finalArr = [];
  evenSort(arr);
  oddSort(arr);
  finalArr = evenArr.concat(oddArr);
  evenArr = []; //reset array to empty
  oddArr = [];
  return finalArr
  // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [6, 20, 22, 32, 73, 47, 33, 17, 9, 5]");
console.log(upDownSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [44, 32, 6, 88, 12, 28, 20, 8, 10, 24];
console.log("The following should be [6, 8, 10, 12, 20, 24, 28, 32, 44, 88]");
console.log(upDownSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [19, 27, 11, 23, 7, 63, 89, 15, 33, 3];
console.log("The following should be [89, 63, 33, 27, 23, 19, 15, 11, 7, 3]");
console.log(upDownSort(testArr3));