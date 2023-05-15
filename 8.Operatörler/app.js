// ARİTMETİK OPERATORLER
//  +            ----  atama operatörü önemli !
//  -
//  *
//  /
//  %
//  ++
//  --
//  **

// let a=5;
// let b=10;
// let c="kelime";
// console.log(a+b);  //? buradaki + işareti ikiside integer olduğu için toplama işlemi gerçekleştiriyor
// console.log(a-b);    //? buradaki - işareti ikiside integer olduğu için çıkarma işlemi gerçekleştiriyor
// console.log(a+c);   //? buradaki + işareti ikiside integer yada string olmadığı için toplama yapmak yerine yan yana yazıyor
// console.log(a*b);   //? buradaki * işareti ikiside integer olduğu için çarpma işlemi gerçekleştiriyor
// console.log((a+b)/2);   //? buradaki / işareti ikiside integer olduğu için bölme işlemi gerçekleştiriyor
// console.log(a%b);   //? buradaki % işareti ikiside integer olduğu için mod alma işlemi gerçekleştiriyor bize kalan sayıyı gösteren operatör

//todo ++ işareti değeri 1 arttırmak için kullanılır
//todo -- işareti değeri 1 azaltmak için kullanılır
//todo ** işareti değerin üssünü almak için kullanılır

// let d=10;
// d++; //* d=11
// d++; //* d=12
// d--; //* d=11
// d--; //* d=10
// console.log(d**5);

// ATAMA OPERATÖRLERİ
//  =
//  ==
//  ===
//  +=
//  -=
//  *=
//  /=
//  %=
//  **=

// let sayi=5; //? 5 sayısını al sayinin içine at demek
// console.log(5=="5"); //? 5 sayısı ile tırnak içindeki 5 sayısı eşit midir? evet eşit sadece içindeki değere baktı veri tiplerine bakmadı 
// console.log(10==="10"); //? 10 sayısı ile tırnak içindeki 10 sayısı eşit midir? eşit değidir bu sefer veri tiplerinide kontrol sağladı 

// sayi=sayi+2; //? Bu örnekte sayi değişkenine 2 ekliyor ve sayiye atıyor
// sayi+=2;        //? Bu örnek yukarıdakiile aynı görevi gerçekleştiriyor ama farklı yolu
// sayi-=2;        //todo Bu örnekte sayi değişkenine 2 azaltıyor ve sayiye atıyor
// sayi*=10;       //todo Bu örnekte sayi değişkenini 10 ile çarpıyor ve sayiye atıyor
// sayi/=2;        //todo Bu örnekte sayi değişkenine 2 ile bölüyor ve sayiye atıyor
// sayi%=2;        //* Bu örnekte sayi değişkenini 2 ile mod alıyor ve sayiye atıyor
// sayi**=2;        //* Bu örnekte sayi değişkenine 2 ile üssünü alıyor ve sayiye atıyor

// MANTIKSAL OPERATÖRLER

//  &&  ve 
//  ||  veya
//  !=   eşit değil 

// let yas=18;
// let para=1000;
// let saglik=true;

// console.log(yas==18&&para==1000&&saglik==true); //* Örnek VE kullanımı
// console.log(yas==18||para==1000||saglik==true); //* Örnek VEYA kullanımı
// console.log(!(saglik)); //* Örnek EŞİT DEĞİL kullanımı


// KARŞILAŞTIRMA OPERATÖRLERİ
//  !=      eşit değil mi
//  >       büyük mü
//  <       kücük mü
//  >=      büyük eşit mi
//  <=      küçük eşit mi


//? Diyalog kutuları
//    -Alert 
//.   - Prompt
//.   - Confirm 


// ?Bu komutlar window kütüphanesinde olduğu için tek başına yazarakta çağırabiliriz. 
// ?Bunların hepsi birer functiondur . 

// alert("deneme1");  // deneme yazan mesaj fırlatır yukarıdan 

// ?Kullanıcıdan veri girişi istendiğinde yukarıdan mesaj kutusu şeklinde çıkar. 

// ?kullanıcıdan alınan veriler her zaman string değerdedir. Bunu farklı bir tür yapmak istiyorsak her zaman tür dönüşümü yapmak gerekir 
// let isim=Prompt("isminizi giriniz: "); 
// let yas1=Prompt("yaşınızı giriniz: "); 

// Console.log(isim);
// Console.log(yaş);

// ?bu kod satırı kullanıcıdan isim girmesini ister ve kullanıcının girdiği değeri tanımlanan isim değişkenine atar. Sonra sitenin console kısmında isim değişkenini yazdırır. 

// let sonuc=Confirm("silmek istediğinize emin misiniz");

// Console.log(sonuc);

// ?bu ifadede kutucuk içinde soru soruyor cevap evet ise true dönüyor hayır veya iotal ise false dönüyor be sonuc değişkenine atıyor. Her zmaan boolean değer döndürür 





