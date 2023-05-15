//? Break bir döngünün içerisindeyken o döngüden çıkmak için kullanılan yardımcıdır.

// let sayac=1;
// while(sayac<=20){
//     console.log(sayac);
//     if(sayac==5){break;} 
//     sayac++
// }

//? Continue bir döngünün içerisindeyken o döngüden 1 seferlik 
//? çıkmak için kullanılan yardımcıdır

let sayac=0;

while(sayac<=10){
    sayac++;
    if(sayac==5){continue;}
    console.log(sayac);
    
}