function confirmForm() {
  const name = document.getElementById('username').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const message = `name: ${name}, age: ${age}, email: ${email}`;
  const isConfirmed = confirm(message);
  if (isConfirmed) {
    window.alert('congratulations you successfully sent this form');
  }
}
