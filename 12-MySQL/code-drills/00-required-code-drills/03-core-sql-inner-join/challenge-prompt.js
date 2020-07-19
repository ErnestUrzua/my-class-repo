<<<<<<< HEAD
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port;
    port: 3306,

    // Your username
    user: "",

    // Your password
    password: "",

    // 
    database: "food_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    foodSearch();
});

// INNER JOIN

// HINT - Console.log the err and res to check if the query is working

function foodSearch() {
// =============== Code Starts Here ===============












// =============== Code Ends Here ===============
=======
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port;
    port: 3306,

    // Your username
    user: "",

    // Your password
    password: "",

    // 
    database: "food_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    foodSearch();
});

// INNER JOIN

// HINT - Console.log the err and res to check if the query is working

function foodSearch() {
// =============== Code Starts Here ===============












// =============== Code Ends Here ===============
>>>>>>> 0388aff80e58424a03cdfefcdc213c9f68f40fd8
}