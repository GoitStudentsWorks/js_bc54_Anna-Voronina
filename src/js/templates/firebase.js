import Storage from '../local-storage';
import { ref, update } from 'firebase/database';
import { database } from '../aut-form';

export function updateDatabase() {
  const updatedStorage = Storage.load('bookList') || [];
  const userId = Storage.load('userId');
  update(ref(database, 'users/' + userId), {
    shoppingList: JSON.stringify(updatedStorage),
  });
}
