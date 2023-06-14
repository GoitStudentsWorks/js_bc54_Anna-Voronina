

import { initializeApp } from "firebase/app";
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, set, ref, update, } from "firebase/database";
import storage from './local-storage'

const firebaseConfig = {
  apiKey: "AIzaSyBQClAROb7jKYOk0Az8cgJ1pWqE4xPcO00",
  authDomain: "jsdeploy-46662.firebaseapp.com",
  databaseURL: "https://jsdeploy-46662-default-rtdb.firebaseio.com",
  projectId: "jsdeploy-46662",
  storageBucket: "jsdeploy-46662.appspot.com",
  messagingSenderId: "763907667309",
  appId: "1:763907667309:web:9526c6c8d2320cd7ee5664"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth(app);


const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const singUpBtnHeader = document.querySelector('#singUpBtnHeader')
const authForm = document.querySelector('.authorization-form')
const userIcon = document.querySelector(".user-icon")
const signUpBtnText = document.querySelector('.sign-up-btn-text')
const signOutBtn = document.querySelector('.sign-out')
console.log(signOutBtn);

const autBackdrop = document.querySelector('.authorization-backdrop')

const singUpBtn = document.querySelector("#singUp");
const singInBtn = document.querySelector("#singIn")


// const arr = [1, 2, 3, 4, 5]

// const storageData = storage.load('bookList');


// ф-я "реестрації"
singUpBtn.addEventListener('click', (event) => {
  
  const storageData = storage.load('bookList');
  
  const saveName = userName.value
  console.log(saveName);
  const saveEmail = userEmail.value;
  const savePassword = userPassword.value
  authForm.reset();


  createUserWithEmailAndPassword(auth, saveEmail, savePassword)
    .then((userCredential) => {
               
      const user = userCredential.user;
      console.log(user);
      
      // user.displayName = saveName

  
      set(ref(database, 'users/' + user.uid), {
        name: saveName,
        email: saveEmail,
        password: savePassword,
        shoppingList: JSON.stringify(storageData)
      });
      updateProfile(auth.currentUser, {
      displayName: saveName
        }).then(() => {
      signUpBtnText.textContent = user.displayName;
}).catch((error) => {
console.log(error);
});
      
      userIcon.classList.remove('is-hidden');
      autBackdrop.classList.add('is-hidden');

      

    alert('user created')
     })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
    alert(errorMessage)
  });
})

//ф-я "увійти у систему"
singInBtn.addEventListener('click', (event) => {
  
  const saveName = userName.value
  const saveEmail = userEmail.value;
  const savePassword = userPassword.value
    authForm.reset();

  signInWithEmailAndPassword(auth, saveEmail, savePassword)
    .then((userCredential) => {
     
      const user = userCredential.user;
      user.displayName = saveName
      const dt = new Date();

      update(ref(database, 'user/' + user.uid), {
        last_login: dt,
      });
      updateProfile(auth.currentUser, {
    displayName: saveName
}).then(() => {

}).catch((error) => {
console.log(error);
});
   
      userIcon.classList.remove('is-hidden');
      autBackdrop.classList.add('is-hidden');

       alert('User Log In ')
  
    }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
         
          alert(errorMessage)
        });
    });


const checkAuthState = () => {
      onAuthStateChanged(auth, (user) => {
  if (user) {
       signUpBtnText.textContent = user.displayName;
      userIcon.classList.remove('is-hidden');
      autBackdrop.classList.add('is-hidden');
  } else {

  }
});
    }

checkAuthState()

const userSignOut = async () => {
  await signOut(auth);
  signUpBtnText.textContent = 'Sign up';
  userIcon.classList.add('is-hidden');

  location.reload();
};

signOutBtn.addEventListener('click', userSignOut)






// const userSingUp = async (event) => {
//   event.preventDefault()
 
//   const saveName = userName.value
//   const saveEmail = userEmail.value;
//   const savePassword = userPassword.value
//   createUserWithEmailAndPassword(auth, saveEmail, savePassword)
//     .then((userCredential) => {
   
//       const user = userCredential.user;
//     console.log(user);
//       setTimeout(() => {
//         alert("you account has been created!")
//         authForm.reset();
//       }, 500);
//       window.location.href = './index.html'
//           }).catch((error) => {
//       console.log(error);
//           })
//    }

// const userSingIn = async (event) => {
//   event.preventDefault()
 
//   // const saveName = userName.value
//   const signInEmail = userEmail.value;
//   const signInPassword = userPassword.value

//   signInWithEmailAndPassword(auth, signInEmail, signInPassword)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       setTimeout(() => {
//         alert("you have signed in successfully!")
//         authForm.reset();
//       }, 500);
//       window.location.href = './index.html'
//           }).catch((error) => {
//       console.log(error);
//           })
   
// }

// singInBtn.addEventListener('click' , userSingIn)
// singUpBtn.addEventListener('click' , userSingUp)
