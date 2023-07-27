class MigrosBase{
    indirimOranı=20;

    constructor(isim,soyisim,kartVarmi,urunler){
        this.isim=isim;
        this.soyisim=soyisim;
        this.kartVarmi=kartVarmi;
        this.urunler=urunler;
    }

    hesapla(){
        odenecekTutar=0;

        if(this.urunleriKontrolEt(this.urunler)){
            this.urunler.foreach(urun=>odenecekTutar+=(urun.fiyat*(100-this.indirimOranı)*100))
        }
        else alert("en az 1 ürün almalısınız.");
        return odenecekTutar;
    }


    urunleriKontrolEt(urunler){
        if(urunler!=null&&urunler.lenght>0){
            return true;
        }
        return false;
    }
}