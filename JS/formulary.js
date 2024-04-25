'use strict';

//VARIABLES
const d = document;
const $signUpForm = d.getElementById('signUpForm');
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
d.addEventListener('DOMContentLoaded', () => {
  eventListeners();
});

// FUNCTIONS
function eventListeners() {
  isReadySubmit();

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

  $signUpForm.addEventListener('submit', handleSubmit);
}

//FUNCTIONS

function checkInput(inputType) {
  if (inputType === 'name') {
    const $warningDivName = d.getElementById('warningDivName');
    credentials.name = $signUpForm.name.value.trim();
    credentials.isNameValid = false;
    if (credentials.name == '') {
      $warningDivName.textContent = 'Please enter your full name';
    } else {
      $warningDivName.textContent = '';
      credentials.isNameValid = true;
      isReadySubmit();
    }
  }
  if (inputType === 'email') {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const $warningDivEmail = d.getElementById('warningDivEmail');
    credentials.email = $signUpForm.email.value.trim();
    credentials.isEmailValid = false;
    if (credentials.email == '') {
      $warningDivEmail.textContent = 'Please enter your email';
    } else if (!regExp.test(credentials.email)) {
      $warningDivEmail.textContent = 'Please enter a valid email';
    } else {
      $warningDivEmail.textContent = '';
      credentials.isEmailValid = true;
      isReadySubmit();
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
      isReadySubmit();
    }
  }
  if (inputType === 'password') {
    const $warningDivPassword2 = d.getElementById('warningDivPassword2');
    credentials.password = $signUpForm.password.value.trim();
    console.log(credentials.password);
    credentials.isPasswordValid = false;
    if (credentials.password == '') {
      $warningDivPassword2.textContent = 'Please enter a password';
    } else if (
      credentials.password2 &&
      credentials.password != credentials.password2
    ) {
      $warningDivPassword2.textContent = "Your password doesn't match";
      isReadySubmit();
    } else {
      $warningDivPassword2.textContent = '';
      credentials.isPasswordValid = true;
      isReadySubmit();
    }
  }
  if (inputType === 'password2') {
    const $warningDivPassword2 = d.getElementById('warningDivPassword2');
    credentials.password2 = $signUpForm.password2.value.trim();
    console.log(credentials.password2);
    credentials.isPasswordValid2 = false;
    if (credentials.password2 == '') {
      $warningDivPassword2.textContent = 'Please re-enter your password';
    } else if (
      credentials.password &&
      credentials.password2 != credentials.password
    ) {
      $warningDivPassword2.textContent = "Your password doesn't match";
      isReadySubmit();
    } else {
      $warningDivPassword2.textContent = '';
      credentials.isPasswordValid2 = true;
      isReadySubmit();
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
    console.log('Data sent to Backend');
    $signUpForm.reset();
    window.location.href = '/HTML/private.html';
    //window.location.replace = '/HTML/private.html';
  } else {
    console.log('Data not Valid');
  }
}
