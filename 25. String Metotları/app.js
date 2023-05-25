//? String sınıf metotları

//? charAt()   --->index değerini giriyoruz ve o indexteki değeri getirir
//? concat()   --->iki veya daha fazla değeri birleştirmeye yarar
//? indexof()   --->bununla girdiğimiz harfin yada bir değerin kaçıncı indexte olduğunu gösterir bize
//? lastindexof()   ---> sondan başlayarak verdiğimiz index değerini arar
//? toUpperCase()   --->    kelime yada cümlenin hepsini büyük harfe çevirir
//? toLowerCase()   --->    kelime yada cümlenin hepsini küçük harfe çevirir
//? trim()   --->   trim() metodu ile karakter dizisinin başındaki ve sonundaki boşluk karakterlerini sileriz.
//? slice()   ---> belirli indexler arasındaki indeksleri ekrana basmak için kullanılır
//? substring()   ---> yukarıdakiyle hemen hemen aynı özelliktediğr,
//? replace()   ---> Bu metod, değiştirmek istediğimiz metni ve değiştirmek istediğimiz yeni metni alır.
//? split()   ---> Elimizde bulunan metini istediğimiz şekilde parçalara bölerek ondan bir array oluşturan JavaScript String metodudur.
//? valueOf()   --->
//? startsWith()   --->Tanımlı olan bir stringin hangi karakterle başlayıp başlamadığı bulmak için startsWith,
//? endsWith();   --->hangi karakterlerle bitip bitmediğini bulmak için ise endsWith kullanılır. 

let kurs="Modern Web Geliştirme Kursu";
let tarih="2022";

// //* ChatAt Kullanımı
// let karakter=kurs.charAt(1);
// console.log(karakter);

// //* Concat metot
// let sonuc=kurs.concat(" ",tarih," Mert");
// console.log(sonuc);

// //* indexof metot
// let index=kurs.indexOf("W");
// console.log(index);

// //* lastindexof metot
// let index1=kurs.lastIndexOf("E");
// console.log(index1);

// //* toUpperCase metot
// let index2=kurs.toUpperCase();
// console.log(index2);
// console.log(kurs); //?burada küçük yazıyor

// //* toLowerCase metot
// let index3=kurs.toLowerCase();
// console.log(index3)

// //* trim metot
// console.log(kurs.trim());

// //* slice metot
// console.log(kurs);
// console.log(kurs.slice(22,28));

// //* Substring metot
// //*  yukarıdakiyle hemen hemen aynı özelliktedir
// console.log(kurs);
// console.log(kurs.substring(0,6));

//* Replace metot
// console.log(kurs);
// console.log(kurs.replace("Mordern,Güncel"));

// //* Split metot
// console.log(kurs);
// let dizi =kurs.split(","); //* belirli bir değere göre diziye bölerek atadık
// console.log(dizi);

//*     valueOf metot
console.log(kurs.valueOf());

//*     SmartSwith metot
console.log(kurs);
console.log(kurs.startsWith("M"));
if(kurs.startsWith("M")){
    console.log("M harfi ile başlamaktadır.");
}
//*     EndSmith metot
console.log(kurs);
console.log(kurs.endsWith("Geliştirme Kursu"));