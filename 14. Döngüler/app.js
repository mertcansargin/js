//? FOR DÖNGÜSÜ

//todo for(değişken;koşul;değişken arttirma){ kod satırları }

//  for(let i=1;i<=10;i++){
//     console.log(i);
//  }


 //? 50 den sıfıra kadar ekrana yazdırıyor ve en son bu sayıların toplmını alan kod 
 
//  let toplam=0;
//  for(let i=50;i>=1;i--){
//   toplam+=i;
//     console.log(i);
    
//  }
//  console.log(toplam);

//todo  While(koşul){ kodlar + sayaç}

// let sayac=1;
// while(sayac<=10){
//     console.log(sayac);
//     sayac++; //* bu sayaç yazılmazsa kod sonsuz döngüye girer ve uygulama kitlenir.
// }

//? while(true) yapısında bu bir sonsuz döngü örneğidir yine her zaman bu yapının içine girer ve çalıştırır
//? bu yapıda sayaç kullanılır ve break ile çıkarız

// sayac=0;
// while(true){
//     if(sayac==7) break;
//     console.log(sayac)
//     sayac++;
// }

//todo  do { kodlar } while( koşul ) 
//? do-while da kodlar en az bir 

let yas=15;
do{
    console.log("Ehliyet alabilirsiniz..");
}
while(yas>=18)