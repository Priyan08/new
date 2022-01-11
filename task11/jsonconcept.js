var obj = new Object();
   obj.name = "Raj";
   obj.age  = 32;
   obj.married = false;
   var jsonString= JSON.stringify(obj);
   console.log(jsonString);
let parseJson = JSON.parse(jsonString);

console.log(parseJson);


let ev = eval('function() return 4');
console.log(ev);