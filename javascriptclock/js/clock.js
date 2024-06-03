

const WriteName=()=>{
    let isName=window.prompt("Lütfen İsminizi Giriniz...");
    console.log("name",isName);
    let newMyName=document.getElementById("myName");
    newMyName.innerHTML=isName;

}


const WriteTime=()=>{

    let clock=new Date().toLocaleString('tr-TR');
    myclockid=document.getElementById('myClock');
    myclockid.innerHTML=clock;
    setInterval(WriteTime, 1000);
}



WriteName();
WriteTime();