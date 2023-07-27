//?     JavaScript Senkron çalışan bir dildir.
//?     yani her şey sırayla yazdırılır.


//* Yalnızca Asenkron Web APİ tarafında çalışır: Eventler(olaylar)=> klavye tıklama olayları mesela
//*                                              Timing            => setout olayları
//*                                              Http isteklerinde ...



console.log("mert");        //todo  SENKRON

setTimeout(()=>{
console.log("asenkron 500 çalıştı");        //todo  ASENKRON
},500)

setTimeout(()=>{
    console.log("asenkron 1000 çalıştı");   //todo  ASENKRON
    },1000)

console.log("çorum")            //todo  SENKRON