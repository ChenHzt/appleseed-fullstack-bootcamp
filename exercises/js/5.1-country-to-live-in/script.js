const isCountryToLiveIn = (language, isIsland, population, country) => {
  if (language === `English` && population < 50 && !isIsland)
    console.log(`You should live in ${country}`);
  else console.log(`${country} does not meet your criteria`);
};

isCountryToLiveIn('Hebrew', false, 9, 'Israel');
isCountryToLiveIn('English', false, 100, 'USA');
isCountryToLiveIn('English', true, 40, 'England');
isCountryToLiveIn('English', false, 49, 'ImagineLand');
