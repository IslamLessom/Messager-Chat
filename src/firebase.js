import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCF0WMmenvMWVzWTa4wvKCaU-qXZFPbs_g",
    authDomain: "chat-6ea4b.firebaseapp.com",
    projectId: "chat-6ea4b",
    storageBucket: "chat-6ea4b.appspot.com",
    messagingSenderId: "5635285343",
    appId: "1:5635285343:web:459aae70e1da0e418e56ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();