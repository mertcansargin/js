//?   For in & For of Döngüleri 

let names=["ali","ahmet","elif"];

// names.forEach(function(names){
//     console.log(names);
// })

//* bu kısaltılmış hali üsttekinin
// names.forEach(names=>console.log(names))

//? For in döngüde döndükten sonra dizinin index numaralrını verir bu index numarasıyla değerede ulaşabiliriz tabi ki
for(let name in names){
    console.log("in: "+name);
    console.log("in: "+name, names[name]);
}

for(let isim of names){
    console.log("of: "+isim);
    console.log("of: "+isim+" "+names.indexOf(isim))
}