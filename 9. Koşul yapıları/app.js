//. KOŞUL YAPILARI 

// if-ewlse

// if(yas>=18){
//     alert("oy kullanabilirsiniz.");
// }
// else alert("yaşınız küçük oy kullanamazsınız...")


// DERS ORTALAMASI BULMA PROGRAMI 

// ? VİZE1 30 VİZE2 30 FİNAL 40

// let vize1=Number(prompt("1. vizeyi giriniz: "));
// let vize2=Number(prompt("2. vizeyi giriniz: "));
// let final=Number(prompt("Final notunuzu giriniz: "));

// let ort=((vize1/100*30)+(vize2/100*30)+(final/100*40));

// if(ort>=50){
//     alert("Dersi başarıyla tamamladınız... "+"Ortalamanız: "+ort);

// }
// else alert("Ders tamamlanamadı"+"Ortalamanız: "+ort);
//? İF - ELSE İF- ELSE 

//? Bu sorgulama yöntemi çoklu if olarak geçer birden çok sorgulanacak değer olduğunda kullanırız.

//? girilecek 4 yol vardır.

// let yol=Number(prompt("Lütfen girmek istediğiniz yolu giriniz: "));

// if(yol==1) alert("Seçilen "+yol+". Yoldur");
// else if(yol==2) alert("Seçilen "+yol+". Yoldur");
// else if(yol==3) alert("Seçilen "+yol+". Yoldur");
// else if(yol==4) alert("Seçilen "+yol+". Yoldur");
// else alert("Lütfen 1 ile 4 arasında bir yol seçiniz");

// Todo BİRDEN FAZLA İF İLE ÇALIŞMAK 
//? Bu yapıda ifler alt alta sıralanır. Koşulların sağlanıp sağlanmadığı kontrol edilir. 
//? Koşullar birindede sağlansa yada hepsinide sağlasa koşulun sağladığı ifler çalışır.
//? Yani her bir if farklı bir if olarak kabul edilir biriniz sağladım çıkayım döngüsü olmaz.

let ad=prompt("Adınızı giriniz: ");
let tckn=prompt("Tc No yu giriniz: ");
debugger
function kontrol(ad,tckn){
    if(ad==""||ad==null){
        alert("Ad kısmı boş geçilemez.");
    }
    if(tckn.lenght!=11){
        alert("TCKN 11 hane olmalıdır")
    }
    alert("başarılı");
    
}
kontrol();