const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  }); 

  axios
  .get(queryUrl)
  .then(function(response) {
    console.log(response.data);

    //get name from response, and store in new object names
    const names = response.data.map(function(repo){
      return repo.name;
    });
    
    //join the newline to the array names and store in new array
    const repoNamesStr = names.join("/n");

    //write file to repos.txt,
    fs.writeFile("repos.txt",repoNamesStr, function(err){
      if (err) {
        throw err;
      }
    })

  });
