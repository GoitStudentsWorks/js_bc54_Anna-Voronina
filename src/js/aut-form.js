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
const singUpBtnHeader = document.querySelector('#singUpBtnHeader');
const authForm = document.querySelector('.authorization-form');
const userIcon = document.querySelector('.user-icon');
const signUpBtnText = document.querySelector('.sign-up-btn-text');
// const signOutBtn = document.querySelector('.sign-out');

const autBackdrop = document.querySelector('.authorization-backdrop');

const singUpBtn = document.querySelector('#singUp');
const singInBtn = document.querySelector('#singIn');

// ф-я "реестрації"
singUpBtn.addEventListener('click', event => {
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
          signUpBtnText.textContent = user.displayName;
          storage.save('userId', user.uid);
        })
        .catch(error => {
          console.log(error);
        });

      userIcon.classList.remove('is-hidden');
      autBackdrop.classList.add('is-hidden');

      alert('user created');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});

//ф-я "увійти у систему"
singInBtn.addEventListener('click', event => {
  const saveName = userName.value;
  const saveEmail = userEmail.value;
  const savePassword = userPassword.value;
  authForm.reset();

  signInWithEmailAndPassword(auth, saveEmail, savePassword)
    .then(userCredential => {
      const user = userCredential.user;
      user.displayName = saveName;
      const dt = new Date();

      update(ref(database, 'user/' + user.uid), {
        last_login: dt,
      });

      updateProfile(auth.currentUser, {
        displayName: saveName,
      })
        .then(() => {})
        .catch(error => {
          console.log(error);
        });

      userIcon.classList.remove('is-hidden');
      autBackdrop.classList.add('is-hidden');

      alert('User Log In ');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});

const checkAuthState = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      signUpBtnText.textContent = user.displayName;
      userIcon.classList.remove('is-hidden');
      autBackdrop.classList.add('is-hidden');
    } else {
    }
  });
};

checkAuthState();

// const userSignOut = async () => {
//   await signOut(auth);
//   signUpBtnText.textContent = 'Sign up';
//   userIcon.classList.add('is-hidden');
//   storage.remove('userId');

//   location.reload();
// };

// signOutBtn.addEventListener('click', userSignOut);
