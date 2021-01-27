const readlineSync = require('readline-sync');

function isPrime(n){
    if (n == 1)
        return false;
    for(let i = 2 ; i <= n ** 0.5 ; i++)
        if (n % i == 0)
            return false;
    return true;
}

function allPrimes(n){
    for(let i=1; i<=n;i++)
        if(isPrime(i))
            console.log(i); 
}


do{
num = readlineSync.questionInt('Please enter a positive number: ');
}while(num<0);

allPrimes(num);