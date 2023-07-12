
//todo ES6 dan önce böyle uzun uzun tanımlıyorduk
// let langs=["C#","Python","Java","C++","Ruby"];
// let lang1=langs[0];
// let lang2=langs[1];
// let lang3=langs[2];
// let lang4=langs[3];
// let lang5=langs[4];
// console.log(lang1,lang2,lang3,lang4,lang5);

//todo ES6 ile daha kısa yolu şu

// let[lang1,lang2,lang3,lang4,lang5]=langs
// console.log("ES6: "+lang1,lang2,lang3,lang4,lang5);

//todo Dizilerde kullanımı
// const hesapla=(a,b)=>{
//     const toplam=a+b;
//     const cıkar=a-b;
//     const bol=a/b;
//     const carp=a*b;
//     const dizi=[toplam,cıkar,bol,carp];
//     return dizi
// }
// let[a,b,c,d]=hesapla(10,2);
// console.log(a,b,c,d);

//todo objelerde kullanımı
const person={
    firstName:"Kürşat",lastName:"Sargın",age:23,salary:8000
    //    key: value  ,     key: value ,key:value, key:value
}
//*     Dizilerdeki gibi atama yapamayız indeks numarasına göre 
// let{firstName,lastName,age,salary}=person;
// console.log(firstName,lastName,age,salary);

//*    Eğer obje içindeki key atamalarını kullanmak istemiyorsak yeni değerini belirtiriz yanına
let {firstName:isim,lastName:soyisim,age:yas,salary:maas}=person;
console.log(isim,soyisim,yas,maas);