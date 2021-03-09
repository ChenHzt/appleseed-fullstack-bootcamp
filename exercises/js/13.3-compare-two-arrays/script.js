const food = ['Noodle', 'Pasta', 'Ice-cream', 'Meat', 'Cucumber', 'Olives'];
const food1 = ['Fries', 'Ice-cream', 'Pizza', 'Olives', 'Hamburgers'];

const compareArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++)
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(arr1[i]);
        break;
      }
    }
};

compareArrays(food,food1);