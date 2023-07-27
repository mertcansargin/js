//?     İnheritance Kavramı

class Person{
    firstname="Mert";

    write(){
        console.log(`Person Write:${this.firstname}`);
    }
}

class Student extends Person{
    write(){
        console.log(`Student Write:${this.firstname}`);
        super.write();
    }
}

const student1=new Student("mehmet");
student1.write();