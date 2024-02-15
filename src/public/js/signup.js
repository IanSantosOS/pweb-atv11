const form = document.querySelector('form');
const templateContainer = document.querySelector('.template-container');
const alertContainer = document.querySelector('.alert-container');

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
      if (res?.message) {
        alertContainer.innerHTML = '';
        errorMessages(res.message);
      }
      else {
        window.location.assign('/login');
      }
    });
});

function errorMessages(msgObj) {
  for (let errorMsg in msgObj) {
    const newAlert = templateContainer.querySelector('.alert').cloneNode(true);
    newAlert.querySelector('.alert-message').innerText = msgObj[errorMsg];
    alertContainer.appendChild(newAlert);
  }
}
