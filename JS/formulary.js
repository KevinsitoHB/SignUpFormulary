'use strict';
//VARIABLES

const d = document;

const $signUpForm = d.getElementById('signUpForm');

d.addEventListener('DOMContentLoaded', () => {
  eventListeners();
});

const credentials = {
  name: null,
  isNameValid: null,
  email: null,
  isEmailValid: null,
  phone: null,
  isPhoneValid: null,
  password: null,
  isPasswordValid: null,
  password2: null,
  isPasswordValid2: null,
};
let allowSubmit = false;

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

function checkInput(inputType) {
  console.log(inputType);
  if (inputType === 'name') {
    const $warningDivName = d.getElementById('warningDivName');
    credentials.name = $signUpForm.name.value.trim();
    credentials.isNameValid = false;
    if (credentials.name == '') {
      $warningDivName.textContent = 'Please enter your full name';
    } else {
      $warningDivName.textContent = '';
      credentials.isNameValid = true;
    }
  }
  if (inputType === 'email') {
    const $warningDivEmail = d.getElementById('warningDivEmail');
    credentials.email = $signUpForm.email.value.trim();
    credentials.isEmailValid = false;
    if (credentials.email == '') {
      $warningDivEmail.textContent = 'Please enter your email';
    } else {
      $warningDivEmail.textContent = '';
      credentials.isEmailValid = true;
    }
  }

  if (inputType === 'phone') {
    const $warningDivPhone = d.getElementById('warningDivPhone');
    credentials.phone = $signUpForm.phone.value.trim();
    credentials.isPhoneValid = false;
    if (credentials.phone == '') {
      $warningDivPhone.textContent = 'Please enter your phone number';
    } else {
      $warningDivPhone.textContent = '';
      credentials.isPhoneValid = true;
    }
  }
  if (inputType === 'password') {
    const $warningDivPassword = d.getElementById('warningDivPassword');
    credentials.password = $signUpForm.password.value.trim();
    credentials.isPasswordValid = false;
    if (credentials.password == '') {
      $warningDivPassword.textContent = 'Please enter a password';
    } else {
      $warningDivPassword.textContent = '';
      credentials.isPasswordValid = true;
    }
  }
  if (inputType === 'password2') {
    const $warningDivPassword2 = d.getElementById('warningDivPassword2');
    credentials.password2 = $signUpForm.password2.value.trim();
    credentials.isPasswordValid2 = false;
    if (credentials.password2 == '') {
      $warningDivPassword2.textContent = 'Please re-enter your password';
    } else {
      $warningDivPassword2.textContent = '';
      credentials.isPasswordValid2 = false;
    }
  }
  isReadySubmit();
}

function isReadySubmit() {
  allowSubmit =
    credentials.isNameValid &&
    credentials.isEmailValid &&
    credentials.isPhoneValid &&
    credentials.isPasswordValid &&
    credentials.isPasswordValid2;
  if (allowSubmit) {
    $signUpForm.submitButton.removeAttribute('disabled');
  } else {
    $signUpForm.submitButton.setAttribute('disabled', true);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (allowSubmit) {
    console.log('Credentials to submit: ', {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
    });
    $signUpForm.reset();
    window.location.href = '/HTML/private.html';
  } else {
    console.log('Not Valid');
  }
}
