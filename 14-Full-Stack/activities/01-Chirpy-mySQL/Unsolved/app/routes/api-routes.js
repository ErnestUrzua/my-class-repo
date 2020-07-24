// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var orm = require("../config/orm.js");


// Routes
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:chirps", function(req, res) {
      orm.allChirps(function(data) {
        res.json(data);
      });

  });

  
};

