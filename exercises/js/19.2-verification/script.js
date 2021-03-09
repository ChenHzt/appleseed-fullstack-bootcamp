const inputArr = Array.from(document.querySelectorAll('input'));
const submit = document.querySelector('button');

const isPopulated = () => inputArr.every((input) => Boolean(input.value));

const mySubmit = () =>
  isPopulated()
    ? inputArr.forEach((input) => (input.value = ''))
    : console.log('not populated');

inputArr.forEach((input, index) =>
  input.addEventListener('input', (event) => {
    if (input.value && input.nextElementSibling) {
      input.nextElementSibling.focus();
    }
    if (inputArr[inputArr.length - 1].value) {
      mySubmit();
    }
  })
);

inputArr[0].addEventListener('paste', (event) => {
  const paste = event.clipboardData.getData('text');
  inputArr.forEach((input, index) => {
    input.value = paste[index] || '';
  });
  inputArr[paste.length - 1].focus();
});
