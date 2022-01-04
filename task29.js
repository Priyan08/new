// // function

// let R_Pen

// //function ReducePen(P){
// //     let ref = P;
// //     R_Pen = {
// //         type : "pen",
// //         aval : function(ref) {
// //             let a;
// //             if(ref.Pname == "pen" && ref.aval > 0){
// //                 let c = ref.aval - 1;
// //                 a = ref.aval - c;
// //             }
// //             return a;
// //         }
// //     };
// //     R_Pen.aval(ref)
// //    return console.log(R_Pen);
// //}

// // function ReducePen(p) {
// //     let q = p.filter(p=>p.Pname == "pen");
// //     return console.log(q);
// // }

// function Pens(P){
//     let q = (p) =>{
        
//     }
// }

// let Product = [
//     {
//         Pname:"pen",
//         aval: 50,
// },
// {
//     Pname: "pencil",
//     aval: 45
// }
// ];

// let pen={
//     pen:50
// }
// ReducePen(Product);
// console.log(Product);


let a = [{
    type:"pen",
    quality: 20
  },
  {
    type:"paper",
    quality:30
  }]
  
  
  function reduceobject(){
    let b = a.find((o)=>o.type==="pen");
    let c = {...b,quality: b.quality-1};
    a.splice(a.findIndex((o)=>o.type==="pen"),1);
    a.push(c);
    console.log(a);
  }
  
  function forfun(){
     let b = a.find((o)=>o.type==="pen")
    for(var i = b.quality;i>0;i--){
      reduceobject();
    }
  }
  
  forfun();