const readlineSync = require('readline-sync');

function reverse(arr) {
    let start = 0, end = arr.length-1;
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
    return arr;
}
let size;


size  = readlineSync.question('please enter the size of the array: ',{limit: /^\d*[0-9]\d*$/, limitMessage:'size must be equalor larger then zero'});

console.log(`please enter ${size} integers, to finish enter`);
let input;
let arr = [];
for(let i = 0 ; i <size;i++)
{
    input = readlineSync.questionInt();
    arr.push(input);
}
console.log(`the original array ${arr}`)
console.log(`the reversed array ${reverse(arr)}`);
