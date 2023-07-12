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

//* GET

console.log(map1.get(34)); 
console.log(map1.get(41));
let donenDeger=map1.get(6);

//* SİZE

// const value=map1.size;

//* DELETE 

const value=map1.delete(6);
console.log(map1.size)
console.log(value);