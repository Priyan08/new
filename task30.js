// conditional statement


let isTrue = true;;
let isFalse = false;

if(isTrue == isFalse){
    console.log("if block");
}
else{
    console.log("else block");
}

if(isTrue == !isFalse){
    console.log("using not operator");
}
else{
    console.log("it will not be printed");
}

let num = new Date;
console.log(num.getDay());

let mailId = "example@mail.com";
let number = 333934929;
let password = "password";
let user = "priyan";

function checkUser(a,b,c,d){
    if(a==="example@mail.com" && b=== "password"){
        if(c == 1231241427 || d == "priyan"){
            return `welocome ${a}`;
        }
        else{
            return `Invalid ${d}`;
        }
    }else{
        return `${a} or password is Invalid`;
    }
  }

  console.log(checkUser(mailId,password,number,user));

let age = 28;

function checkAge(age){
    if(age<=18){
        console.log("Minor");
    }
    else if(age>=18 || age <= 30){
        console.log("Adult");
    }
    else if(age>=30 || age <= 50){
        console.log("Middle aged");
    }
    else if(age > 50){
        console.log("Elderly people");
    }
    else{
        console.log(undefined);
    }

    switch (age) {
        case 18:
            console.log("Minor");
            break;
        case (age>=18 || age < 30):
            console.log("Adult");
            break;
        case (age>=30 || age < 50):
            console.log("Middle aged");
            break;
        case (age>=50 || age < 70):
            console.log("Elderly people");
            break;   
        default:
            console.log('wrong value');
            break;
    }
}

checkAge(age)