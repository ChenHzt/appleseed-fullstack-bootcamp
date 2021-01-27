const readlineSync = require('readline-sync');


function isPalindrom(str){
    let start = 0, end = str.length-1;
    while( start <= end ) {
        if(str[start] != str[end])
            return false;
        start++;
        end--;
    }
    return true;
}

str = readlineSync.question('please enter a string: ');
isPalindrom(str) ? console.log(`${str} is a palindrom`) : console.log(`${str} is not a palindrom`);

