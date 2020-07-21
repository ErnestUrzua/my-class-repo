var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "greatBay_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "rawlist",
      message: "Would you like to [POST] an auction or [BID] on an auction?",
      choices: ["POST", "BID"]
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.postOrBid.toUpperCase() === "POST") {
        postAuction();
      }
      else {
        bidAuction();
      }
    });
}

function postAuction() {
  inquirer
    .prompt({
      name: "auctionItem",
      type: "input",
      message: "What item do you want to post?"

    },
    {
      name: "category",
      type: "input",
      message: "What is the category of your item?"

    },
    {
      name: "startingBid",
      type: "input",
      message: "What is the starting bid?"

    } 
    ).then(function (answer) {
      var query = connection.query(
        "INSERT INTO auctions SET ?",
        {
          item_name: "auctionItem",
          category: "category",
          starting_bid: "startingBid"
        },

        function (err, res) {
          console.log(res.affectedRows + " product inserted!\n");
          // Call start AFTER the INSERT completes
          start();
        }
      );
    }
    )
};



function bidAuction() {
  var query = connection.query("SELECT item_name FROM auctions", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    
  })
inquirer
  .prompt({
    name: "itemBid",
    type: "rawlist",
    message: "what item do you want to bid on?",
    choices: ["", ""] //choices from sql db
  },
  {
    name: "bid",
    type: "input",
    message: "what item do you want to bid on?"
  }
  
  )
};

