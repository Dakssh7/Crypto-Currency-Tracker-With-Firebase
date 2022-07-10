import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBENFqVgrf41LGYQT5Cq9w7bC7nIo-m390",
  authDomain: "crypto-currency-tracker-5ce75.firebaseapp.com",
  projectId: "crypto-currency-tracker-5ce75",
  storageBucket: "crypto-currency-tracker-5ce75.appspot.com",
  messagingSenderId: "962252566944",
  appId: "1:962252566944:web:47844e859c6c32f1c434c5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
