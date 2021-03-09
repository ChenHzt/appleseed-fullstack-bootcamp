function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*
returned value is not caught. 
the indexes dont start at zero so there is an access to a location in the array that dosnt exist
*/
