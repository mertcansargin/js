//?      Spread Operatörü Kullanımı 

let numbers=[10,20,30,40];

function add(a,b,c,d){
    console.log(a+b+c+d);
}
// Eski yöntem
// add(numbers[0],numbers[1],numbers[2],numbers[3]);

//  ES6 ile daha kolay yöntemi
add(...numbers);


//todo      ...numbers = numbers[0],numbers[1],numbers[2],numbers[3]
//?         bu iki kullanım birbirine eşittir


const diller1=["c#","Python"];
// const diller2=["c++","ruby",diller1[0],diller1[1]];
const diller2=["c++","ruby",...diller1];

console.log(diller2);


const isimler=["ali","ahmet","ayşe"];
let isimler2=[]
// isimler2[0]=isimler[0];
// isimler2[1]=isimler[1];
// isimler2[2]=isimler[2];
// console.log(isimler2);

//*   boş olan dizinin içini bul şekilde kolayca doldurabiliriz
isimler2=[...isimler]
console.log(isimler2)