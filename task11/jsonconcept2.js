// var obj = new Object();
// obj.name = "Raj";
// obj.age = 32;
// obj.married = false;
// var jsonString = JSON.stringify(obj);
// console.log(jsonString);
// let parseJson = JSON.parse(jsonString);

// console.log(parseJson);


// let ev = eval('(function() {return 4})');
// console.log(ev);






let jsonObj = `{
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
       {
          "name": "Molecule Man",
          "age": 29,
          "secretIdentity": "Dan Jukes",
          "powers": [
             "Radiation resistance",
             "Turning tiny",
             "Radiation blast"
          ]
       },
       {
          "name": "Madame Uppercut",
          "age": 39,
          "secretIdentity": "Jane Wilson",
          "powers": [
             "Million tonne punch",
             "Damage resistance",
             "Superhuman reflexes"
          ]
       },
       {
          "name": "Eternal Flame",
          "age": 1000000,
          "secretIdentity": "Unknown",
          "powers": [
             "Immortality",
             "Heat Immunity",
             "Inferno",
             "Teleportation",
             "Interdimensional travel"
          ]
       }
    ]
 }`;
 
 let jsonParse = JSON.parse(jsonObj);
 console.log(jsonParse);
 
 let j = 0;
 for(let i in jsonParse){
     console.log(`${jsonParse.squadName} was formed on ${jsonParse.formed}`);
    //  console.log(jsonParse.members.map((e)=>{
    //      let a = e.name;
    //      let b = e.powers
    //      return a+" powers are "+b
    //  }));
    
    console.log(jsonParse.members);
    j++;
}