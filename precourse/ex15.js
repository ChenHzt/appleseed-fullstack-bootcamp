
function joinArrays(arr1,arr2){
    let result = [];
    for (let i = 0; i<arr1.length;i++)
        result.push(arr1[i]);
    for (let i = 0; i<arr2.length;i++)
        result.push(arr2[i]);
    return result;
}

let arr1 = ['Hello'];
let arr2 = ['AppleSeeds', 'Bootcamp'];

console.log(joinArrays(arr1,arr2));