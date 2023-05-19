//? DİZİLERE BAŞLIYORUZ

//?     Dizilerde saymaya 0 dan başlanır
// let sayilar=[0,1,2,3,4,5,6,7,8,9]; //? burada 10 indexli bir dizi tanımladık
// sayilar[sayilar.length-1]="Mehmet";     //? burada sondaki indexi almak için sayılar dizisinin uzunluğundan 1 çıkardık ve mehmete eşitledik
// console.log(sayilar[10]);

// let isimler=["Ali","Ayşe","Elif","Esra"];
// isimler[2]="Uğur";
// console.log(isimler);

// let karisikdizi=[12,16,"Ali",5.7,true,null,undefined];
// console.log(karisikdizi);


// let dizi=[];                //? burada direkt dizi olarak tanımladık
// let dizi2=new Array();      //? bu nesne türeterek oluşturduğumuz dizi


    //? FORECH DÖNGÜSÜ


// let isimler=["ali","ayşe","mehmet","veli","metehan","kürşat"];

// //?     kullanım ve kolaylık bakımından foreach daha iyidir
// isimler.forEach(function(isim){
//     console.log(isim);
// })

// console.log("---------------------------------------");

// //?     yukarıdaki ile aynı kod ama bu örnek for kullanımı ile
// for(let i=0;i<isimler.length;i++){
//     console.log(isimler[i]);
// }

// console.log("---------------------------------------");

// //?      While döngüsü ile dizi yazdırma
// let sayac=0
// while(sayac<isimler.length){
//     console.log(isimler[sayac]);
//     sayac++;
// }