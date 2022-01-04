// for...in loop

let details = {
    user : "priyan",
    age : 21,
    location : "chennai"
};

for(let property in details){
    console.log(details[property]);
   // delete details.age;
}

console.log(details);


let arr = ["hello","word","nice"];


for(const b in arr){
    console.log(`${b} : ${arr[b]}`);
  arr.shift();
    arr.unshift("welcome");
}

console.log(arr);


// for...of loops

let arr2 = [1,2,3,4,5,6,7];

for(let property of arr2){
    console.log(property);
}


for(let property of Object.keys(details)){
    var value = details[property];
    console.log(property,":",value); 
}

