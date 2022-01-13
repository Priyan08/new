// // var x = {
// //     a: {
// //       b: 2
// //     }
// //   };
// //   // 2 objects are created. One is referenced by the other as one of its properties.
// //   // The other is referenced by virtue of being assigned to the 'x' variable.
// //   // Obviously, none can be garbage-collected.
  
// //   var y = x;      // The 'y' variable is the second thing that has a reference to the object.
// //   console.log(y, "11");
// //   console.log(x, "12");
// // //   x = 1;          // Now, the object that was originally in 'x' has a unique reference
// // //                   //   embodied by the 'y' variable.
  
// // //   var z = y.a;    // Reference to 'a' property of the object.
// //                   //   This object now has 2 references: one as a property,
// //                   //   the other as the 'z' variable.
// // // console.log(z, "18");
// //   y = 'mozilla';  // The object that was originally in 'x' has now zero
// //                   //   references to it. It can be garbage-collected.
// //                   //   However its 'a' property is still referenced by
// //                   //   the 'z' variable, so it cannot be freed.
// // console.log(x, "23");
// //   z = null;       // The 'a' property of the object originally in x
// //                   //   has zero references to it. It can be garbage collected.
// // console.log(x, "26");
// // console.log(z, "27");



// // var x = {};
// //   var y = {};
// //   console.log(x.a);
// //   x.a = y;        // x references y
// //   y.a = x;
// //   console.log(x);
// //   console.log(y);  

//  const myObj = new Object(  str = 'myString',
//  rand = Math.random(),
//  obj = new Object())
//      ;

// //  myObj.type              = 'Dot syntax';
// //  myObj['date created']   = 'String with space';
// //  myObj[str]              = 'String value';
// //  myObj[rand]             = 'Random Number';
// //  myObj[obj]              = 'Object';
// //  myObj['']               = 'Even an empty string';

//  console.log(typeof myObj);
//  console.log(myObj.str);



// function a() {
//   var jai=8999;
//   b();
//   function b() {
//     console.log("61",jai);

//   }
// }

// a();
// console.log("67",jai);

// let a  = [
//   {
//     product: "milk",
//     price: 100,
//     salesTax: 20,
//   },
//   {
//     product: "iceCream",
//     salesTax: 2,
//     price: 10,
//   },
//   {
//     product: "butter",
//     salesTax: 15,
//     price: 50,
//   }
// ]
// let b = 0
// b = a.reduce((currentTotal, item) => 
//   (currentTotal + (item.price + item.salesTax)),0)

  // console.log(b, "b");
// a.forEach((item) => {
//  if(item.price == 100){
//   console.log(item);
//   console.log(item.price);
//   console.log(item.product);
//   b = b + item.price
//  }
// })

// console.log(b);




// function map(a) {
//   let result = []; // Create a new Array
//   let i; // Declare variable
//   for (i = 0; i != a.length; i++)
//     result[i] = f(a[i]);
//   return result;
// }
// const f = function(x) {
//    return x * x * x;
// }
// let numbers = [0, 1, 2, 5, 10];
// let cube = map(numbers);
// console.log(cube);


//console.log(square(5)) // Uncaught TypeError: square is not a function
// const square = function(n) {
//   return n * n;
// }
// var x = square(4);
// console.log(square());

// class over{
//   constructor(){

//   }
//    add(){
//     console.log("hii");
//   }
  
//    add(){
//     console.log("hello11");
//   }
// }
//  var cl = new over();
// //  console.log(cl.add());



//  let self_invoking = function(){
//    return 4*4;
//  }();

// let a = [{
//   type:"pen",
//   quality: 20
// },
// {
//   type:"paper",
//   quality:30
// }]

// // let b;
// function reduceobject(){
//   let b = a.find((o)=>o.type==="pen");
//   let c = {...b,quality: b.quality-1};
//  // console.log(c);
//   a.splice(a.findIndex((o)=>o.type==="pen"),1);
//   a.push(c);
//   console.log(a);
// }

// function forfun(){
//    let b = a.find((o)=>o.type==="pen")
//   //console.log(b);
//   for(var i = b.quality;i>0;i--){
//     reduceobject();
//   }
// }

// forfun();


let obje ={
  a:1,
  b:2
}

console.log(obje);
obje.c = 3;
console.log(obje);
obje.a=4;
console.log(obje);


let hh = [{
  a:1
},{
  b:1
}]
let val = hh[0]
console.log(hh);
console.log(val);
let c = 3;
let d = obje.a
// hh[0].push(c)
console.log(hh);


// var nietos = [];
// var obj = {};
// obj["01"] = nieto.label;
// obj["02"] = nieto.value;
// nietos.push(obj);
// console.log(nietos);