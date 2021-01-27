const readlineSync = require('readline-sync');

let num;
num = readlineSync.question('please choose a number larger than 10: ');

while(isNaN(num) || num<=10){
    num = readlineSync.question('please choose a number LARGER than 10: ');
}

console.log('thank you')
