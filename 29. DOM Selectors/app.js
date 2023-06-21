//? Selectors (Seçiciler) - Style özellikleri

//todo      ClassName, id , tag name

//*         getElementById = id ile seçme 
//*         getElementByClassName= class ismi ile seçme
//*         getElementByTagName= tag name ismi ile seçme



// let value;
//value=document.getElementById("todoAddButton");
// value=document.getElementById("todoSearch");
//*         getElementByClassName = class ismi ile seçme
// value=document.getElementsByClassName("delete-item");
// console.log(value);

// const button=document.getElementById("todoAddButton");
// console.log(deger);
// console.log(deger.id);
// console.log(deger.className);
// console.log(deger.getAttribute("id"));
// console.log(deger.getAttribute("class"));


// const classListe=deger.classList[1];
// // console.log(classListe)
// classListe.forEach(function(className){
//     console.log(className)
// })
// console.log(classListe)


// let deger1=button.textContent;
// let deger2=button.innerHTML;

// console.log(deger1);


// button.innerHTML="<b>Todo Ekleyin</b>"


// const todoList=Array.from(document.getElementsByClassName("list-group-item")); 
// todoList.forEach(function (todo){
//     console.log(todo);
// });
// console.log(todoList);



// const forms=document.getElementsByTagName("form");
// console.log(forms);


//?     querySelector - querySelectorAll
//*     queryselector onlarca kullanılsa bile 1 tane getirir 
//*     queryselectorAll  kullanılan hepsini getirir

//!     aynı görevdeler ikiside 
//todo     querySelector kullanırken almak istediğimiz id nin başına diez # eklenir
//todo     querySelector kullanırken almak istediğimiz class ın başına nokta . konulur 

// const selector=document.querySelector("#todoClearButton");
// console.log(selector);
// console.log(document.getElementById("todoClearButton"));

// const selector=document.querySelector(".list-group-item");
// console.log(selector);

//? foreach ile kendi kullanımım
// const select=Array.from(document.querySelectorAll(".list-group-item"));
// select.forEach(function(data){
//     console.log(data);
// })

//? burada bütün indeksler en başta geliyor sonradan 3. indexte olanı seçiyoruz ve ekrana yazdırıyoruz.
// const select2=document.querySelectorAll(".list-group-item")[2]; 
// console.log(select2);                       

//? odd ve even
const query=Array.from(document.querySelectorAll("li:nth-child(even)")); // parantez içerisindeki css selector

query.forEach(function(data){
    data.style.backgroundColor="lightgrey";
});