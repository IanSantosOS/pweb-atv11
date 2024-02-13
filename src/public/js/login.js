const form = document.querySelector('form');
const error = document.querySelector('.error');
const errorMessage = document.querySelector('#error-message');
const username_email = document.querySelector('#username_email');
const pass = document.querySelector('#pass');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const login = {
    username_email: username_email.value,
    pass: pass.value
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(login),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch('/auth/login', options)
    .then(res => res.json())
    .catch(err => err.message = "")
    .then(res => {
      if (res?.message) {
        error.style.opacity = 1;
        errorMessage.innerText = res.message;
        pass.value = "";
        username_email.focus();
      }
      else {
        window.location.replace('/homepage');
      }
    });
});
