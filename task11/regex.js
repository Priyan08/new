let a = /hi/;
let str = "vhjwgvfhbshisdhfbhighbhi";
console.log(str.match(a));

//global g
let b = /abc/g 
let str2 = "abcasda bc";
console.log(str2.match(b));

//case insensitive i
let c =/ABC/i ;
let str3 = "hdjxbcaABC ABC";
console.log(str3.match(c));


//multiline  m
let d = /is/m;
let str4 = `Is that
all there it
is`
console.log(str4.match(d));


//brackets []
let e = /[b]/g
let e1 = /[am]/g
let e2 = /[^a]/g
let str5 = "basket ball is an american favourite sport ";
console.log(str5.match(e));
console.log(str5.match(e1));
console.log(str5.match(e2));


//range -
let f = /[A-Z]/g;
let f1 = /[a-z]/g;
let f2 = /[A-z]/g;
let f3 = /[0-9]/g;
let f4 = /[^0-9]/g;
let str6 = "345u7200r3249vdfhg2481290ADBAIIEW 435212 ADWESDdewEFWE"
console.log(str6.match(f));
console.log(str6.match(f1));
console.log(str6.match(f2));
console.log(str6.match(f3));
console.log(str6.match(f4));

// any one  |
let g = /[a|f]/g;
let str7 = "sedrdsda chdbc a ";
console.log(str7.match(g));

// dot (.)
let h = /f.n/g;
let str8 = "fun funny fawn"
console.log(str8.match(h));


// METACHARATERS
let str9 = "345u7200r3249vdfhg2481290ADBAIIEW 435212 ADWESDdewEFWE"
let i = /\w/g;
let i1 =/\W/g;
let i2 =/\d/g;
let i3 =/\D/g;
let i4 = /\s/g;

console.log(str9.match(i));
console.log(str9.match(i1));
console.log(str9.match(i2));
console.log(str9.match(i3));
console.log(str9.match(i4));

