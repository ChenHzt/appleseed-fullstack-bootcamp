/* eslint-disable no-unused-expressions */
const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');

const check200chars = () => {
  textArea.value.length < 200
    ? (document.querySelector('.error-msg').style.display = 'block')
    : (document.querySelector('.error-msg').style.display = 'none');
};

btn.addEventListener('click', check200chars);
