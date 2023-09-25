const submitButton = document.getElementById("button");
const message = document.getElementById("message");
const tasks = document.getElementById("tasks");
const clear= document.getElementById("clBtn");


submitButton.addEventListener("click", addTask);
clear.addEventListener("click", clearTasks);
tasks.addEventListener("click", handleTaskClick);


function addTask() {
    const newTask= document.getElementById("newTask")

        tasks.innerHTML += '<li class = "list-group-item">' + newTask.value + '</li>'
        newTask.value = "";
        
}

function clearTasks() {
    const taskList= tasks.getElementsByClassName("list-group-item")
    while(taskList.length>0){
             taskList[0].parentNode.removeChild(taskList[0])
        }
  
    }
    
function handleTaskClick(event) {
    const style= event.target.style
    if(!style.textDecoration) {
    style.textDecoration = "line-through";
    }else{
        style.textDecoration = ""
    }
}   
    


