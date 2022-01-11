class Marvel {
    names = "iron man";
    constructor(name){
        this.names = names;
    }
    display(){
        console.log(`${this.names} is a amazing movie`);
    }
}
class MarvelFan extends Marvel{
    constructor(){
        super();
        // this.names = name;
    }
    display(){
        console.log(`${this.names} is tha lastest movie`);
    }
}
 
let a = new MarvelFan();
// a.map((movie) => movie.display())
console.log(a);
a.display()


class Dc {
    
    constructor(){
        
    }
    display(names){
        console.log(`${names} is a amazing movie`);
    }
    static display(namese){
        console.log(`${namese} is excellent`);
    }
}
class DcFan extends Dc{
    constructor(){
        super();
    }
    display(names){
        console.log(`${names} ia tha lastest movie`);
    }
}

let b = new Dc();
b.display("superman");
Dc.display("batman");
