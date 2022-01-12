let z = {
    "employees":{
        "employee":[
           {
              "empId":"0001",
              "name":"Tom",
              "age":15,
              "mobile":96969696969,
              "email":"tom@gmail.com",
              "addresses":[
                 {
                    "doorNo":1,
                    "street":"cat street",
                    "city":"mark henry street",
                    "landMark":"kabilan street opp",
                    "state":"texas",
                    "country":"us",
                    "pinCode":600050
                 }
              ],
              "department":{
                 "semesters":{
                    "semester1":{
                       "cPrograming":70,
                       "operatingSystem":55,
                       "englishPaper1":43,
                       "tamilPaper1":90
                    },
                    "semester2":{
                       "cppPrograming":94,
                       "DBMS":55,
                       "englishPaper2":78,
                       "tamilPaper2":89
                    },
                    "semester3":{
                       "javaPrograming":100,
                       "dataStructures":65,
                       "englishPaper3":49,
                       "tamilPaper3":62
                    },
                    "semester4":{
                       "MYSQL":67,
                       "DBMS":98,
                       "englishPaper4":32,
                       "tamilPaper4":90
                    },
                    "semester5":{
                       "javaScript":35,
                       "php":71,
                       "englishPaper5":15,
                       "tamilPaper5":69
                    },
                    "semester6":{
                       "Node":79,
                       "cryptography":89,
                       "englishPaper6":84,
                       "tamilPaper6":60
                    }
                 }
              }
           },
           
           {
             "empId":"0002",
             "name":"Jerry",
             "age":14,
             "mobile":96969696977,
             "email":"jerry@gmail.com",
             "addresses":[
                {
                   "doorNo":2,
                   "street":"rat street",
                   "city":"brock city",
                   "landMark":"suresh street opp",
                   "state":"california",
                   "country":"us",
                   "pinCode":600051
                }
             ],
             "department":{
                "semesters":{
                   "semester1":{
                      "cPrograming":66,
                      "operatingSystem":56,
                      "englishPaper1":34,
                      "tamilPaper1":87
                   },
                   "semester2":{
                      "cppPrograming":98,
                      "DBMS":65,
                      "englishPaper2":34,
                      "tamilPaper2":86
                   },
                   "semester3":{
                      "javaPrograming":87,
                      "dataStructures":54,
                      "englishPaper3":100,
                      "tamilPaper3":87
                   },
                   "semester4":{
                      "MYSQL":87,
                      "DBMS":34,
                      "englishPaper4":65,
                      "tamilPaper4":98
                   },
                   "semester5":{
                      "javaScript":65,
                      "php":98,
                      "englishPaper5":34,
                      "tamilPaper5":76
                   },
                   "semester6":{
                      "Node":98,
                      "cryptography":84,
                      "englishPaper6":83,
                      "tamilPaper6":97
                   }
                }
             }
          },
          {
             "empId":"0003",
             "name":"Mickey",
             "age":18,
             "mobile":9765645455,
             "email":"mickey@gmail.com",
             "addresses":[
                {
                   "doorNo":2,
                   "street":"kannadhasan street",
                   "city":"trump city",
                   "landMark":"jeeva street opp",
                   "state":"wisconsin",
                   "country":"us",
                   "pinCode":600052
                }
             ],
             "department":{
                "semesters":{
                   "semester1":{
                      "cPrograming":34,
                      "operatingSystem":76,
                      "englishPaper1":97,
                      "tamilPaper1":34
                   },
                   "semester2":{
                      "cppPrograming":67,
                      "DBMS":87,
                      "englishPaper2":34,
                      "tamilPaper2":56
                   },
                   "semester3":{
                      "javaPrograming":26,
                      "dataStructures":65,
                      "englishPaper3":76,
                      "tamilPaper3":76
                   },
                   "semester4":{
                      "MYSQL":56,
                      "DBMS":86,
                      "englishPaper4":32,
                      "tamilPaper4":90
                   },
                   "semester5":{
                      "javaScript":35,
                      "php":71,
                      "englishPaper5":15,
                      "tamilPaper5":69
                   },
                   "semester6":{
                      "Node":79,
                      "cryptography":87,
                      "englishPaper6":45,
                      "tamilPaper6":87
                   }
                }
             }
          },
        ]
     }
  }

let a = JSON.stringify(z);
let b = JSON.parse(a)
console.log(b.employees);

let emp1 = b.employees.employee[0]
console.log("this is employee 1",emp1);

let emp1details = b.employees.employee.filter((e) => {
   return e.empId==0001
})

console.log("employee details",emp1details);


let obj = {
    n : 1,
    m :2
}
console.log(Object.values(obj).reduce((a,b) => a+b));

let semMark1 =  b.employees.employee[0].department.semesters;
console.log(semMark1);

let markOfsem1 = Object.values(semMark1.semester1).reduce((a,b) => a+b);
let markOfsem2 = Object.values(semMark1.semester2).reduce((a,b) => a+b);
let markOfsem3 = Object.values(semMark1.semester3).reduce((a,b) => a+b);
let markOfsem4 = Object.values(semMark1.semester4).reduce((a,b) => a+b);
let markOfsem5 = Object.values(semMark1.semester5).reduce((a,b) => a+b);
let markOfsem6 = Object.values(semMark1.semester6).reduce((a,b) => a+b);

function highestMark(...marks){
    console.log(marks);
    let len = marks.length;
    marks.sort((a,b)=> a-b);
    console.log(marks);
    let a =marks[len-1]
    return a;
}
function highestMarkOfAllSem (mark,markOfsem1,markOfsem2,markOfsem3,markOfsem4,markOfsem5,markOfsem6){
    if(mark == markOfsem1){
        return "he scored highest mark in sem1";
    }
    else if(mark == markOfsem2){
        return "he scored highest mark in sem2";
    }
    else if(mark == markOfsem3){
        return "he scored highest mark in sem3";
    }
    else if(mark == markOfsem4){
        return "he scored highest mark in sem4";
    }
    else if(mark == markOfsem5){
        return "he scored highest mark in sem5";
    }
    else if(mark == markOfsem6){
        return "he scored highest mark in sem6";
    }
    else{
        return "nothing";
    }
}

let highmark = highestMark(markOfsem1,markOfsem2,markOfsem3,markOfsem4,markOfsem5,markOfsem6)
console.log(highmark);

console.log(highestMarkOfAllSem(highmark,markOfsem1,markOfsem2,markOfsem3,markOfsem4,markOfsem5,markOfsem6))

// for(let i of semMark1.semester1){
//     console.log(i);
// }
// let arr = [1,2,3,4,56,7]
// let arr1 = arr.sort((a,b)=> a-b)
// console.log(arr);