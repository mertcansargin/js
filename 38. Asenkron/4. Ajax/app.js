//  Ajax Nedir? 
function prepareURL(url,id){
if(id===null){
    return url;
}
return `${url}?postId=${id}`;
}


 function getComments(url, id){
    let newURL=prepareURL(url,id);
    const xhr=new XMLHttpRequest();
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState===4&&xhr.status===200){
            console.log(JSON.parse(xhr.responseText))
        }
    })

    xhr.open("GET",newURL);
    xhr.send();
 }

 function getData(url){
    const dataxhr=new XMLHttpRequest();
    dataxhr.addEventListener("readystatechange",()=>{
        if(dataxhr.status===200 && dataxhr.readyState===4){
            console.log(JSON.parse(dataxhr.responseText));
        }
    })
    dataxhr.open("GET",url);
    dataxhr.send();

 }
 getData("https://jsonplaceholder.typicode.com/albums");

//  getComments("https://jsonplaceholder.typicode.com/comments",null);