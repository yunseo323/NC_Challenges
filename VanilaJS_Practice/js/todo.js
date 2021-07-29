const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDoList(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=>toDo.id!==parseInt(li.id));
    saveToDos(); //삭제한걸 다시 저장함
};


function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span=document.createElement("span");
    const deleteButton = document.createElement("button");

    span.innerText=newToDoObj.text;
    deleteButton.innerText="❌"
    deleteButton.addEventListener("click",deleteToDoList);
    li.appendChild(span);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
    
};

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value=""; //비우기
  //배열에 객체 저장
  const newToDoObj={
      text: newToDo,
      id: Date.now()
  };
  toDos.push(newToDoObj);
  //그리기
  paintToDo(newToDoObj);
  saveToDos();
};


toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

