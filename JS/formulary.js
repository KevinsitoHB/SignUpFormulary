'use strict';

const d = document;

const $signUpForm = d.getElementById('signUpForm');

d.addEventListener('DOMContentLoaded', () => {
  eventListenerS();
});

function eventListenerS() {
  $signUpForm.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();

  const credentials = {
    id: '000001',
    name: $signUpForm.name.value,
    email: $signUpForm.email.value,
    password: $signUpForm.password.value,
  };

  const returnedValues = validateCredentials(credentials);
  if (returnedValues) {
    console.log('Send data');
  } else {
    console.log("Don't send data");
  }
  // console.log(credentials);

  // const formData = new FormData($signUpForm);
  // console.log(formData);
}
function validateCredentials(userCredentials) {
  console.log(userCredentials);
}
