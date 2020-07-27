# Tutoring

availble in week 2, up to 2 hrs a week
support tab/tutor request

#Students

# Homework 1 Code Refactor

  ## make it accessible, meaning ez to change titles, videos, pics etc.
  adding Closed captions on videos
  
  ## use headings <h1><h2> etc in order to logically arrange stuff, so h1 will be the first large heading and h2 will be the next one.
  if you want a certain heading larger or smaller use a css class to change that.
  
  ## semantic meaning

    non-semantic elements: <div> and <span> - Tells nothing about its content. 

    

    semantic elements: <form> , <table> , and <article> 
    • <article>
    • <aside>
    • <details>
    • <figcaption>
    • <figure>
    • <footer>
    • <header>
    • <main>
    • <mark>
    • <nav>
    • <section>
    • <summary>
    • <time>

  
  # title element is a concise, descriptive title
  
  ## use alt text for all pics except when it is purely for decoration such as a background image
  ### always use alt text for picture links
  
  ## Color deficiencies
  ## red green are big deficiencies so do NOT use them on form fields
  ## use visual asterisks such as asterisk or question mark

    as well as color to satisfy people with learning disabilities

  ## seperate blocks of content with white space and borders

  ## evaluate color contrast
  
  ## label form fields for screen reader

  ## label the tab order accordingly

  ## group similiar field sets, such as personal information

    etc.

  ## use tables for data and not layout

      when necesseary use scope attribute to denote complex
      nested relationships  

  ## make sure page is accessible via tab and arrows

      no hover llinks, screen reader must be able to access them
      
  ## Dont use Aria, use native HTML tags instead

  ## make dynamic content accessible

    any page or object that dynamically refreshes or changes needs to be alt accessible.
    ##use aria roles and alerts for this

  ## ensure video does not auto play sound

    and that they can be controlled by the keyboard
    ##videos must have CC and transcripts
    ##for slideshows make sure each picture has an alt text
    and can be navigated via keyboard
      
# GIT

whenever changing a file you have to add the file to git
in terminal
git add . 
or git add filename

Now commit 
git commit -m "write a message about what you changed"

Push to origin
git push origin master

# VI commands

  :x  quit vi
  :wq quit and save
  :q quit
  :q! quit vi even if latest changes have not been saved
  vi filename 
  vi -r filename

# using terminal

  mk dir
  touch creates a new file
  rm filename  removes the file
  rm -r /folder removes the folder and everything in it

# html

use percent's when accounting for widths, e.g. 100% will be the full span of a screen regardless of the pixels.

# css

  z index determines the layer positioning in depth
  
  relative positioning is relative to the parent
  
  absolute positioning is relative to the 
  

  + this denotes or applys to all

  
  <class> are arranged to have certain attributes
  
  <ID> is an object, also the most specific
  
  <element> is the most general
  
  order of listed css the very last one overrides any other css rules
  
# javascript

  var name = "nameof variable"; 

  for (var i = 0; i < zooAnimals.length; i++) {
  console.log("I love " + zooAnimals[i]); 
  }

  for (i=0; i<studentsRow1.length; i++){
  console.log(studentsRow1[i]); 
  }

# find a character in a string

  for (var i = 0; i < studentsRow2.length; i++) {
  var x = studentsRow2[i]; 
  var firstLetter = x.charAt(0); 
  if (firstLetter === "J" ){
  alert(x + " starts with J")
  }
  
  else{
  //do nothing
  }
  }

# how to create an object with an array

``` 
  var questions = [

        {q: "Is air real", a: true},
        {q: "is Farley Real?", a : true},
        {q: "ar Cats the best", a: true}
      ]
      for (var i =0;i<questions.length;i++){
        var response = confirm(questions[i].q);
        
        if (response === questions[i].a) {
          score++;
        alert( "Correct: You have " + score + "/" + questions.length)
      }
```

# array methods

``` 
  .split("") puts a string into an array by splitting
  .join("") joins array 

// => is a function nottation, it is the same as function
drinkList.forEach((element) => {
var ptag = document.createElement("p"); 
ptag.textContent = element; 
drinkoptionsEl.appendChild(ptag); 
}); 
```

# updating a button

# creating an array
["apples", "bananas", "kiwis"]; 
[4, 0, 4.57, 22]

# dom pointers

both ways are acceptable, to access dom elements
var elementEL = document.querySelector(#element)
var elementEL = document.getDocumentbyId("element"); 

eventlistener(change) //changes the element

event listener listens for a click
addButton.addEventListener("click", function())
  other events, button up, button down
  
this .includes replaces a statement like if array === a || array === b
if array.includes()

write something on screen from object count
elementEl.textcontent = count; 

# Generate a button

  //create a html element and pointer to that element
  var generateButton = document.querySelector(:#generate"); //pointer
  generateButton.addEventListener(click, renderTodos); 

# creating a button with event bubbling

var button = document.querySelector(".button"); 

function changeBlue(event) {
  event.stopPropagation(); 
  event.currentTarget.setAttribute(

    "style",
    "background-color: blue"

  ); 
}

outer.addEventListener("click", changeOrange); 
inner.addEventListener("click", changePurple); 

//select the button element
var button = document.querySelector(".button"); 

//add event listener to the button click and run changeBlue function
button.addEventListener("click", changeBlue); 

# local storage

localStorage.setItem("count", count); 

converts object into a string
localStorage.setItem("count", JSON.stringify(count)); 

converts string to an object again
var countItem = JSON.parse(localStorage.getItem("count")); 

# dom manipulation and web apis

  aka imperial programming
  

# Jquery

  

``` 
  $ always denotes a jquery function
  
  $("<div>")  appends a div
  $("#div")  selects a div ID
  $("div") selects all divs
  $("#div").on("click", function()); this does something on click
  $("#div").html("<img src = "url">"); this creates html on to the div
  $("#div").append("<p></p>"); this appends p tags to the div
  $("#div").append("<p>" + randomNumber + "</p>"); this appends the random number to the p tag
  
  $("#div").html("<p></p>"); 
  $("div").css("visibility",  "visible"); sets the css properties
  ```

# MongoDB

# ApI application processing Interface
  
  #third party api
  jquery

# web API

  html5
  python
  wordpress
  http
  IP address
  

# serverside api

  marketing API by facebook
  

# ajax requests

  this is jquery under the hood denoted by the $
  $.ajax

# Jquery

``` 
$ always denotes a jquery function  
$("<div>")  appends a div or creates
$("#div")  selects a div ID
$("div") selects all divs
$("#div").on("click", function()); this does something on click
$("#div").html("<img src = "url">"); this creates html on to the div
$("#div").append("<p></p>"); this appends p tags to the div
$("#div").append("<p>" + randomNumber + "</p>"); this appends the random number to the p tag
$("#div").html("<p></p>"); //this displays a ptag
$("div").css("visibility",  "visible"); sets the css properties
var movie = $("#movie-input").val().trim(); //selects the value from an id
```

## select the parent id for a button

 `var id = $(this).parent().attr("id");`
  

## take the text area of a class, in this case class event
`var text = $(this).siblings(".event").val(); `
  

## Create a variable named "letterBtn" equal to $("<button>"); 
`var letterBtn = $("<button>");` 

## Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
`letterBtn.addClass("letter-button letter letter-button-color");` 

## Then give each "letterBtn" a data-attribute called "data-letter".

  `letterBtn.attr("data-letter", letters[i]);`

## Then give each "letterBtns" a text equal to "letters[i]".

  letterBtn.text(letters[i]); 

## Finally, append each "letterBtn" to the "#buttons" div (provided).

  $("#buttons").append(letterBtn); 
  
  

## creating a new tr element, or h1, p, header ...etc

  var tRow = $(<tr>); //create the tr elements
  

## append variables to the tRow element.then call this element to append to page

  tRow.append(title, year, response. Title)); 
  

## Event listeners

  // Generic function for displaying the movieInfo
  $(document).on("click", ".movie", displayMovieInfo); 
  

# search for a query URL and display on screen

// Here we grab the text from the input box
var movie = $("#movie-input").val(); 
// Here we construct our URL

```var queryURL = "https://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=trilogy"; 
$.ajax({
url: queryURL, 
method: "GET"
}).then(function (response) {
var obj = JSON.stringify(response); 
console.log(queryURL); 
console.log(response); 
$("#movie-view").html("<p>" + obj); 
}); 

``` 
# selects the ID and gets its value and puts into variable movie

// This line grabs the input from the textbox
var movie = $("#movie-input").val().trim(); 

# getting text from a text box and putting into array

// The movie from the textbox is then added to our array
movies.push(movie); 

# ajax call 
```

url: "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current, minutely, hourly&units=imperial&cnt=5&appid=b2d4239aa3e819b8680cdea4c57fe90d", 
method: "GET"
}).then(function (response) {
  //do some code here
}); 

//use a function to build the url.
$.ajax({
url: queryURL, 
method: "GET"
}).then(updatePage); 
```

# google maps API

hiding api key is not necessary and there is no way to avoid it client side, and this is client side
google api key AIzaSyASRZUnw8T0CsDlOI92HxIuyYglJRmPauQ
https://developers.google.com/maps/documentation/javascript/tutorial?_ga=2.180893479.1696577458.1593815769-51849787.1593815769

# web places

https://developers.google.com/places/web-service/search

# nearby stores, restaurants

https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyASRZUnw8T0CsDlOI92HxIuyYglJRmPauQ

# using git

https://stefanbauer.me/articles/how-to-keep-your-git-fork-up-to-date
`git remote add upstream git@github.com:jdavis3333/ProjectX.git`

`git fetch upstream`

`git merge upstream/master master`

# NODE.js

# create a comparison
console.log(process.argv[4]); 

# compare two elements

console.log(process.argv[2]); 
var a = process.argv[2]; 
var b = process.argv[2]; 
  if (a === b ){
    console.log(true)
  }
  else {
    console.log(false)
  }
  
  ## compare them directly or with variables
  or console.log(process.argv[2] === process.argv[3])
  or console.log(a===b); 
  //shortcircuit comparison
  or console.log(a === b ? "meow" : "bark")
  
  var fs = requre("fs"); 
  
  fs.readFile("data.csv", "utf-8", function(error, data)) {

    if (error){
    console.log(error)
    }

  }

# import another js file
var filename =  require("./maths.js"); 

# how to pass arguments 
var operator = process.argv[2]; 
var num1 = parseInt(process.argv[3]); 
var num2 = parseInt(process.argv[4]); 
// if operator is = sum
//then execute maths.sum num1, num2
if (operator === "sum") {
console.log(maths.sum(num1, num2)); 
}

  //then in terminal
  node index.js maths.js sum 1 2
  
  

# npm init
installs the json package
npm init -y installs with out asking any questions

## how to install a package in the directory
npm install inquirer --save //installs the package in the directory
  

# when to use arrow functions
dont use in an object when refering to the object itself
ex. dog {name: 
}

# map and filter
filter is a function that returns true or false, and adds to an array if true
map is a built in array method that creates a new array and stores every element from the input array

-map returns a new array of whatever work you did on the input array

-filter only returns an array of those that pass some condition

-for each just does some work for each element in the array

  

# spread operator

...arg  this is siminal to n objects, 
function(one, two, ...arg)
  this takes 3 args or more but at least 2 args for sure. 
  

## object destructuring

const { objectName } = arya; 
grab values from john object and assign to brother 1 and 2 
const { brother1, brother2 } = john.family.brothers; 

## array deconstructuring

grab the variables and values from characters array
const [ name, alias, allegiance] = characters; 

## using JSON.stringfy()

convert a json object to a string
JSON.stringfy(obj); 

## fs.readfile("obj.json", "utf-8", function(err)) {

  if (err){
  throw err; 
  }
}

## foreach

animalJSON.foreach(function(animal){
  //code here

}); 

## axios

  axios
  .get
  .then(); 
  

## map

//get name from response, and store in new object names
const names = response.data.map(function(repo){
return repo.name; 
}); 

## promises 

takes two parameters, the function to call and the error function if it doesnt work
we omit .then when making promises
return new Promise ((callback, err) => {
}

## async and await

with these added to your promise, we dont include. then
we do include the async or await keyword 

await waits till the work is done

aysnc does multiple work at the at different times

## Heroku
package lock must have a `"start": "node server.js"` script
and must be in root

### heroku login
open in terminal and type `heroku login`
then you can type `heroku logs --tail --app ernesturzua-note-taker`
and see logs

# Express.js
## requires
`var NotesDb = "../../db/db.json";` returns the path
`var NotesDb = require("../../db/db.json");` returns the object
## one req or res only
when doing an app.post or get, we only want one res or req param, because that stops the function so cant have two.

## order of routes matters
`// If no matching route is found default to index
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../../public/index.html"));
});` 
be mindful of where this is in the file as it can execute early and mess up certain behaviors.

## Parsing vs stringify JSON
Parsing puts the long ass string back into and object format for javascript

send an object to a webserver with stringfy
-Convert a JavaScript object into a string with JSON.stringify().


## creating a post method

# mySQL

## creating some tables

INTEGER //used for numbers
VARCHAR //used for strings
SCORE() //used for length 

## creating a table

`CREATE TABLE programmers(
  id INTEGER NOT NULL AUTO_INCREMENT, 
  firstName VARCHAR(100) NOT NULL, 
  lastName VARCHAR(100) NOT NULL, 
  rating INTEGER(100), 
  PRIMARY KEY (id)
); `

## inserting into programmers table

`INSERT INTO programmers(firstName, lastName, rating)
VALUES ("Sandy", "Cheeks", 75); `

## creating routes with paramters in express
app.get ("/:operation/:firstNum/:secondNum") //this gets the operation and first and second num
var firstNum = parseInt(req.params.firstNum); //parseInt makes sure the input is a int and not a string

var operation = req.params.operation; //setting the parameter operation in the route to var operation

## santizing inputs
`connection.query("INSERT INTO tasks (task) VALUES (?)", [req.body.task], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});`

# Mysql
crud options 
`findAll()` create
`findOne()` find one
`destroy()` deletes
`update()` updates
`.sync({force: true})` tells db to drop if not true

## sequelize
create a model 
```
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    
    text: {
      type: sequelize.STRING,
      validate:{is: ["^[a-z]+$",'i'],
      len: [1,140]
    }},
    complete: DataTypes.BOOLEAN
  });
  return Todo;
};
```

### get request
Get route for retrieving a single post
```
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });
  ```

### post/author relationships
foriegn key goes on owner