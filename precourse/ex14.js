const readlineSync = require('readline-sync');



function minMax(n){
    let arr = new Array(n);
    let min = 50;
    let max = 0;
    for(let i = 0; i < n; i++){
        arr[i] = Math.floor(Math.random() * 50);
        max = arr[i]>max ? arr[i] : max;
        min = arr[i]<min ? arr[i] : min;
    }
    console.log(`The min value is ${min}`);
    console.log(`The max value is ${max}`);
    console.log(arr);
    
}

let num = readlineSync.question('please enter an integer: ');
minMax(num);