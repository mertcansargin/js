//?  Map Objesinin kullanımı


const map1=new Map();

//*  SET etmekte her şeyi kabul eder

// map1.set(1,{firstName:"Ahmet",lastName:"Çelik"});
// map1.set(true,"5");
// map1.set(false,5);
// map1.set([1,2,3],"İstanbul");

map1.set(34,"İstanbul");
map1.set(41,"Kocaeli");
map1.set(6,"Ankara");
map1.set(19,"Çorum");
map1.set(key,"obje")

//* GET

// console.log(map1.get(34)); 
// console.log(map1.get(41));
// let donenDeger=map1.get(6);

//* SİZE

// const value=map1.size;

//* DELETE 

// const value=map1.delete(6);
// console.log(map1.size)
// console.log(value);

//* HAS
//  has metodu içerisinde sahip mi değil mi diye sorgular. cevaba göre true yada false döner
// const value=map1.has(23);
// console.log(value);

// For of ile map dönme
// for(let [key,value] of map1){
//     console.log(key,value);
// }

// const keys=Array.from(map1.keys());
// keys.forEach(key => {
//   console.log(key,map1.get(key));
// });

// for(let key1 of map1.keys()){
//     console.log(key1)
// }

//*     Array i map olarak çevirme 

let array1=[[34,"istanbul"],[19,"çorum"],[41,"kocaeli"]];
let map2=new Map(array1);

console.log(map2);