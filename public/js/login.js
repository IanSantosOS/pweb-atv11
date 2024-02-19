const form = document.querySelector('form');
const templateContainer = document.querySelector('.template-container');
const alertContainer = document.querySelector('.alert-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const login = {
    username_email: username_email.value.trim(),
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
        if (alertContainer.children.length < 3) {
          const newAlert = templateContainer.querySelector('.alert').cloneNode(true);
          newAlert.querySelector('.alert-message').innerText = res.message;
          alertContainer.appendChild(newAlert)
        }
        pass.value = "";
        username_email.focus();
      }
      else {
        window.location.replace('/homepage');
      }
    });
});
