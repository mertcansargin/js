//?     Set kullanımı
//?     Set kullandığımızda bir değeri yalnızca 1 kez ekleyebiliriz. 
//?     Eklemeye çalıştığımızda işe yaramaz boşuna kod yazmış oluruz
//?     Key-Value mantığıyla çalışmaz 


const set=new Set();

//?    add metodu 

set.add("mert");
set.add("mert");
set.add("serra");
set.add(5.11);
set.add(true);
set.add({username:"ms4119",pass:1941});
set.add([1,2,3,4,5]);

//! Arrayler ve objeler parantezin içerisinden direkt silinemezler
//! bunları silmek için bir değişkene atıp değişkeni set etmemiz gerekir. böylece silinmiş olur.
const degisken=[1,5,6,4,2];
set.add(degisken);

console.log(set);

//?  delete metodu
// set.delete(5.11);
// set.delete(true);
// set.delete(degisken);
// console.log(set.size);

//?     has metodu
// console.log(set.has("mert"));

//?     For of metodu ile ekrana yazma
for(const value of set){
    console.log(value);
}

//*Array e çevirip foreach ile döndük
let value2=Array.from(set);
value2.forEach(value2=>console.log(value2))


//?     Arrayden set oluşturma 
let array=[1,"elif",4.5,{username:"serra",pass:2001}];
const set2=new Set(array);
console.log(set2);
