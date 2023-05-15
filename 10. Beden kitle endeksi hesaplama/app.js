//? Beden kitle endeksi hesaplama

let boy=Number(prompt("Lütfen boy uzunluğunuzu giriniz. "));
let kilo=Number(prompt("Lütfen kilonuzu giriniz. "));
debugger
function hesapla(boy,kilo){
    let endeks=kilo/(boy*2);
    console.log(boy,kilo, endeks);
    if(endeks<18,5) alert("ideal kilonun altında");
    else if(endeks>=18,5&&endeks<=24,9) alert("ideal kiloda");
    else if(endeks>=25&&endeks<=29,9) alert("ideal kilonun üstünde");
    else if(endeks>=30&&endeks<=39,9) alert("ideal kilonun çok üstünde (obez)");
    else if(endeks>=40) alert("ideal kilonun çok çok üstünde (morbid obez)");

}
hesapla();