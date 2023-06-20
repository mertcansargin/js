//?     Date (Tarih) Metotları

let tarih=new Date();

console.log(tarih.getDate());

console.log(tarih.getDay());

console.log(tarih.getFullYear());

console.log(tarih.getHours());

console.log(tarih.getMilliseconds());

console.log(tarih.getMinutes());

console.log(tarih.getMonth()+1); //aylar 0-11 arasında olur buna dikkat etmemiz gerekir 

console.log(tarih.getSeconds());

console.log(tarih.getTime());

console.log(tarih.toLocaleDateString());

console.log(tarih.toLocaleString());

console.log(tarih.toLocaleTimeString);

//Todo      SET (Atama) Metotları

console.log(tarih.getDate(tarih.setDate)+2);

console.log(tarih.getHours(tarih.setHours)+11);

console.log(tarih.getFullYear(tarih.setFullYear)+5);

console.log(tarih.getMonth(tarih.setMonth)+8);