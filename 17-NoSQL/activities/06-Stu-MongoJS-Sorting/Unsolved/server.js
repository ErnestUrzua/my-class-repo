const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "animalsdb";
const collections = ["animal"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/all", (req, res) => {
  db.animal.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// TODO: Implement the remaining two routes

// 1: Name: Send JSON response sorted by name in ascending order, e.g. GET "/name"
app.get("/name", (req, res) => {
  db.animal.find().sort({"name": 1}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
// 2: Weight: Send JSON response sorted by weight in descending order, , e.g. GET "/weight"
app.get("/weight", (req, res) => {
  db.animal.find().sort({"weight": 1}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
// Set the app to listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});


// db
// use animalsdb

// db.animal.insert({"name": "farley", "weight": "20"})
// db.animal.insert({"name": "farley2", "weight": "30"})
// db.animal.insert({"name": "farley3", "weight": "70"})
// db.animal.insert({"name": "farley4", "weight": "40"})
// db.animal.insert({"name": "farley5", "weight": "90"})