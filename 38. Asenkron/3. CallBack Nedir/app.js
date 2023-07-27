//?     CallBack Nedir?


//  Callback: bir fonksiyonu bir fonksiyona parametre geçerek
//  asenkron yapıyı senkron yapıya çevirir.
function getName(callback){
    setTimeout(()=>{console.log("mert"); callback();},1000);
    
}

function getSurname(){
    setTimeout(()=>{console.log("sargın")},500)
}

// getName();       bu ikisi asenkron
// getSurname();

getName(getSurname)