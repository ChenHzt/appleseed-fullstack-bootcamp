const readlineSync = require('readline-sync');


function longestWord(str){
    let maxWord = '';
    let currentWord = '';
    
    for(let i = 0 ; i < str.length ; i++)
    {
        if (str[i] == ' ')
        {
            maxWord = maxWord.length < currentWord.length ? currentWord : maxWord;
            currentWord = '';
        } 
        else if ((str[i].charCodeAt() < 'a'.charCodeAt() || str[i].charCodeAt() > 'z'.charCodeAt()) &&
            (str[i].charCodeAt() < 'A'.charCodeAt() || str[i].charCodeAt() > 'Z'.charCodeAt()))
            currentWord = '';
        else currentWord += str[i];
    }
    return maxWord.length < currentWord.length ? currentWord : maxWord;
}

str = readlineSync.question('please enter a string: ');
console.log(`\nlongest word is: ${longestWord(str)}\n`);


