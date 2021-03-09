const text = document.querySelector('p');
text.style.fontSize = '6px';
const plus = document.querySelector('.btn-plus');
const minus = document.querySelector('.btn-minus');

const changeSize = (element) => {
  let fontSize = 6;
  const increment = () =>
    fontSize < 100 ? (element.style.fontSize = `${++fontSize}px`) : null;
  const decrease = () =>
    fontSize > 6 ? (element.style.fontSize = `${--fontSize}px`) : null;
  return { increment, decrease };
};

const obj = changeSize(text);

plus.addEventListener('click', obj.increment);
minus.addEventListener('click', obj.decrease);
