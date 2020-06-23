var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

//counts number of todos
var count;

function renderTodo() {
    for (var i = 0; i<todos.length;i++){
        
        var li = document.createElement("li"); 
    
            li.textContent = todo;
            li.innerHTML = todos[i];
            //people.push({ name: name });
            //todoList.append(li);
          
        }
}


//set content area of todo list to blank
todoList.textContent = "";
todoCountSpan.textContent = count;