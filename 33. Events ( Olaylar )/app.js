//? Events ( olaylar )

// const buton=document.querySelector("#todoClearButton");
// buton.addEventListener("click",degistir);

// function degistir(e){
// document.querySelectorAll('.card-title')[1].textContent="Başlığımız değişti"

// console.log(e);
// console.log(e.target);
// console.log(e.target.textContent);
// console.log(e.target.className);
// }

//!     Mouse Eventleri
//  DOMContentLoaded    //? sayfa yüklenirken çalışır document sınıfıyla kullanılır
//  Ioad                //* sayfa yoklenirken çalışır window sınıfıyla kullanılır
//  click               //todo tek tıklamada çalışır
//  dblclick            //  çift tıklamada çalışır
//  mouseover           //? over ve out verilen hedefin içerisindeki değerler arasındada gezinirken çalışır
//  mouseout            //?
//  mouseenter          //* enter ve leave sadece belirtilen hedefe girildiğinde çalışır alt etiketler etkilemez
//  mouseleave          //*

//todo  domcontentloaded
// document.addEventListener("DOMContentLoaded",run);
// function run(){
//     // alert("yüklendi");
//     console.log("sayfa yüklendi");
// }

//todo  load
// window.addEventListener("load",run2);
// function run2(){
//     console.log("run2 çalıştı")
// }

//todo  click
// const yakala=document.querySelectorAll(".card-title")[1];
// yakala.addEventListener("click",run3);
// function run3(e){
//     console.log(e.type);
// }

//todo  dblclick
// const yakala2=document.querySelectorAll(".card-title")[1];
// yakala2.addEventListener("dblclick",run4);
// function run4(e){
//     console.log(e.type);
// }

//todo  mouseover
// const mouse=document.querySelectorAll(".card-body")[1];
// //  mouse.addEventListener("mouseover",run5);
// //  mouse.addEventListener("mouseout",run5);

// mouse.addEventListener("mouseenter",run5);
// mouse.addEventListener("mouseleave",run5);
// function run5(e){
//     console.log(e.type);
// }


//! Klavye Eventları

//  keypress        //? harf ve sayılarda tetiklenen özelliktir.
//  keydown         //* hepsinde çalışan özellik
//  keyup           //todo  parmağınızı tuştan çektiğinizde tetiklenen özellik

// document.addEventListener("keypress",pressfunc);
// function pressfunc(){
//     console.log("keypress çalıştı");
// }

// document.addEventListener("keydown",downfunc);
// function downfunc(){
//     console.log("keydown çalıştı");
// }

// document.addEventListener("keyup",upfunc);
// function upfunc(){
//     console.log("keyup çalıştı");
// }

window.addEventListener("keydown",refengel);
function refengel(e){
console.log(e.keycode);
}