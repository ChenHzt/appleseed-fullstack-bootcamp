const candyStore = {
  candies: [
    {
      name: 'mint gum',
      id: 'as12f',
      price: 2,
      amount: 2,
    },
    {
      name: 'twix',
      id: '5hd7y',
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

const getCandy = (candyStore, _id) =>
  candyStore.candies.find(({ id }) => id === _id);

const getPrice = (candyStore, _id) =>
  candyStore.candies.find(({ id }) => id === _id).price;

const addCandy = (candyStore, id, name, price) => {
  candyStore.candies.push({ name, id, price, amount: 1 });
};

const buy = (candyStore, id) => {
  const candy = getCandy(candyStore, id);
  if (candy.amount > 0) {
    candy.amount--;
    candyStore.cashRegister += getPrice(candyStore, id);
  } else console.log('Error');
};
