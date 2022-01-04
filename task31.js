let i;

for(i=1;i<5;i++){
    console.log(i);
}

let j=0;

do{
    console.log("this is do...while loop"),j;
    j++
}while(j<5);

let k = 0;
while(k<9){
    console.log("this is while loop",k);
    k++;
}

loop1:
for(let i = 1 ;i<=3;i++){
    console.log("outer loop running!!");
    for(let j = 1; j<5; j++)
    {
    if(i==2){
        console.log("inside loop running!!");
        continue loop1;
    } 
    console.log("j loop running");
   }
    console.log("hii",i);
}