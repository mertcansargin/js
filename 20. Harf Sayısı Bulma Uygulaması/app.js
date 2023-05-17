
let kelime="Bu bir JavaScript dersi örneğidir baya eğleniyorum";
let harf=prompt("Aranacak harfi giriniz");
let sonuc=bul(harf);
alert("harf sayısı: "+sonuc);

function bul(harf){
    let toplam=0;
    for(let i=0;i<kelime.length;i++){
        if(kelime.charAt(i).toLowerCase()===harf.toLowerCase())
        toplam+=1;
    }
    // console.log("Harf Sayısı: "+ toplam);
    return toplam;
}