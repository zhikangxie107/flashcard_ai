// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "flashcardsaas-1fe04.firebaseapp.com",
  projectId: "flashcardsaas-1fe04",
  storageBucket: "flashcardsaas-1fe04.appspot.com",
  messagingSenderId: "398729040917",
  appId: "1:398729040917:web:7ffee80367482701cfea1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default { db };