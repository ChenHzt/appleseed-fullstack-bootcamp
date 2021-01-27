const readlineSync = require('readline-sync');

function factorial(n){
    let res = 1;
    for(let i=1; i<=n;i++)
        res *= i;
    return res; 
}


do{
num = readlineSync.questionInt('Please enter a positive number: ');
}while(num<0);

console.log(factorial(num));