const form = document.querySelector('form');
const errors = document.querySelectorAll('.error');
const errorUsername = document.querySelector('#error-username');
const errorEmail = document.querySelector('#error-email');
const errorPass = document.querySelector('#error-pass');
const errorPassConfirm = document.querySelector('#error-pass-confirm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const signup = {
    username: username.value,
    email: email.value,
    pass: pass.value,
    pass_confirm: pass_confirm.value
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(signup),
    headers: { 'Content-Type': 'application/json' }
  }

  fetch('/auth/signup', options)
    .then(res => res.json())
    .catch(err => err.message = "")
    .then(res => {
      clearErrorsAlert();

      if (res?.message) {
        errorMessages(res.message);
      }
      else {
        window.location.assign('/login');
      }
    });
});

function clearErrorsAlert() {
  errorUsername.innerText = '';
  errorEmail.innerText = '';
  errorPass.innerText = '';
  errorPassConfirm.innerText = '';
  
  errors.forEach(error => {
    error.style.opacity = 0;
  });
}

function errorMessages(msg) {

  if (msg?.username) {
    errorUsername.innerText = msg.username;
  }
  if (msg?.email) {
    errorEmail.innerText = msg.email;
  }
  if (msg?.pass) {
    errorPass.innerText = msg.pass;
  }
  if (msg?.pass_confirm) {
    errorPassConfirm.innerText = msg.pass_confirm;
  }

  errors.forEach(error => {
    if (error.querySelector("span").innerText !== '') {
      error.style.opacity = 1;
    }
  });
}
