const smileyNumber = document.querySelector('input');

const smile = () => {
  const smileyAmount = smileyNumber.value;
  const elem = document.querySelector('.smileys');
  elem ? elem.parentNode.removeChild(elem) : null;
  const resStr = `<div class='smileys'>\n${'<img src="smiley.png" alt="smiley">\n'.repeat(
    smileyAmount
  )}<\div>`;
  const myFragment = document.createRange().createContextualFragment(resStr);
  document.body.appendChild(myFragment);
};
