let people = ['Greg', 'Mary', 'Devon', 'James'];

for (let i = 0; i < people.length; i++) console.log(people[i]);

people.splice(people.indexOf(`Greg`), 1);
people.splice(people.indexOf(`James`), 1);

console.log(people);

people.unshift(`Matt`);
people.push(`Chen`);

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === `Mary`) break;
}

const peopleCopy = people.slice(2);
console.log(peopleCopy);

console.log(`index of Mary is ${people.indexOf(`Mary`)}`);
console.log(`index of Mary is ${people.indexOf(`Foo`)}`);

people = ['Greg', 'Mary', 'Devon', 'James'];

people.splice(2, 1, 'Elizabeth', 'Artie');
console.log(people);

const withBob = people.concat('bob');
console.log(withBob);