// var, let, const 

//var : function Scope olarak geçiyor fuction içerisinde her yerden erişim sağlayabiliyoruz.
// blockta olsa function içerisinden erişilebilir ve çalışır.
// --- ramde çok fazla yer kaplar uygulama yavaşlığına sebep olabilir.

// function model(){
//     var selam="merhaba";
//     if (true) {
//         var a=5;
//         console.log(selam);
//     }
//     console.log(a);
// }
// model();


// let, const : Block Scope özelliğine sahiptie.

// function model(){
//     if(true){
//     let a=5;
//     let b=10;
//     var d=20;
//     console.log(b);
//     console.log(a);
// }
// console.log(d);// var ile tanımladıüımız için block içerisindekini functiondan okuyabildik mesela
// console.log(a); // let ile tanımladığımız a değişkeni block olduğu için dışarıdan erişilemedi
// let c=55;
// console.log(c);

// }
// model();

// LET ile CONST arasındaki fark?
// const a bir kere değer verdiğimizde tekrardan o değişkene başka bir değer atayamyoruz.
// yani const ile tanımanan değiştirilemez.

// const a=5;
// a=10;
// console.log(a); // uygulamammız .ıktı olarak değiştirilemez hatası fırlattı.

const user={
    username:"user",password:"123456"

}
// user={} // uygulamamız const hatası  fırlattı çünkü içindeki değişkenlerideğiştirmeye çalıştık ama değiştirilemez bir yapıda 
        // let yada var olarak yazsaydık değiştirilebilirdi.

user.username="user123"; //bu örneğimizde yukarıdakinden farklı olarak değişken yerine içerisindeki değeri değiştirdik 
                            // obje lduğu için bu özellii gerçekleştirebildik.
console.log(user) 
