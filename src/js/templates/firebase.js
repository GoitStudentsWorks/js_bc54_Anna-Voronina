import Storage from '../local-storage';
import { ref, update, get, child } from 'firebase/database';
import { database } from '../aut-form';

export function updateDatabase() {
  const updatedStorage = Storage.load('bookList') || [];
  const userId = Storage.load('userId');
  update(ref(database, 'users/' + userId), {
    shoppingList: JSON.stringify(updatedStorage),
  });
}

export function getUserDatabase(param) {
  const userId = Storage.load('userId');
  const dbRef = ref(database);
  const getData = get(child(dbRef, `users/${userId}/${param}`))
    .then(snap => {
      return snap._node.value_;
    })
    .catch(error => {
      console.log(error);
    });

  return getData;
}

// get(child(dbRef, `users/${userId}`))
//   .then(snapshot => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log('No data available');
//     }
//   })
//   .catch(error => {
//     console.error(error);
//   });
