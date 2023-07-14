class Insan{
   constructor(name,surname,age,salary){
this.name=name;
this.surname=surname;
this.age=age;
this.salary=salary;
    console.log("yapıcı metot çalıştı")
   }
   bilgileriGoster(){
    console.log(`Àd:${this.name}
    Soyad:${this.surname}
    Yaş:${this.age}
    Maaş:${this.salary}`)
   }
}
let insan=new Insan("mert","can",23,50000);
let insan2=new Insan("metehan","sargın",2,1000);

insan.bilgileriGoster();
insan2.bilgileriGoster();

console.log(insan.name);