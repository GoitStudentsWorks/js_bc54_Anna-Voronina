import { initializeApp } from 'firebase/app';
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getDatabase, set, ref, update } from 'firebase/database';
import storage from './local-storage';
import { getUserDatabase } from './templates/firebase';
import { countBook } from './templates/shoppingListCounter';
import { Notify } from 'notiflix';

const firebaseConfig = {
  apiKey: 'AIzaSyA-c5ktNEt2bpwdrjlWbguPygCPHCJWGLM',
  authDomain: 'authentication-6949a.firebaseapp.com',
  databaseURL: 'https://authentication-6949a-default-rtdb.firebaseio.com',
  projectId: 'authentication-6949a',
  storageBucket: 'authentication-6949a.appspot.com',
  messagingSenderId: '312217541484',
  appId: '1:312217541484:web:32ea78d2e9302b00f63149',
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
const auth = getAuth(app);

const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');
const authForm = document.querySelector('.authorization-form');
const userIcon = document.querySelector('.user-icon');
const signUpBtnText = document.querySelector('.sign-up-btn-text');
const arrowDownIcon = document.querySelector('.header-arrow-down');
const arrowRightIcon = document.querySelector('.arrow-right');
const logOutBtn = document.querySelector('.log-out-btn');
const autBackdrop = document.querySelector('.authorization-backdrop');
const singUpBtn = document.querySelector('.authorization-form-submit');
const signInBtnSubmit = document.querySelector('.authorization-sign-in-btn');
const signUpBtnChange = document.querySelector('#singUp');
const singInBtn = document.querySelector('#singIn');
const burgerSignUpBtn = document.querySelector('.js-burger-sign-up-btn');
const burgerSignUpBtnText = document.querySelector('.burger-sign-up-btn-text');
const burgerLogOutBtn = document.querySelector('.burger-log-out-btn');

// ф-я "реестрації"

singUpBtn.addEventListener('click', onSignUpBtnClick);

function onSignUpBtnClick(event) {
  event.preventDefault();
  const storageData = storage.load('bookList') || [];

  const saveName = userName.value;
  console.log(saveName);
  const saveEmail = userEmail.value;
  const savePassword = userPassword.value;
  authForm.reset();

  createUserWithEmailAndPassword(auth, saveEmail, savePassword)
    .then(userCredential => {
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        name: saveName,
        email: saveEmail,
        password: savePassword,
        shoppingList: JSON.stringify(storageData),
      });

      updateProfile(auth.currentUser, {
        displayName: saveName,
      })
        .then(() => {
          signUpBtnText.classList.add('grow');
          signUpBtnText.textContent = user.displayName;
          storage.save('userId', user.uid);
        })
        .catch(error => {
          Notify.failure(
            'Oops! Something went wrong. We are sorry for the inconvenience. Please try again later.'
          );
        });

      getUserDatabase('name').then(data => {
        burgerSignUpBtnText.textContent = data;
        setTimeout(() => {
          Notify.success(
            'Thanks for signing up. Welcome to Bookshelf! We are happy to have you on board.'
          );
          countBook();
        }, 500);
      });

      userIcon.classList.remove('is-hidden');
      autBackdrop.classList.add('is-hidden');
      arrowDownIcon.classList.remove('is-hidden');
      arrowRightIcon.classList.add('is-hidden');
      burgerSignUpBtn.classList.add('is-hidden');
      burgerLogOutBtn.classList.remove('is-hidden');
      burgerSignUpBtn.style.backgroundColor = 'transparent';
    })
    .catch(error => {
      Notify.failure(
        'Oops! Something went wrong. We are sorry for the inconvenience. Please try again later.'
      );
    });
}

//ф-я "увійти у систему"
signInBtnSubmit.addEventListener('click', event => {
  event.preventDefault();
  const saveName = userName.value;
  const saveEmail = userEmail.value;
  const savePassword = userPassword.value;
  authForm.reset();

  signInWithEmailAndPassword(auth, saveEmail, savePassword)
    .then(userCredential => {
      const user = userCredential.user;
      user.displayName = saveName;
      const dt = new Date();
      storage.save('userId', user.uid);

      update(ref(database, 'user/' + user.uid), {
        last_login: dt,
      });

      getUserDatabase('shoppingList')
        .then(data => {
          storage.save('bookList', JSON.parse(data));
        })
        .catch(error => {
          Notify.failure(
            'Oops! Something went wrong. We are sorry for the inconvenience. Please try again later.'
          );
        });

      getUserDatabase('name')
        .then(data => {
          signUpBtnText.textContent = data;
          burgerSignUpBtnText.textContent = data;
          setTimeout(() => {
            Notify.success(
              `Hello ${
                data.charAt(0).toUpperCase() + data.slice(1)
              }! You have signed in successfully.`
            );
            countBook();
          }, 500);
        })
        .catch(error => {
          Notify.failure(
            'Oops! Something went wrong. We are sorry for the inconvenience. Please try again later.'
          );
        });

      userIcon.classList.remove('is-hidden');
      autBackdrop.classList.add('is-hidden');
      arrowDownIcon.classList.remove('is-hidden');
      arrowRightIcon.classList.add('is-hidden');
      burgerSignUpBtn.style.backgroundColor = 'transparent';
      burgerLogOutBtn.classList.remove('is-hidden');
    })
    .catch(error => {
      Notify.failure(
        'Oops! Something went wrong. We are sorry for the inconvenience. Please try again later.'
      );
    })
    .finally(() => {
      countBook();
    });
});

const checkAuthState = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      getUserDatabase('name')
        .then(data => {
          signUpBtnText.textContent = data;
          burgerSignUpBtnText.textContent = data;
        })
        .catch(error => {
          Notify.failure(
            'Oops! Something went wrong. We are sorry for the inconvenience. Please try again later.'
          );
        });

      signUpBtnText.classList.add('grow');
      userIcon.classList.remove('is-hidden');
      autBackdrop.classList.add('is-hidden');
      arrowDownIcon.classList.remove('is-hidden');
      arrowRightIcon.classList.add('is-hidden');
      burgerSignUpBtn.style.backgroundColor = 'transparent';
      burgerLogOutBtn.classList.remove('is-hidden');
    } else {
    }
  });
};

checkAuthState();

const userSignOut = async () => {
  await signOut(auth);
  logOutBtn.classList.add('is-hidden');
  signUpBtnText.textContent = 'Sign up';
  signUpBtnText.classList.remove('grow');
  userIcon.classList.add('is-hidden');
  burgerSignUpBtn.style.backgroundColor = '#4F2EE8';
  burgerSignUpBtnText.textContent = 'Sign up';
  storage.remove('userId');
  storage.remove('bookList');
  setTimeout(() => {
    countBook();
    Notify.info(
      'You have successfully logged out. We hope to see you back soon!'
    );
  }, 250);
};

logOutBtn.addEventListener('click', userSignOut);
burgerLogOutBtn.addEventListener('click', userSignOut);

const onOptionSignInBtnClick = function (event) {
  userName.classList.add('is-hidden');
  singUpBtn.classList.add('is-hidden');
  signInBtnSubmit.classList.remove('is-hidden');
  signUpBtnChange.classList.remove('authorization-btn-active');
  singInBtn.classList.add('authorization-btn-active');
};

const onOptionSignUpBtnClick = function (event) {
  userName.classList.remove('is-hidden');
  singUpBtn.classList.remove('is-hidden');
  signInBtnSubmit.classList.add('is-hidden');
  signUpBtnChange.classList.add('authorization-btn-active');
  singInBtn.classList.remove('authorization-btn-active');
};

singInBtn.addEventListener('click', onOptionSignInBtnClick);
signUpBtnChange.addEventListener('click', onOptionSignUpBtnClick);
