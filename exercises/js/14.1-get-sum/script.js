const getSum = (arr1, arr2) => {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  console.log(sum);
};
getSum([1, 2, 3], [5, 66, 23]);

/*
there are several problams:
1. there is no , in line 10 toseperate between the arguments.
2. the sum is not returned or printed.
3. there are redandent () in the second argument;
3. if the goal was not to compute the total sum of bothe of the arrays then it is needed to ititialize the sum to zero   
*/
