function School(name){
    this.class = name;
    this.assemblymeeting = function(){
        console.log("assemble");
    }
}
let class10 = new School("class10");
console.log(class10);
class10.assemblymeeting();

School.prototype.eveningmeet = function(){
    console.log(`assemble ${this.class}`);
}

class10.eveningmeet();

class10.roomassemble = function(){
    console.log("room assembly");
}

class10.roomassemble();
// console.log(class10);

// Object.getPrototypeOf(class10);
// console.log(class10);
class10.__proto__.allassemble = function()
{
    console.log("all you should assemble");
}
console.log(class10);
// class10.allassemble();

let class9 = new School();
class9.allassemble();

let val = Object.getPrototypeOf(class10);
console.log(val)