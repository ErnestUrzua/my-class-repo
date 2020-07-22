var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3300,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "greatBayDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
  
});


function createItem() {
  console.log("Inserting a new item for auction...\n");
  var query = connection.query(
    "INSERT INTO items SET ?",
    {
      item: "Rocky Road",
      category: "",
      bid: 0,
      quantity: 1
    },
    function(err, res) {
      console.log(res.affectedRows + " item inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateItem();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateItem() {
  console.log("Updating all item quantities...\n");
  var query = connection.query(
    "UPDATE item SET ? WHERE ?",
    [
      {
        item: ""
      },
      {
        category: ""
      },
      {
        bid: ""
      },
      {
        quantity: 1
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " items updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteItems();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteItems() {
  console.log("Deleting all strawberry icecream...\n");
  connection.query(
    "DELETE FROM products WHERE ?",
    {
      flavor: "strawberry"
    },
    function(err, res) {
      console.log(res.affectedRows + " products deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readItems();
    }
  );
}

function readItems() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
