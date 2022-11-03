const pass = document.getElementById('pass');
const confPass = document.getElementById('conf-pass');
const createAccount = document.getElementById('create-account');
const passDiv = document.getElementById('pass-div');
const errorMsg = document.createElement('label');
const inputs = document.querySelectorAll('input');

createAccount.addEventListener('click', matchPass)
createAccount.addEventListener('click', isEmpty);

function matchPass() {
  if(pass.value != confPass.value) {

    pass.classList.add('error-match');
    confPass.classList.add('error-match');

    errorMsg.htmlFor = "pass"; //add "for" attribute
    errorMsg.setAttribute('id', 'error-msg');
    errorMsg.textContent = "*Passwords do not match";
    errorMsg.classList.add('error-msg');
    passDiv.appendChild(errorMsg);

  } else if (passDiv.querySelector('#error-msg') != null) {
    passDiv.removeChild(errorMsg);
    pass.classList.remove('error-match');
    confPass.classList.remove('error-match');
  }
}

function isEmpty() {
  inputs.forEach(input => {
    if (input.value.length === 0) {
      input.classList.add('error');
    } else if (input.classList.contains('error')) {
      input.classList.remove('error');
    }
  })
}


