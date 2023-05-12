// *? SCOPE KAVRAMI

// --- Global Scope
// --- Function Scope
// --- Block Scope

// var a=5 // Global Scope. Bu değere istediğimiz her yerden erişebiliriz.

// if(true){
// console.log(a);
// }
// function method(){

// }
// method();
// --------------------------------------
// function method1(){
//     var sayi=10; //function Scope. Bu değere sadece bu function üzerinden erişim sağlanabilir dışarıda veya başka bir yerden erişim sağlanamaz.
//     console.log(sayi);
// }
// method1();
 
//---------------------------------------
// Block Scope if-else,for,do-while gibi döngü içerisinde kullanılan değişkenler için kullanılır.

var a=5; // Bu Global Scopedur
function method(){
    var b=10; //Bu Function Scopedur
    if(true){
        var c=15; //Bu Block Scopedur
    }
}