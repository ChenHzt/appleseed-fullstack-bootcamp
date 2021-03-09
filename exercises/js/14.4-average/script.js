function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([85, 90, 92]));

/*
sum is not initialized to zero.
before returning the result the sum needed tobe devided by the arr length
returned value didnt get caught;
*/
