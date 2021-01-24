// Reversed Primes


// We are creating a function that takes in an unsorted array of integers
// and returns a new array containing only the prime numbers sorted in
// descending order

// A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural 
// numbers. A natural number greater than 1 that is not prime is called a composite number. 
// For example, 5 is prime because the only ways of writing it as a product, 1 × 5 or 5 × 1, involve 5 itself. 
// However, 4 is composite because it is a product (2 × 2) in which both numbers are smaller than 4. 
//Primes are central in number theory because of the fundamental theorem of arithmetic: every natural number      greater than 1 is either a prime itself or can be factorized as a product of primes that is unique up to their order. 

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------


function checkPrime(num) {
    for (var i = 2; i <= num / i; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}
// --------------------- End Code Area --------------------
// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function primeSort(arr) {
    // -------------------- Your Code Here --------------------
    // arr.forEach(el => {
    //     if (checkPrime(el)) {
    //         primes.push(el);
    //     }
    // });
    var primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (checkPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    return primes.sort((a, b) => b - a); //sorts in decending order
    // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [73, 47, 17, 5]");
console.log(primeSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [83, 6, 13, 15, 27, 19, 103, 59, 42, 4];
console.log("The following should be [103, 83, 59, 19, 13]");
console.log(primeSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [6, 81, 36, 45, 82, 21, 8, 22, 10, 15];
console.log("The following should be []");
console.log(primeSort(testArr3));