


let sayi=prompt("Bir Sayı giriniz: ");
let toplam=0;

for(let i=0;i<sayi.length;i++){   //?burada sayının uzunluğuna göre döngü dönüyor
    let rakam=sayi.charAt(i);       //?burada rakam diye değişken oluşturup girilen rakamın indexteki sayısını değişkenimize atıyoruz 
    toplam+=rakam*rakam*rakam;      //?burada toplam değişkenimize rakamın küpü alınarak toplanıyor ve atanıyor

}

if(Number(sayi)==toplam){
    alert("Yazdığınız sayı armstrong sayıdır.");
}
else alert("Sayı armstrong sayı değildir...")