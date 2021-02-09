const passwordValidation_ifElse = (password) => {
  if (password.length > 7) return `strong`;
  return `weak`;
};

const passwordValidation_ternary = (password) =>
  password.length > 7 ? `strong` : `weak`;

const advancedPasswordValidation = (password) =>
  password.length > 7 && password.toLowerCase() !== password
    ? `very strong`
    : password.length > 7
    ? `strong`
    : `weak`;

console.log(passwordValidation_ifElse('hipass'));
console.log(passwordValidation_ifElse('hipasslong'));

console.log(passwordValidation_ternary('hipass'));
console.log(passwordValidation_ternary('hipasslong'));

console.log(advancedPasswordValidation('hipass'));
console.log(advancedPasswordValidation('hipasslong'));
console.log(advancedPasswordValidation('Hipasslong'));
