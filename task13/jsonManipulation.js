let jsonObj = {
    "employee": [
        {
            "empId": "0001",
            "name": "Tom",
            "age": 15,
            "mobile": 96969696969,
            "email": "tom@gmail.com",
            "address": [
                {
                    "doorNo": 1,
                    "street": "cat street",
                    "city": "mark henry street",
                    "landMark": "kabilan street opp",
                    "state": "texas",
                    "country": "us",
                    "pinCode": 600050
                }
            ],
            "departments": {
                "computerscience": {
                    "semester1": {
                        "cPrograming": 70,
                        "operatingSystem": 55,
                        "englishPaper1": 43,
                        "tamilPaper1": 90
                    },
                    "semester2": {
                        "cppPrograming": 94,
                        "DBMS": 55,
                        "englishPaper2": 78,
                        "tamilPaper2": 89
                    },
                    "semester3": {
                        "javaPrograming": 100,
                        "dataStructures": 65,
                        "englishPaper3": 49,
                        "tamilPaper3": 62
                    },
                    "semester4": {
                        "MYSQL": 67,
                        "DBMS": 98,
                        "englishPaper4": 32,
                        "tamilPaper4": 90
                    },
                    "semester5": {
                        "javaScript": 35,
                        "php": 71,
                        "englishPaper5": 15,
                        "tamilPaper5": 69
                    },
                    "semester6": {
                        "Node": 79,
                        "cryptography": 89,
                        "englishPaper6": 84,
                        "tamilPaper6": 60
                    }
                }
            }
        },
        {
            "empId": "0002",
            "name": "Jerry",
            "age": 18,
            "mobile": 96969696969,
            "email": "jerry@gmail.com",
            "address": [
                {
                    "doorNo": 1,
                    "street": "cat street",
                    "city": "mark henry street",
                    "landMark": "kabilan street opp",
                    "state": "texas",
                    "country": "us",
                    "pinCode": 600050
                }
            ],
            "departments": {
                "computerscience": {
                    "semester1": {
                        "cPrograming": 70,
                        "operatingSystem": 55,
                        "englishPaper1": 43,
                        "tamilPaper1": 90
                    },
                    "semester2": {
                        "cppPrograming": 94,
                        "DBMS": 55,
                        "englishPaper2": 78,
                        "tamilPaper2": 89
                    },
                    "semester3": {
                        "javaPrograming": 100,
                        "dataStructures": 65,
                        "englishPaper3": 49,
                        "tamilPaper3": 62
                    },
                    "semester4": {
                        "MYSQL": 67,
                        "DBMS": 98,
                        "englishPaper4": 32,
                        "tamilPaper4": 90
                    },
                    "semester5": {
                        "javaScript": 35,
                        "php": 71,
                        "englishPaper5": 15,
                        "tamilPaper5": 69
                    },
                    "semester6": {
                        "Node": 79,
                        "cryptography": 89,
                        "englishPaper6": 84,
                        "tamilPaper6": 60
                    }
                }
            }
        }

    ]
};

// let Json = JSON.stringify(jsonObj)

let emp1 = jsonObj.employee.find((o) => o.empId == 0001);
console.log(emp1);

function toAddAddress(address) {
    let addAddress = {
        "doorNo": 12,
        "street": "fish street",
        "city": "mark henry street",
        "landMark": "kabilan street opp",
        "state": "texas",
        "country": "us",
        "pinCode": 600022
    }
    return address.push(addAddress);
}
toAddAddress(emp1.address);
console.log(emp1);

function toAddDepartment(departments) {
    departments.maths = {
        "semester1": {
            "algebra": 70,
            "statistics": 55,
            "englishPaper1": 43,
            "tamilPaper1": 90
        },
        "semester2": {
            "pure mathematics": 94,
            "topology": 55,
            "englishPaper2": 78,
            "tamilPaper2": 89
        },
        "semester3": {
            "probabilitty": 100,
            "dataStructures": 65,
            "englishPaper3": 49,
            "tamilPaper3": 62
        },
        "semester4": {
            "applied mathematics": 67,
            "computational mathematics": 98,
            "englishPaper4": 32,
            "tamilPaper4": 90
        },
        "semester5": {
            "analysis": 35,
            "number theory": 71,
            "englishPaper5": 15,
            "tamilPaper5": 69
        },
        "semester6": {
            "advanced calculus": 79,
            "cryptography": 89,
            "englishPaper6": 84,
            "tamilPaper6": 60
        }
    }
    return departments.maths;
}

toAddDepartment(emp1.departments);
console.log(emp1);

