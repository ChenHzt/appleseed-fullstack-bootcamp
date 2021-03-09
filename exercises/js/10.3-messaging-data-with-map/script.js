const data = [
  {
    name: 'John',
    birthday: '1-1-1995',
    favoriteFoods: {
      meats: ['hamburgers', 'sausages'],
      fish: ['salmon', 'pike'],
    },
  },
  {
    name: 'Mark',
    birthday: '10-5-1980',
    favoriteFoods: {
      meats: ['hamburgers', 'steak', 'lamb'],
      fish: ['tuna', 'salmon', 'barracuda'],
    },
  },
  {
    name: 'Mary',
    birthday: '1-10-1977',
    favoriteFoods: {
      meats: ['ham', 'chicken'],
      fish: ['pike'],
    },
  },
  {
    name: 'Thomas',
    birthday: '1-10-1990',
    favoriteFoods: {
      meats: ['bird', 'rooster'],
      fish: ['salmon'],
    },
  },
  {
    name: 'Mary',
    birthday: '1-10-1977',
    favoriteFoods: {
      meats: ['hamburgers', 'lamb'],
      fish: ['anchovies', 'tuna'],
    },
  },
];
const getNames = (arr) => {
  arr.map((person) => person.name);
};

const getBornBefore1990 = (arr) =>
  arr.filter((person) => {
    const birthday = new Date(person.birthday);
    if (birthday.getFullYear() < 1990) return true;
    return false;
    // Date(person.birthday).getFullYear >1990 ? person :
  });

console.log(getBornBefore1990(data));

const countFavFood = (arr) => {
  const result = {};
  const favfoodArr = arr.map((person) =>
    person.favoriteFoods.meats.concat(person.favoriteFoods.fish)
  );
  const favfoodArrFlat = [].concat(...favfoodArr);

  favfoodArrFlat.forEach((element) => {
    result[element] = result[element] ? result[element] + 1 : 1;
  });

  return result;
};

console.log(countFavFood(data));
