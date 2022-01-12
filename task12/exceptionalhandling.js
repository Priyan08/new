// try{
//     let a =[1,2,3,4,5,6];
//     console.log(a);
//     console.log(b);
// }
// catch(e){
//  console.log(e);
// }

// finally{
//  console.log("this is finally");
// }


//
// try{
//     let a =[1,2,3,4,5,6];
//     console.log(a);
//     console.log(b);
//     throw new Error("syntax error");
// }
// catch(e){
//  console.log(e.message);
// }


// 
// try {
//     console.log(a);
//     throw 'myException'; 
//   } catch (e) {
//     logMyErrors(e); 
//   }


//
// const a = 1;
// try {
//     // myroutine(); 
//     throw new EvalError('this is eval error')
//     // a=3;
//     //  let b =eval('function(){return 3+34}')

// } catch (e) {
//     if (e instanceof ReferenceError) {
//         console.log("REFERENCE ERROR");
//     } else if (e instanceof SyntaxError) {
//         console.log("tSYNTAX ERROR");
//     } else if (e instanceof EvalError) {
//         console.log("EVAL ERROR");
//     } else {
//         console.log("THIS ERROR IS NOT PART OF ABOVE ERRORS");
//     }
// }



//
function check(n) {
    if (!(n >= -500 && n <= 500)) {
        throw new RangeError("The argument must be between -500 and 500.")
    }
}

try {
    check(2000)
}
catch (e) {
    if (e instanceof RangeError) {
        console.log(e.name, e.message);
    }
}