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

    evenArr.sort(function (a, b) { return (a - b) });
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
    oddArr.sort(function (a, b) { return b - a });
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

//LEET CODE 
/** Maximum Wealth takes in 2d array and sums all the wealth and returns the one with the highest
* @param {number[][]} accounts
* @return {number}
*/
var maximumWealth = function (accounts) {
    var wealth = [];
    var max = 0;

    //find max function in an array
    var findMax = function (arr) {

        for (x of arr) {

            if (x > max) {
                max = x;
            }
        }
        console.log('max number is ' + max)
        return max;
    }

    //iterate through arrays and add
    for (i = 0; i < accounts.length; i++) {

        let sum = 0;

        for (j = 0; j < accounts[i].length; j++) {
            sum = sum + accounts[i][j];
            console.log('sum is ' + sum)
        }

        wealth.push(sum);
    }

    findMax(wealth);
    return max;
};

/** Leet Code 
 * Running Sum
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {

    var runningSum = [nums[0]]; //init array with first index of nums

    for (i = 1; i < nums.length; i++) {
        tempSum = runningSum[i - 1] + nums[i];

        runningSum.push(tempSum)
    }
    return runningSum;
};

/** Leet Code Two Sum
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function (nums, target) {
    //scan through the array checking if the first index adds with any of the other indexes, if not then increment

    for (i = 0; i < nums.length - 1; i++) {
        var j = i + 1;


        for (j; j < nums.length; j++) {
            console.log(nums[i] + '+' + nums[j]);

            if (nums[j] + nums[i] === target) {
                return [i, j];
            }
        }
    }
};


/**Leet Code
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    //find two numbers in array to see if they add up to target
    //check first if first number is smaller than second number if not move on, else    //return

    for (i = 0; i < numbers.length - 1; i++) {
        var j = i + 1;

        for (j; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target && numbers[i] <= numbers[j]) {
                return [i + 1, j + 1];
            }
        }
    }
};


/** Leet Code isPalindrome 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();

    for (i = 0; i<x.length;i++){
    
        for (j = x.length-1; j > 0; j--){
            if (x[i] === x[j] ){
                console.log('match')
                i++;
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }

};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    temp = x.toString(); //convert to string
    let newArr = [];
    //for loop to put reverse into new temp array
    for (i = temp.length-1; i >= 0 ;i--){
        newArr.push(temp[i]);
    }
    
    newArr = newArr.join('');
    console.log(newArr)
    newArr = parseFloat(newArr);
    newArr = newArr * Math.sign(x);
    pop = x % 10;
    console.log(newArr +" "+ x)
    if (newArr <= 0x7fffffff && newArr >= -0x80000000){
        return newArr;
    }
    else{
        return 0;
    }
};