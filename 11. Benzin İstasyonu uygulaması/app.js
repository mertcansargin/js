//?  Benzin İstasyonu
//? 1-Dizel 24.53
//? 2-Benzin    22.25 
//? 3-LPG   11.1



//? Gelen müşteriden alacağımız bilgiler;
//? I-Yak1t Tipi
//? 2-Yük1enecek yakıt litresi

let Dizel=24.53
let Benzin  =  22.25 ;
let LPG  = 11.1;
const AltSatir="\r\n";

let yakit=Number(prompt("Yüklenecek Yakıtı Seçiniz:"+AltSatir+" 1-Dizel"+AltSatir+" 2-Benzin "+AltSatir+" 3-LPG"));
let litre=Number(prompt("Kaç litre yüklenecek? "));

function hesapla(yakit,litre){
    let tutar;
    if(yakit==1){
        tutar=Dizel*litre;
        alert("Yakıt tutarı: "+ tutar);
    }
    else if(yakit==2){
        tutar=Benzin*litre;
        alert("Yakıt tutarı: "+ tutar);
    }
    else if(yakit==2){
        tutar=LPG*litre;
        alert("Yakıt tutarı: "+ tutar);
    }
}
hesapla();