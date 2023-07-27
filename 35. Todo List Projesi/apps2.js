//      Tüm elementleri yakalamak

const dform=document.querySelector("#todoAddForm");
const inputtodo=document.querySelector("#todoName");
const addTodoButton=document.querySelector("#todoAddButton")

console.log(dform);
console.log(inputtodo);

runEvent();

function runEvent(){
    dform.addEventListener("submit",addTodo)
}

function addTodo(e){
    e.preventDefault();
    const inputText=inputtodo.value.trim();
    if(inputText==null && inputText==""){
        console.log("Todo giriniz..");
    }
    else{console.log("deneme"+e)}
}

function addTodoUI(){

}


// const addProduct=document.querySelector(".counter-icon-number");                 const addListgroup=document.querySelectorAll(".list-group-item")[0];                 const addISBN=document.querySelectorAll(".badge")[0]; addProduct.addEventListener("click",addStorage); function addStorage(e) {
//     const ekle=addISBN.textContent;  localStorage.setItem(Math.random()*100,Array.from(JSON.parse(ekle)));  e.preventDefault();
//   }