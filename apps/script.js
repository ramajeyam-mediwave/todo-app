let button = document.querySelector("#add");
let todoList = document.querySelector("#todoList");
let input = document.querySelector("#input");

let todos = [];

button.addEventListener("click", () => {
  todos.push(input.value);
  saveToLocalStorage();
  updatetodoListUI();
  console.log("yes")
  addtodo(input.value);
  
});

// function clear() {
//     document.querySelector("#input").reset();
//   }

function addtodo(todo) {
  let div = document.createElement("div");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let para = document.createElement("label");
  para.innerText = todo;
  div.appendChild(checkbox);
  div.appendChild(para);

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      para.style.textDecoration = "line-through";
    } else {
      para.style.textDecoration = ""
    }
  });
  return div;
}
function clear() {
    document.querySelector("#add-movie-form").reset();
  }

function saveToLocalStorage() {
  const str = JSON.stringify(todos);
  localStorage.setItem("todos-list", str);
}

function getFromLocalStorage() {
  const str = localStorage.getItem("todos-list");
  if (!str) {
    todos = [];
  } else {
    todos = JSON.parse(str);
  }
  
}
function clearApp() {
    const app = document.querySelector("#todoList");
    app.innerHTML = "";
}


function updatetodoListUI() {
    clearApp();
  for (let i = 0; i < todos.length; i++) {
    const todo = addtodo(todos[i]);
    todoList.appendChild(todo);
   
  }
}
getFromLocalStorage();
updatetodoListUI();

