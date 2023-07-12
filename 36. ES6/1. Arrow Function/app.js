//? Arrow Function Kullanımı

// function yazdir(name){
//     console.log("merhaba",name)
// }
// yazdir("mehmet");


//todo Arrow function ile

const yazdir=(name,lastName)=>{
    console.log("merhaba",name,lastName)
}
yazdir("ali","çelik");

// tek satır olunca süslü parantez kullanmamıza gerek kalmaz
const yazdir2=(firstName)=>console.log("merhaba",firstName)
yazdir2("metehan");

// dışarıdan tek bir değer aldığımızda değerin dışındaki parantezini koymasakta olur
const yazdir3=lastName=>console.log("merhaba",lastName)
yazdir3("berra");

// geriye değer döndürürken return yazmamıza gerek kalmaz otomatik geriye değer döner
const kareAl=(x)=> x*x;
console.log("Sayının Karesi: "+kareAl(3));

const küpAl=x=>x*x*x;
console.log("Sayının Küpü: "+küpAl(5) );
