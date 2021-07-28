const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


function paintToDo(newToDo){
    const li = document.createElement("li");
    const span=document.createElement("span");
    const deleteButton = document.createElement("button");
    deleteButton.innerText="❌"
    li.appendChild(span);
    li.appendChild(deleteButton);
    span.innerText=newToDo;
    toDoList.appendChild(li);
    
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value=""; //비우기
  paintToDo(newToDo);
};


toDoForm.addEventListener("submit",handleToDoSubmit);