 /*This is a master list of all algorithms from Leet Code and Other
  */
 //checks if a number is a multiple of 3,5, or both and returns fizz, buzz, or fizzbuzz;
 function fizzBuzz() {
     for (let i = 1; i <= 100; i++) {
         let x;

         if (i % 3 == 0 && i % 5 == 0) {
             x = 'fizzbuzz';
             console.log(x);
             continue;
         } else if (i % 3 == 0) {
             x = 'fizz';
             console.log(x);
             continue;
         } else if (i % 5 == 0) {
             x = 'buzz';
             console.log(x);
             continue;
         }
         console.log(i);
     }
 }

 //--------------------------------------------------------------------------------------------------------------
 //this checks if the numbers are divisible by each other and returns true
 function checkDivisors(arr) {

     // ---------- Your Code Here ----------
     for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < arr.length; j++) {
             if (i !== j && arr[i] % arr[j] == 0) {
                 //console.log('true ' + i + ' ' + j)
                 return true;
             }
         }
     }
     return false;
 }
 //----------------------------------------------------------------------------------------------------------

 // this takes even and odd numbers from an array and sorts them with even being ascending and odd being decending
 var evenArr = [];
 var oddArr = [];

 //helper function for even
 function evenSort(arr) {
     //put all even numbers in a temp array
     arr.forEach(x => {
         //check if the element is even
         if (x % 2 == 0) {
             evenArr.push(x);
         }
     });

     evenArr.sort(function(a, b) { return (a - b) });
     //return array
     return evenArr;
 }

 //helper function for odd
 function oddSort(arr) {
     arr.forEach(x => {
         //check if the element is odd
         if (x % 2 == 1) {
             oddArr.push(x);
         }
     });

     //sort the array in decending order
     oddArr.sort(function(a, b) { return b - a });
 }

 //returns a new array of sorted even and odd numbers
 function upDownSort(arr) {

     let finalArr = [];
     evenSort(arr);
     oddSort(arr);
     finalArr = evenArr.concat(oddArr);
     evenArr = []; //reset array to empty
     oddArr = [];
     return finalArr
 }

 //---------------------------------------------------------------------------------------------------------

 //helper function to PrimeSort, this checks if the number is a prime number and returns array
 function checkPrime(num) {
     for (var i = 2; i <= num / i; i++) {
         if (num % i === 0) {
             return false
         }
     }
     return true;
 }
 //takes an array of prime numbers and sorts them in decending order
 function primeSort(arr) {

     var primes = [];
     for (let i = 0; i < arr.length; i++) {
         if (checkPrime(arr[i])) {
             primes.push(arr[i]);
         }
     }
     return primes.sort((a, b) => b - a); //sorts in decending order
 }

 //--------------------------------------------------------------------------------------------------------

 //this finds a unique string, no dupe characters allowed
 function unique(str) {
     // ====================== YOUR WORK HERE ==================
     toString()
     for (i = 0; i < str.length - 1; i++) {
         for (j = 1; j < str.length; j++) {
             console.log(str[i] + ' ' + str[j])
             if (str[i] === str[j]) {
                 return false
             }
         }
         return true; //string is unique
     }
 }