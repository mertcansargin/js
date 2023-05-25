
let urun1={
    isim:"Monster abra a5",
    fiyat:"5000",
    stok:2
}
let urun2={
    isim:"Lenovo ideapad",
    stok:8,
    fiyat:4000
}
let urun3={
    isim:"macbook air 2020",
    stok:40,
    fiyat:10000
}
let urun4={
    isim:"Lenovo g15",
    stok:10,
    fiyat:6000
}
let urun5={
    isim:"macbook pro 2020",
    stok:20,
    fiyat:15000
}
let dizi=[urun1,urun2,urun3,urun4,urun5];
let filtreliUrunler=[];
let kelime=prompt("aranacak bilgisayarı yazınız: ");
filtreliUrunlerDoldur(dizi);
filteliUrunYazdir(filtreliUrunler);

function filtreliUrunlerDoldur(dizi){
    dizi.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kelime.toUpperCase(),0)){
            filtreliUrunler.push(urun);
        }
    });
}
function filteliUrunYazdir(dizi){
    dizi.forEach(function(urun){
        console.log("-----------------------------");
        console.log("|"+urun.isim+"|"+urun.stok+"|"+urun.fiyat+"|");
        console.log("-----------------------------");
    })
}