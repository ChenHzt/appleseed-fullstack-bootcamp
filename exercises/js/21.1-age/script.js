const submit = document.querySelector("input[type='submit']");
const age = document.querySelector("input[type='number'");
const display = document.querySelector('.display-msg');
submit.addEventListener(
  'click',
  (event) =>
    (display.innerHTML =
      age.value > 18 ? 'you can drink appear' : 'you’re too young')
);
