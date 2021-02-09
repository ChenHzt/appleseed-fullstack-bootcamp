const languageTop5 = (language) => {
  switch (language.toLowerCase()) {
    case `mandarin`:
      console.log(`MOST number of native speakers!`);
      break;
    case `spanish`:
      console.log(`2nd place in number of native speakers`);
      break;
    case `english`:
      console.log(`3rd place`);
      break;
    case `hindi`:
      console.log(`Number 4`);
      break;
    case `arabic`:
      console.log(`5th most spoken language`);
      break;

    default:
      console.log(`${language} is not in the top 5`);
  }
};

languageTop5('hebrew');
languageTop5('english');
languageTop5('hindi');
languageTop5('Hindi');

