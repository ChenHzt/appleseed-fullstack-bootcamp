function circleArea(radius) {
  return radius ** 2 * Math.PI;
}

const r = 2;
console.log(`circle radius is: ${r}`);
const area = circleArea(r);
console.log(`circle area is: ${area}`);
console.log(`circle area rounded to two decimal places: ${area.toFixed(2)}`);
