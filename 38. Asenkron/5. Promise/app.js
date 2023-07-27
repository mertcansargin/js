//  Promise 

//?     Asenkron yapıları senkrona çevirmek için kullanıyoruz.
//?     CALLBACK lerin alternatifi
//?     ES6 ile hayatımıza girdi

// let check=true;

// function createPromise(){
//     return new Promise((resolve,reject)=>{
//         if(check){
//             resolve("Promise de hiçbir sıkıntı yok");
//         }
//         else{
//             reject("Sıkıntı büyük usta")
//         }
//     })
// }

// createPromise()
// .then((response)=>{console.log(response)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{console.log("Döngü bitti")})


function getStudents(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
       try {
        xhr.addEventListener("readystatechange",()=>{
            if(xhr.readyState===4 && xhr.status===200){
                resolve(JSON.parse(xhr.responseText));
            }
        })
       } catch (error) {
        reject(error);
       }
       xhr.open("GET",url);
       xhr.send();
    })
}

getStudents("students.js")
.then((data)=>console.log(data))
.catch((err)=>console.log(err))