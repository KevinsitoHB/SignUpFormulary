'use strict';

const d = document;

const $signUpForm = d.getElementById('signUpForm');

d.addEventListener('DOMContentLoaded', () => {
  eventListeners();
});

//VARIABLES
const credentials = {
  name: null,
  email: null,
  phone: null,
  password: null,
  password2: null,
};

// EVENTS
function eventListeners() {
  $signUpForm.addEventListener('submit', handleSubmit);

  $signUpForm.name.addEventListener('input', () => {
    checkInput('name');
  });
  $signUpForm.name.addEventListener('blur', () => {
    checkInput('name');
  });
  $signUpForm.email.addEventListener('input', () => {
    checkInput('email');
  });
  $signUpForm.email.addEventListener('blur', () => {
    checkInput('email');
  });

  $signUpForm.phone.addEventListener('input', () => {
    checkInput('phone');
  });
  $signUpForm.phone.addEventListener('blur', () => {
    checkInput('phone');
  });

  $signUpForm.password.addEventListener('input', () => {
    checkInput('password');
  });
  $signUpForm.password.addEventListener('blur', () => {
    checkInput('password');
  });

  $signUpForm.password2.addEventListener('input', () => {
    checkInput('password2');
  });
  $signUpForm.password2.addEventListener('blur', () => {
    checkInput('password2');
  });
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
}

function checkInput(inputType) {
  console.log(inputType);
  if (inputType === 'name') {
    const $warningDivName = d.getElementById('warningDivName');
    credentials.name = $signUpForm.name.value.trim();
    if (credentials.name == '') {
      $warningDivName.textContent = 'Please enter your full name';
    } else {
      $warningDivName.textContent = '';
    }
  }
  if (inputType === 'email') {
    const $warningDivEmail = d.getElementById('warningDivEmail');
    credentials.email = $signUpForm.email.value.trim();
    if (credentials.email == '') {
      $warningDivEmail.textContent = 'Please enter your email';
    } else {
      $warningDivEmail.textContent = '';
    }
  }

  if (inputType === 'phone') {
    const $warningDivPhone = d.getElementById('warningDivPhone');
    credentials.phone = $signUpForm.phone.value.trim();
    if (credentials.phone == '') {
      $warningDivPhone.textContent = 'Please enter your phone number';
    } else {
      $warningDivPhone.textContent = '';
    }
  }
  if (inputType === 'password') {
    const $warningDivPassword = d.getElementById('warningDivPassword');
    credentials.password = $signUpForm.password.value.trim();
    if (credentials.password == '') {
      $warningDivPassword.textContent = 'Please enter a password';
    } else {
      $warningDivPassword.textContent = '';
    }
  }
  if (inputType === 'password2') {
    const $warningDivPassword2 = d.getElementById('warningDivPassword2');
    credentials.password2 = $signUpForm.password2.value.trim();
    if (credentials.password2 == '') {
      $warningDivPassword2.textContent = 'Please re-enter your password';
    } else {
      $warningDivPassword2.textContent = '';
    }
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
