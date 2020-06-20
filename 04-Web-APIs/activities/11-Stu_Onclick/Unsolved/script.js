var count =0;
var increment

themeSwitcher.addEventListener("click", function() {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});

/*
* In a file called `index.html`, create a button containing the string "Increment".
* In a file called `script.js`, create an event listener with a callback that increments 
the counter and displays the updated count on the webpage.
* Add a button that decrements the counter when clicked.
## Bonus
* Add some code to ensure that the count never gets below 0.
*/