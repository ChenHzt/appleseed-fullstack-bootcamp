const readlineSync = require('readline-sync');

let name = readlineSync.question("Hi, please type your name: ");

console.log('Hello ' + name +'!');