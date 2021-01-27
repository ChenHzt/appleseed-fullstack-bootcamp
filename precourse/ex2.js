const readlineSync = require('readline-sync');

function isMakesTen(){
    console.log('please enter 2 numbers');
    let num1 = readlineSync.questionFloat('first number: ');
    let num2 = readlineSync.questionFloat('second number: ');

    const sum = num1+num2;

    const res = sum === 10 ? 'makes 10' : 'Nope';
    console.log(res);
}

isMakesTen();
