//? Math Sınıfı Metotları

//? 1-Floor             sayıyı noktadan sonraki değerlerden kurtarır
//? 2-Cei1              sayıyı noktadan sonraki değerlerden kurtarır
//? 3- Round            en yakın değere yuvarlama yapar
//? 4 -Max              dizideki maksimum sayıyı alır
//? 5-Min               dizideki minimum sayıyı alır
//? 6- Random           0 ile 1 arasında rastgele bir sayı üretir
//? 7 -Abs              mutlak değerini alır sayının
//? 8-Sqrt              sayının karekökünü alır
//? 9 -Pow              sayının üzerini alır 


console.log("Floor: "+Math.floor(3.46));

console.log("Ceil: "+Math.ceil(6.89));

console.log("Round: "+ Math.round(5.78));

console.log("Max: "+Math.max(1,2,5,6,8,10));

console.log("Min: "+Math.min(1,2,5,4,7,6,10));

console.log("Random: "+Math.random());      

console.log(Math.floor(Math.random()*100));       //sıfır ile 100 arası random sayı

console.log("Abs: "+ Math.abs(-15));     

console.log("Sqrt: "+ Math.sqrt(5));

console.log("pow: "+Math.pow(3,4));
