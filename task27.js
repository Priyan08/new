// function * generatorfunction(){
//     yield 'this will be at the start of output';
//     yield 'this will be called at end of output'; 
//    // console.log("hii");
// }

// const generatorObject = generatorfunction();

// console.log(generatorObject.next().value);


// let Num = 7;

// function multiply(num){
//     this.num = num+1;
//     return this.num*this.num;
// }

// console.log(Num);
// console.log(multiply(Num));
// console.log(Num);


// function myObj(o){
//  o.model = "RC360"
// }

// let o = {
//     company:"KTM",
//     model:"duke360"
// };

// var x,y;
// x = o.model;
// console.log(x);

// myObj(o);
// y = o.model;
// console.log(y);


// function recurse(n) {
//         console.log(n);
//     if(n>0){
//         recurse(n-1);
//     }
// }
 
// recurse(10);

// const expresion = function (a) {
//     return `this is ${a}`;
// };
// let z = expresion("expression");
// console.log(z);


// let construct = new Function("a","b","return Math.pow(a,b)");
// console.log(construct(3,3)); 


// function ClassMates(name,age){
//     this.name=name;
//     this.age=age;
//     this.displayInfo=function(){
//       return this.name + "is " + this.age + " year's old!";
//     }
//   }
  
//   let classmate1 = new ClassMates("Mike Will", 15);
//   console.log(classmate1.displayInfo());

//   (function(){
//       console.log("this is self-invoking function")
//   })();


// //   let People = function(person, age) {
// //     this.person = person;
// //     this.age = age;
// //     this.info = function() {

     
// //      console.log(this);

// //      setTimeout(function() {
        
// //        console.log(this.person + " is " + this.age +
// //                                           " years old");
// //       }, 3000);
// //     }
// // }
// // let person1 = new People('John', 21);

// // person1.info();


// let People = function(person, age) {
//     this.person = person;
//     this.age = age;
//     this.info = function() {

     
//      console.log(this);

//      setTimeout(() => {
        
//        console.log(this.person + " is " + this.age +
//                                           " years old");
//       }, 2000);
//     }
// }
// let person1 = new People('John', 21);

// person1.info();



let a=4;
let b =10;
function shortHand(...args,a,b){
    return args.reduce((current,item) => {
        return current+item;
    });
}

// console.log(shortHand(1,2,3,4,5,6,7,8,9));



// console.log(generatorObject.next().value);