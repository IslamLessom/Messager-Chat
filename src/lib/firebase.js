import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatreactapp-da841.firebaseapp.com",
  projectId: "chatreactapp-da841",
  storageBucket: "chatreactapp-da841.appspot.com",
  messagingSenderId: "61751224782",
  appId: "1:61751224782:web:d4308ea949178d6781639f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()