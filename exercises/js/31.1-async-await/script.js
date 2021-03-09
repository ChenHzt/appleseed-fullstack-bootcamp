const getIDs = async () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

const getRecipe = async (recipeID) =>
  new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: 'Fresh tomato pasta',
          publisher: 'Pinchas Hodadad',
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });

// getIDs()
//   .then((IDs) => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//   })
//   .catch((error) => {
//     console.log('It is an error!');
//   });

const func = async () => {
  try {
    const ids = await getIDs();
    console.log(ids);
    const recipe2 = await getRecipe(ids[2]);
    console.log(recipe2);
  } catch {
    console.log(`It is an error!`);
  }
};

func();
