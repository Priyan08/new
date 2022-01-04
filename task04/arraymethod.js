// prototype
// there are three type of prototype = array object , date object, person object

function person(name,age,location){
    this.name = name,
    this.age = age ,
    this.location = location
    this.fun = (a,b) =>{
        console.log(a+b);
    }
}
let obje = new person('fff',23);
console.log(person.prototype);
console.log(person.name);
console.log(obje)
person.prototype.toString = (a)=> {
    console.log(a*a);
}
 

obje.toString(5);
obje.fun(2,4);
console.log(person.prototype);

// slice() is a method that returns a shallow copy of a portion of array into new object array
// slice(start,end) end no included

let dc = ["batman","green lantern","super man","flash"];

console.log(dc.slice(0,3));
console.log(dc);

// splice() is a method that changes the contents of an array by removing or replacing existing elements or adding new elements in place
//splice(start, deleteCount, item1, item2, itemN)

let months = ['Jan', 'March', 'April', 'august'];

console.log(months.splice(1, 0, 'Feb'));
console.log(months.splice(4, 1, 'june','july','august'));
console.log(months);


let color = ["red","blue","green","yellow","orange"];

let val = color.pop(); 
console.log(val);
console.log(color);
color.push("purple")
console.log(color);


let num = [2,3,5,6,7,8,4,5,3,2,6];

console.log(num);
num.shift();
console.log(num);
num.unshift(1);
console.log(num);

console.log(num.length);
console.log(num.indexOf(2));
console.log(num.lastIndexOf(2));