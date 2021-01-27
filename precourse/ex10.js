const readlineSync = require('readline-sync');


function replaceChars(str, originChar, newChar){
    let resStr = ''; 
    for (let i = 0; i < str.length; i++) {
        if(str[i] === originChar)
            resStr += newChar;
        else resStr += str[i];    
    }
    return resStr;
}

str = readlineSync.question('please enter a string: ');
newStr = replaceChars(str, ' ', '*');
console.log(`\norigin string: ${str}`);
console.log(`new string: ${newStr}\n`);