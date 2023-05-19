//? DİZİNİN METOTLARI 

//?     push : dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner.
//?     unshift : dizinin başına eleman ekler, eleman sayısını geri döner.

//?     pop : dizinin sonundan eleman siler, eleman sayısını döner. 
//?     shift : dizinin başından eleman siler, eleman sayısını döner.

//?     splice(index,index) : eleman eklemek ve silmek için kullanılır.

//?     toString() : diziyi stringe çevirebiliriz. 
//?     join : diziyi stringe çevirebiliriz. Farkı ise araya eleman ekleyebiliriz.

//?     concat : dizileri birleştirmek için kullanılır.
//?     slice(dilimlemek) : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
//?     length : dizinin uzunluğunu verir.
//?     reverse : dizinin elemanlarını ters çevirir.,
//?     split(bölmek) : belirli bir ifadeye göre bölüp diziye çevirmek
//?     indexOf : dizi içerisindeki aranan elemanın index numarasını verir ona göre işlem yapılabilir.
//?     includes : verilen elemanı içeriyor mu ona bakar geriye dönen değer true yada false olur 

let arabalar=["bmw","volvo","fiat","dacia","renault","porsche"];
let durumlar=["çok iyi","iyi","normal","düşük","çok düşük"];

//? push metot
// arabalar.push("toyota");
// console.log(arabalar);

//? unshift metot
// arabalar.unshift("opel");
// console.log(arabalar);

//? pop metot
// let silinen=arabalar.pop();
// console.log(arabalar);
// console.log(silinen);

//? shift metot
// let silinen=arabalar.shift();
// console.log(arabalar);
// console.log(silinen);

//? splice metot
// arabalar.splice(3,0,"honda",);
// console.log(arabalar);

// arabalar.splice(1,2);
// console.log(arabalar);

// arabalar.splice(2,2,"hundai");
// console.log(arabalar);

//? toString metot
// console.log(typeof arabalar);
// arabalar.toString();
// console.log(typeof arabalar);

//? join metot
// let strArabalar=arabalar.join("*"); //* dizideki elemanları yan yana yazarken aralarına * koyuyor
// console.log(strArabalar);

//? concat metot
// let birlesmisDizi=arabalar.concat(durumlar);
// console.log(birlesmisDizi);

//? slice metot 
// console.log(arabalar);
// let ayrıDizi=arabalar.slice(3);
// console.log(ayrıDizi);

//? lenght özelliği
// console.log(arabalar.lenght);

//? reverse metot      
// arabalar.reverse();
// console.log(arabalar);

//?  split metot
// let isimler="ali,ayşe,mehmet";
// let isimDizi=isimler.split(",");
// console.log(typeof isimDizi);
// console.log(isimDizi);

//? indexof metot
// let index=arabalar.indexOf("renault");
// console.log(index);

//? includes metot
// let sonuc=arabalar.includes("volvo s90");  
// console.log(sonuc);