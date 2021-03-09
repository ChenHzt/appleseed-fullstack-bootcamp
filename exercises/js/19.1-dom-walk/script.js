const start = document.querySelector('.start-here');
start.innerHTML = 'main title';
const newSub = '<ul><li>sub title 4</li></ul>';
const myFragment = document.createRange().createContextualFragment(newSub);
start.append(myFragment);

start.nextElementSibling
  .querySelector('ul')
  .removeChild(start.nextElementSibling.querySelector('ul li:last-child'));

document.querySelector('title').innerHTML = 'Master Of The Dom';
document.querySelector('p').innerHTML = 'Hiii';