//? Elementler üzerinde gezinme

const todo=document.querySelector(".list-group-item");
const todo2=document.querySelector(".list-group");
const todo3=document.querySelector(".card");
const row=document.querySelector(".row");
const todoLastChild=document.querySelector(".list-group-item:nth-child(4)")

//todo Anneden çocuklara erişmek

let value;
value=todo2;
value=todo2.children[0];
value=todo2.children[3];
value=todo2.children[3].textContent="değişti";

// value=Array.from(todo2.children)
    
//     value.forEach(function(data){
//     console.log(data.textContent)
// })

//todo Çocuktan anneye erişmek

value=todo;
let ul=todo.parentElement;
let cardBody=ul.parentElement;
let cardElement=cardBody.parentElement;
// let row=cardElement.parentElement;
let container=row.parentElement;

//todo Kardeşten kardeşe erişmek
value=todo;
value=todo.nextElementSibling.nextElementSibling.nextElementSibling;


value=todoLastChild;
value=todoLastChild.previousElementSibling.previousElementSibling
.previousElementSibling.nextElementSibling.previousElementSibling
.previousElementSibling;

//todo --------------------------------- üstten alta gezinme rowdan başladı tittle da bitti
value=row.children[0].children[3].children[0];
value.textContent="Todo Listesi Değişti"

//todo --------- burası kendi erişimimle yaptığım örnek
value=cardBody.children[2].children[1];
value.textContent="Bu benim denemem";
value.style.backgroundColor="beige";
value.style.textAlign="center";
value.style.borderRadius="50px"

console.log(value)