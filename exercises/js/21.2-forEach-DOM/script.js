const users = [
  {
    id: 167464,
    firstName: 'Jimmy',
    lastName: 'Arnold',
    email: 'jimmya@gmail.com',
  },
  {
    id: 578447,
    firstName: 'Martha',
    lastName: 'Goldman',
    email: 'gold@hotmail.com',
  },
  {
    id: 864578,
    firstName: 'Tim',
    lastName: 'Burton',
    email: 'timmy.hotmail.com',
  },
];
let str = `<ol style="list-style-type:none;">`;

users.forEach(
  (user) =>
    (str += `<li data-id="${user.id}">${user.firstName} ${user.lastName}</li>`)
);
str += `</ol>`;
const myFragment = document.createRange().createContextualFragment(str);
document.body.appendChild(myFragment);
