// Tüm elementleri yakalamak

const form=document.querySelector("#todoAddForm");
const addInput=document.querySelector("#todoName");
const todoList=document.querySelector(".list-group");
const firsCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const clearButon=document.querySelector("#todoClearButton");
const filterInput=document.querySelector("#todoSearch");

let todos=[];
runEvents();

function runEvents(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
    secondCardBody.addEventListener("click",removeTodoUI);
    clearButon.addEventListener("click",allTodoClearStorage);
    filterInput.addEventListener("keyup",filter);
}
function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoUI(todo);
    })
}
function filter(e){
    const filterValue=e.target.value.toLowerCase().trim();
    const todoListesi=document.querySelectorAll(".list-group-item");
    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                todo.setAttribute("style","display:block");
            }else{
                todo.setAttribute("style","display:none !important");
            }
        })
    }else{
        if(filterValue==""){

        }else{
         showAlerts("danger","Filtrelenecek Todo bulunmamaktadır en az 1 Todo ekleyin");
        }
    }
}
function removeTodoUI(e){
    if(e.target.className=="fa fa-remove"){
        //  Ekrandan silme
            const todo=e.target.parentElement.parentElement;
            todo.remove();

        //  Storage dan silme
            removeTodoToStorage(todo.textContent);
            showAlerts("info","Todo başarıyla silinmiştir.") 
    }
}
function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if(removeTodo===todo){
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos))
    showAlerts("info","Tüm Todolar listenizden silinmiştir.")
}
function allTodoClearStorage(){
    //  Ekrandan Silme
    const todoListesi=document.querySelectorAll(".list-group-item");
    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            todo.remove();
        })  
    //  Storage dan silme
    todos=[];
    localStorage.setItem("todos",JSON.stringify(todos));
    showAlerts("success","Tüm Todolar silinmiştir.")
    }
    else{
        showAlerts("danger","Silinecek Todo bulunmamaktadır Todo en az 1 ekleyin")
    }
}
function addTodo(e){ 
    const inputText=addInput.value.trim();
    if(inputText==null || inputText==""){
       showAlerts("warning","Lütfen bir Todo giriniz");
    }
    else{   
        //arayüze ekleme
        addTodoUI(inputText); 
        //Stroge ekleme
        addTodoStorage(inputText);
        //popup message
        showAlerts("success","todo eklendi");
    }
   e.preventDefault();
}
function addTodoUI(newTodo){
const li=document.createElement("li");
li.className="list-group-item d-flex justify-content-between";
li.textContent=newTodo;

const a=document.createElement("a");
a.className="delete-item";

const i=document.createElement("i");
i.className="fa fa-remove";

a.appendChild(i);
li.appendChild(a);
todoList.appendChild(li);
addInput.value="";

console.log("addTodoUI");
}
function addTodoStorage(newTodo){
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
    console.log("addTodoStroge");
}
function checkTodosFromStorage(){
if(localStorage.getItem("todos")===null){
    todos=[];
}
else{
    todos=JSON.parse(localStorage.getItem("todos"));
}
}
function showAlerts(type,message){

    const div=document.createElement("div");
    div.className="alert alert-"+type;
    // div.className='alert alert-{type}';
    div.textContent=message;
    div.style.marginBlockStart="25px";

    firsCardBody.appendChild(div);

    setTimeout(function(){
        div.style.opacity="0.5";
    },2000)
    setTimeout(function(){
        div.remove();
    },2500)
}