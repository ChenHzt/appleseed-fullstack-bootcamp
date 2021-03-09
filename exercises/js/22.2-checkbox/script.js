document
  .querySelector("input[type='checkbox']")
  .addEventListener('click', (e) => {
    // e.preventDefault();
    document.querySelector('img').classList.toggle('hide');
    document.querySelector('img').classList.toggle('show');
  });
