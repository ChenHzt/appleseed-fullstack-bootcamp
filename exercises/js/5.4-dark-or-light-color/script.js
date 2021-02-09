const darkOrLight = (color) => {
  switch (color.toLowerCase()) {
    case `yellow`:
    case `pink`:
    case `orange`:
      return `light color`;
    case `blue`:
    case `purple`:
    case `brown`:
      return `dark color`;
    default:
      return `unknown color`;
  }
};

console.log(`The color blue is ${darkOrLight('blue')}`);
console.log(`The color pink is ${darkOrLight('pink')}`);
console.log(`The color yellow is ${darkOrLight('yellow')}`);
console.log(`The color purple is ${darkOrLight('purple')}`);
console.log(`The color red is ${darkOrLight('red')}`);
