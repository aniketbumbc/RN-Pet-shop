// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'pet-adopt-ea5ba.firebaseapp.com',
  projectId: 'pet-adopt-ea5ba',
  storageBucket: 'pet-adopt-ea5ba.appspot.com',
  messagingSenderId: '39530935328',
  appId: '1:39530935328:web:8eda8d8e1f5b766447b845',
  measurementId: 'G-DW571JBMR0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebasedb = getFirestore(app);

// const analytics = getAnalytics(app);
