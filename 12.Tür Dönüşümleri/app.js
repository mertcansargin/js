//? String bir değişkeni İnteger a çevirmek için Number sınıfı kullanılır.
//? String bir değişkeni İnteger a çevirmek için perseInt sınıfı kullanılabilir buda bir alternatiftir.
//? String bir değişkeni Ondalıklı bir sayıya çevirmek için parseFloat sınıfı kullanılabilir

// let a="10";
// let b=Number(a);
// console.log(typeof b);

// let a="10";
// let b=parseInt(a);
// console.log(typeof b);

// let a="10.5";
// let b=parseFloat(a);
// console.log(b);
// console.log(typeof b);

//? Integerdan String e dönüştürmek için String sınıfı kullanılabilir.
//? alternatif olarak .toString(); metoduda kullanılabilir. 

// let a=10.5;
// let b=String(a);
// console.log(b);
// console.log(typeof b);

// let a=10.5;
// let b=a.toString();
// console.log(b);
// console.log(typeof b);

//? Bir string ifadeyi integer yapmaya çalışırsak örn "Ali" ismi gibi o zaman NaN hatası alırız.
//? NaN = Not a Number 

// let a="ali";
// let b=Number(a);
// console.log(b);
// console.log(typeof b);


//? object(dizi) bir ifadeyi Stringe rahatlıkla çaevirebilriz
//? object(dizi) bir ifadeyi Integer bir ifadeye Çeviremeyiz. Hata alırız.

// let rakamlar=String([1,2,3,4]);
// console.log(typeof rakamlar);
