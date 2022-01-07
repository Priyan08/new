class Store{
    product;
    constructor(){
    this.product = {
            names:"dell",
            quantity:40
        }
        
    }
    detail =() => {
        console.log(`the quantity of ${this.product.names} is ${this.product.quantity}`);
    } 
    static storage(){
        console.log("this is static method")
    }
   
}


class User extends Store{
    constructor(){
        super();
        
    }
}

let user1 = new User();
// user1.detail();
// console.log(user1.product);
Store.storage();
User.storage();