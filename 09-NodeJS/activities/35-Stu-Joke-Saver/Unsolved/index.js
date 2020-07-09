const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios.get("https://icanhazdadjoke.com/", config)
  .then(function (res) {

    console.log(res.data.joke);
    const jokesJSON = JSON.stringify(res.data.joke, null, 2);
    //write file to message.txt,
    appendFileAsync('message.txt', jokesJSON + "\n").then(function() {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
    
    readFileAsync("message.txt", "utf8").then(function(data) {
      // Parse the JSON string to an object
      
      console.log(data)
    });


  });
