/* eslint-disable no-unused-expressions */
const dataArr = new Map();
const cardsMap = new Map();
const input = document.querySelector(`input[type='text']`);
input.focus();
const createCard = (userData) => {
  const displayDiv = document.querySelector('.displayResult');

  const link = document.createElement('a');
  link.setAttribute('href', userData.url);
  link.classList.add('cardLink');
  displayDiv.appendChild(link);

  const card = document.createElement('div');
  card.classList.add('card');
  link.appendChild(card);

  const cardImg = document.createElement('img');
  cardImg.setAttribute('src', userData.avatar);
  cardImg.classList.add('card__img');
  card.appendChild(cardImg);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card__content');
  card.appendChild(cardContent);

  const usernameDisplay = document.createElement('p');
  usernameDisplay.innerHTML = userData.username;
  usernameDisplay.classList.add('usernameDisplay');
  cardContent.appendChild(usernameDisplay);
  const publicReposDisplay = document.createElement('p');
  publicReposDisplay.innerHTML = `public repositories: ${userData.reposCount}`;
  cardContent.appendChild(publicReposDisplay);
  cardsMap.set(userData.username.toLowerCase(), card);
};

const getData = async (username) => {
  const req = await fetch(`https://api.github.com/users/${username}`);
  const usernameData = await req.json();
  const data = {
    // id: usernameData.id,
    username: usernameData.login,
    avatar: usernameData.avatar_url,
    url: usernameData.html_url,
    reposCount: usernameData.public_repos,
  };

  console.log(data);
  // dataArr.set(data.username, data);
  createCard(data);
};

const search = () => {
  const val = input.value;
  if (val) {
    if (cardsMap.has(val.toLowerCase())) {
      cardsMap.get(val).style.order = 100;
    } else getData(input.value);
    input.classList.remove('input--error');
  } else input.classList.add('input--error');
  input.value = '';
  input.focus();
};
