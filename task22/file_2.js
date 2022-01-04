let x = 99;
x = x +" Route";
console.log(x);


let y = 15;
y = y+5+" first two value get added, third one get concatenate";
console.log(y);

let z = 2;
z = "the value of z will not be add "+5+z;
console.log(z);

//strings

let a='the "double quotes gets ignored "';
console.log(a);

let b = "the 'single quotes get ignored'";
console.log(b);

let c = `this is template literals`;
console.log(c);

let d = 'hello this is the value that get passed';
console.log(d);
let e = `using template literals you can pass in values like this : ${d}`;
console.log(e);

const str = new String("this is string object");
console.log(typeof str);
console.log(str);



//undefined
let u = undefined;
console.log(u);
console.log(typeof u);

let n = null;
console.log(n);
console.log(typeof n);
n = null+1;
console.log(n);

//array
const arr=[1,2,'three',[4,5,['six']]];
console.log(arr);



let o = new Object('hello');
console.log(o);

let AoJ=[{name:"padma priyan"},{age:21}];
console.log(AoJ);

let bt=4;
let bf=4;
console.log(bt==bf);


let Sym1 = Symbol("Sym")
let Sym2 = Symbol("Sym")
console.log(Sym1 === Sym2) 

