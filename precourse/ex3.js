const readlineSync = require('readline-sync');

const dict = {
    0: 'ZERO',
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    5: 'FIVE',
    6: 'SIX',
    7: 'SEVEN',
    8: 'EIGHT',
    9: 'NINE'
}
let num;

num = readlineSync.question('Please enter a number between 0 - 9: ', {limit:  /^[0-9]$/, limitMessage:'the input $<lastInput> is not a number between 0 - 9'});
console.log(dict[num]);