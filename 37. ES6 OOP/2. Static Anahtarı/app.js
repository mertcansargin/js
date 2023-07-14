//?     Static 

class Matematik{
    topla(a,b){
        console.log(a+b);
    }
    static cikar(a,b){
        console.log(a-b);
    }
    bol(a,b){
        console.log(a/b);
    }
    carp(a,b){
        console.log(a*b);
    }
}

const islem=new Matematik();
islem.topla(10,5);

//! statik olarak tanımlanmışsa CLASS üzerinden erişilir.
//! static olarak oluşmasıysa NESNE üzerinden erişilir.

//* çıkarma static oluşturulmuş bu yüzden nesenden çaüğırak işe yaramaz
Matematik.cikar(10,5);