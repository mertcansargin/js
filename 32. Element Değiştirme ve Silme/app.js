//todo   Eleman silme

//           const todoList=document.querySelector(".list-group");
//          const todos=document.querySelectorAll(".list-group-item");
//          const todo=document.querySelector(".list-group-item");

//            console.log(todos);

//*            todos[0].remove();
//*            todos[1].remove();
//*            todos[todos.length-1].remove();

//*              todo.remove();


//_--------------------------
//?     evebeynler üzerinden silme

//*         todoList.removeChild(todos[todos.length-1]);
//*          todoList.removeChild(todos[0]);


//todo          Eleman Değiştirme 

const value=document.querySelectorAll(".card-body")[1];

const newtitle=document.createElement("h2");
newtitle.className="card-title";
newtitle.textContent="Todo Listesi - Yeni";

console.log(value.childNodes[1])

value.replaceChild(newtitle,value.childNodes[1])