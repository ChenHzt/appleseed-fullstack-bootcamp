const person1 = {
  name: 'Chen',
};

const person2 = {
  name: 'Rachel',
};

const person3 = {
  name: 'Yishai',
};

const maymap = new Map();
maymap.set(person1, 1);
maymap.set(person2, 2);
maymap.set(person3, 3);
console.log(maymap);

for (const [key, value] of maymap) {
  console.log(key.name, value);
}
