// concat method

let a = ["hendry",'michel',"steve","harry"];
let b = ["peter", "robert","hendry","geroge"];

let c = a.concat(b);
console.log(c);
console.table(a);

a.forEach((numbe,index,b) => {
    console.log("foreach ",index,":", numbe);
    b.pop();
})

console.log(a);
let d = []
b.forEach((element) =>{
    d.push(element)
    
})
console.log(d);

let arrelement = [{color : "red",id:"redid"},{color : "black",id:"blackid"},{color : "blue",id:"blueid"},{color : "orange",id:"orangeid"}];

function printColor(item,index,array){
    console.log("array :",array[index]);
    console.log( index,":", item.color);
}

arrelement.forEach(printColor);

//map

let getId = arrelement.map((item) => item.id)

console.log("map method",getId);

let num = [1,2,3,4,5,6,7,8,9];

let sqrt = num.map((i)=>Math.pow(i,2));
 console.log("square :",sqrt);

// reverse
let num2 =  [1,2,3,4,5,6,7,8,9];
console.log("normal array :",num2);
num2.reverse();
console.log("reversed array :",num2);

let objRev = [{0:1,},{1:2,},{ 2:3,},{3:4}];

console.log("normal array of object :",objRev);
objRev.reverse();
// Array.prototype.reverse.call(objRev)
console.log("reversed array of object :",objRev);


let sortstr = ["kit","array","Zebra","BEach","Basket"];
console.log("normal array :",sortstr);
sortstr.sort();
console.log("sort array",sortstr);

let sortnum = [171,92,5,20,12,18];
console.log("normal array :",sortnum);
sortnum.sort()
console.log("sort array",sortnum);

function compare(a,b){
    return a-b;
}

console.log("sort compare",sortnum.sort(compare));


let arrfill = [1,2,3,4,5,6,7,8,9];
console.log("normal array :",arrfill);
arrfill.fill(4, 5,8 );
console.log("array fill:",arrfill);


let arrjoin = ["this","will","be","joined","using","join method"];
console.log("normal array :",arrjoin);
let joinarray = arrjoin.join(' ');
console.log("array join : ",joinarray);

//filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let arrfilter = words.filter(word => word.length > 6);
console.log("normal array :",words);
console.log("filtered array:",arrfilter);

// find and findindex
let arrfind = [1,23,3,73,16];

let findarr = arrfind.find((o)=> o>5);
function large(a){
    return a>5;
}
let arrindexof = arrfind.findIndex(large);

console.log("normal array :",arrfind);
console.log("find array :",findarr);
console.log("findindex :",arrindexof);

let inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  function isCherries(fruit) {
    return fruit.name === 'cherries';
  }
  
  console.log(inventory.find(isCherries));


  // includes 

let arrinclude = ["honda","tvs","bajaji","royal enfiled"]

console.log("inclues :",arrinclude.includes("tvs",2));
  
let spre = "wordss";

let af = [...spre];
console.log(af);
let af1 = {...spre};
console.log(af1);

let agggg = { a: "kjjjjh", b: "guyjgyujgygyujgyujgyujg" }
let bgggg = {...agggg, c: "uygtuuy6gukygkyuguyg"}

console.log(bgggg);





