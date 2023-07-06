//!  Storage 

//todo  Session Storage 

//? Session değer ekleme

// sessionStorage.setItem("191","hasan");
// sessionStorage.setItem("192","bülent");
// sessionStorage.setItem("193","kemal");
// sessionStorage.setItem(194,888);

//? Session ekranını temizleme

// sessionStorage.clear();

//? Sessiondan değer silme

// sessionStorage.removeItem("191");

//? Session değer görme

// let value=sessionStorage.getItem("192");

// if(value===null){
//     console.log("Değer Bulunamadı.");
// }else {
//     console.log("Değer: ",value);
// }

// //?  Sessiondan index numarası ile key değerini görüntüleme

// let value2=sessionStorage.key(1);
// console.log(value2);

// //? Session Storage - Array yazdırma 

// let dizi=["ali","ayşe","ufuk","mete","elif","kürşat"];
// sessionStorage.setItem("names",JSON.stringify(dizi));
// console.log(dizi);

// let value3=JSON.parse(sessionStorage.getItem("names"));  
// value3.forEach(function(isim){
//     console.log(isim);
// })

//todo   Local Storage

// localStorage.setItem("131","ümit");
// localStorage.setItem(132,"ali");
// localStorage.setItem("133","sefa");

// let getir=localStorage.getItem(131);
// console.log(getir);
