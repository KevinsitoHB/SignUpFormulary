'use strict';

const d = document;

const $signUpForm = d.getElementById('signUpForm');

d.addEventListener('DOMContentLoaded', () => {
  eventListeners();
});

//VARIABLES
const credentials = {
  name: $signUpForm.name.value.trim(),
  email: $signUpForm.email.value.trim(),
  phone: $signUpForm.phone.value.trim(),
  password: $signUpForm.password2.value.trim(),
  password2: $signUpForm.password.value.trim(),
};

// EVENTS
function eventListeners() {
  $signUpForm.addEventListener('submit', handleSubmit);
  $signUpForm.name.addEventListener('blur', checkNameBlur);
}

//FUNCTIONS

function handleSubmit(event) {
  event.preventDefault();

  const validCredentials = areValidCredentials(credentials);
  if (validCredentials) {
    console.log('Send data');
  } else {
    console.log("Don't send data");
  }
  // console.log(credentials);

  // const formData = new FormData($signUpForm);
  // console.log(formData);
}
function checkNameBlur() {
  credentials.name = $signUpForm.name.value.trim();
  console.log(credentials.name);
  const $warningDivName = d.getElementById('warningDivName');
  if (credentials.name == '') {
    $warningDivName.textContent = 'Please enter your name';
  } else {
    $warningDivName.textContent = '';
  }
}

function areValidCredentials(userCredentials) {
  console.log(userCredentials);
  const name = userCredentials.name.trim();
  const email = userCredentials.email.trim();
  const phone = userCredentials.phone.trim();
  const password = userCredentials.password.trim();
  const password2 = userCredentials.password2.trim();
  if (
    name === '' ||
    email === '' ||
    phone === '' ||
    password === '' ||
    password2 === ''
  ) {
    return false;

    return true;
  }
}
