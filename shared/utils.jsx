import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './../config/FirebaseConfig';
export const getFavList = async (user) => {
  const docSnap = await getDoc(doc(db, 'UserFavoritePet', user?.userName));

  if (docSnap?.exists()) {
    return docSnap.data();
  } else {
    await setDoc(doc(db, UserFavoritePet, user?.userName), {
      userName: user?.userName,
      favorites: [],
    });
  }
};
