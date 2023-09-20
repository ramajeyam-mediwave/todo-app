allTasks = [];
function updateUiList() {
    clear();
  for (let i = 0; i < allTasks.length; i++) {
    const event = MakeLiList(allTasks[i]);
    const un_complete = document.querySelector(".uncompleted-task");
    un_complete.appendChild(event);
  }
}
function clear(){
    const un_complete = document.querySelector(".uncompleted-task");
    un_complete.innerHTML=""
}
function MakeLiList(task) {
    if(task.ischecked){
      const list = document.createElement("li");
      list.setAttribute("id", `task-${task["id"]}`);
      const inputCheckBox = document.createElement("input");
      inputCheckBox.setAttribute("type", "checkbox");
      inputCheckBox.checked=true;
      
      
      const p = document.createElement("p");
      p.setAttribute("class", "para");

      p.innerHTML = task["work"];
      p.style.textDecoration = "line-through";
      list.appendChild(inputCheckBox);
      list.appendChild(p);
      inputCheckBox.addEventListener('change', function() {
          if (inputCheckBox.checked) {
            checking(task["id"],true)
          }
          else{
              checking(task["id"],false)
          }
        });
      return list;
    }else{
  const list = document.createElement("li");
  list.setAttribute("id", `task-${task["id"]}`);
  const inputCheckBox = document.createElement("input");
  inputCheckBox.setAttribute("type", "checkbox");
  
  const p = document.createElement("p");
  p.setAttribute("class", "para");
  
  p.innerHTML = task["work"];
  p.style.textDecoration = ""
  list.appendChild(inputCheckBox);
  list.appendChild(p);
  inputCheckBox.addEventListener('change', function() {
  if (inputCheckBox.checked) {
    checking(task["id"],true)
  }
});
return list;
    }
}

function saveToLocalStorage(){
  const str = JSON.stringify(allTasks);
  localStorage.setItem("my-event-list", str);
}
function getFromLocalStorage() {
  const str = localStorage.getItem("my-event-list");
  if (!str) {
    return allTasks;
  } else {
      allTasks = JSON.parse(str);
  }
}


function checking(taskId,bool){
      const checkIndex=allTasks.findIndex((task)=>task.id==taskId)
      if(checkIndex!=-1){
          allTasks[checkIndex]['ischecked']=bool;
          sortArray();
          saveToLocalStorage()
          updateUiList();
      }
}
function sortArray(){
  allTasks.sort((a, b) => (a.ischecked === b.ischecked ? 0 : a.ischecked ? 1 : -1));
}
function Form(){
     const form =document.querySelector("form")
     form.addEventListener("submit",function(e){
        e.preventDefault();
     let input=document.querySelector("#input").value;
     let button=document.querySelector("#create-todo")
     const task = {
        id: new Date().getTime(),
        work: input,
        ischecked: false
     }
     addtask(task);
     updateUiList();
     })
}



function addtask(task){
    allTasks.push(task);
    sortArray();
    saveToLocalStorage();
}


getFromLocalStorage();
updateUiList();
Form();