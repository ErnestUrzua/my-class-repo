
// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "showDB"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

//routes
app.get("/", function (req, res) {

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM 30rock", function (err, result) {
        if (err) throw err;
        // We then begin building out HTML elements for the page.
        var html = "<h1> 30 Rock Characters </h1>";

        // Here we begin an unordered list.
        html += "<ul>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>School: " + result[i].name + " </p></li>";
        }

        // We close our unordered list.
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });

});

app.get("/coolness-chart", function (req,res){
    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM 30rock ORDER BY id", function (err, result) {
        if (err) throw err;
        // We then begin building out HTML elements for the page.
        var html = "<h1> 30 Rock Characters </h1>";

        // Here we begin an unordered list.
        html += "<ul>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> Coolness: " + result[i].coolness_points + "</p>";
            html += "<p>School: " + result[i].name + " </p></li>";
        }

        // We close our unordered list.
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
}); 

app.listen(3000, function () {
    console.log("listening on port 3000");
});