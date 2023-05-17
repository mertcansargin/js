//todo      Parantezsiz geriye değer döndürmeyen metot tanımlama


//?     function yazdir(){
//?         yazılacak kodlar 
//?     }

//? Hazırladığımız metot hazır...
// function alertBilgi(){
//     alert("alert mesajı verildi");
// }
// //?     Çalıştırmak için mutlaka çağırmammız gerekir
// alertBilgi();


//? iki değer alarak bunu toplayan function

// function topla(){
//     alert(5+6);
// }

// topla();


//todo      Parametreli metot tanımlamak

// function yazdir(isim,soyisim){
//     console.log(isim+" "+soyisim);
// }
// yazdir("ali","sargın")

//? Bir sayının küpünü alan function

// let sayi=Number(prompt("Sayı giriniz: "));
// let sonuc=0;

// function cupe(sayi){
//     sonuc=sayi*sayi*sayi;
//     alert(sonuc);
// }

// cupe(sayi);


//todo Geriye değer döndüren metot oluşturma 
//?     return ---> Bir değeri metodun dışına çıkarmak, taşımak için kullanılır.
//?                 Bir metodu bitiren anahtar kelimedir. return altına yazılan kodlar hiçbir zaman çalışmaz 

let donenDeger=cupe(2);
kareal(donenDeger);

function kareal(sayi){
    let sonuc=sayi*sayi;
    console.log(sonuc)
}

function cupe(sayi){
    let sonuc=sayi*sayi*sayi;
    return sonuc;
}