function findSmallest(a, b, c) {
  if ((a >= b && b >= c) || (b >= a && a >= c)) return c;
  if ((a >= c && c >= b) || (c >= a && a >= b)) return b;
  if ((c >= b && b >= a) || (b >= c && c >= a)) return a;
}
console.log(findSmallest(52, 66, 2));

/*
there are several problams:
1. mistake in the name of the function called at line 10;
2. the returned value is not caught.
there are some missing cases..
*/
