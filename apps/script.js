let button = document.querySelector("#add");
let todoList = document.querySelector("#todoList");
let input = document.querySelector("#input");

let todos = [];

button.addEventListener("click", () => {
  todos.push(input.value);
  saveToLocalStorage();
  updatetodoListUI();
  
  addtodo(input.value);
  clear();
  
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
function clear(){
      let inputElement = document.getElementById("input");
      inputElement.value = "";
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
function clearrep() {
    const app = document.querySelector("#todoList");
    app.innerHTML = "";
}


function updatetodoListUI() {
    clearrep();
  for (let i = 0; i < todos.length; i++) {
    const todo = addtodo(todos[i]);
    todoList.appendChild(todo);
   
  }
}
getFromLocalStorage();
updatetodoListUI();

