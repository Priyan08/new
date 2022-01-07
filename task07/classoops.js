class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("hello");//need clarification
    }
    name = 20;
    age=345;
    display() {
        console.log("hii i am display");
        console.log(`${this.name} is ${this.age} years old`);
    }
}

let priyan = new student("padma priyan", 20);
priyan.display();
// console.log(priyan,"nveifvdi");

var clsexp = class Bike{
    constructor(name) {
        this.name = name;
        console.log(`${name}`);
    }
}
var clsobj = new clsexp("jai");
// clsobj;
var clsobj2 = new clsexp("priyan");
clsexp;
// clsexp.constructor();
// console.log(clsexp.__proto__.constructor())
student;


