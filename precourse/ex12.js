const readlineSync = require('readline-sync');


function capitalizeVowel(str){
    let vowelsSet = new Set();
    vowelsSet.add('a').add('e').add('i').add('o').add('u').add('y');
    let newStr = ''
    for(let i = 0 ; i < str.length ; i++)
        if(vowelsSet.has(str[i]))
            newStr += str[i].toUpperCase();
        else newStr += str[i];
    return newStr

}

str = readlineSync.question('please enter a string: ');
console.log(`\norigin string: ${str}`);
console.log(`new string: ${capitalizeVowel(str)}\n`);

