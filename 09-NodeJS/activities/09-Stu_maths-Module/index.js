var maths = require("./maths.js");

// console.log(maths.sum(1,4));

// console.log(process.argv);

var operator = process.argv[2];
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);

// if operator is = sum
//then execute maths.sum num1, num2
if (operator === "sum") {
    console.log(maths.sum(num1,num2));

}