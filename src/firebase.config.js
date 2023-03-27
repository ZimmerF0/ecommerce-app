import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxxTFS8O4HCxlrfHT_F4nOyi1fAg2GXUQ",
  authDomain: "market-dded9.firebaseapp.com",
  projectId: "market-dded9",
  storageBucket: "market-dded9.appspot.com",
  messagingSenderId: "316580062763",
  appId: "1:316580062763:web:f322c655e369f143942c6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
