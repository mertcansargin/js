//?      Template Literals

const yaz=(name,surname)=>{
    console.log("Adınız: "+name+" Soyadınız: "+surname);
    //* yukarıdakini kullanmak yerine daha kolay ve okunaklı olan template literals kullanılabilir
    console.log(`Adınız: ${name} Soyadınız: ${surname}`);
}
yaz("mert","sargın");

const api=page=>{
    console.log(`http://localhost:8080/users/${page}`);
}
api(12);