import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxz89fE1S1G-qJ9JnRfUc05N4Badca2FQ",
  authDomain: "coffee-design.firebaseapp.com",
  projectId: "coffee-design",
  storageBucket: "coffee-design.appspot.com",
  messagingSenderId: "219649173503",
  appId: "1:219649173503:web:a8e652b4d8d4424d1da9ca",
  measurementId: "G-8RS1FLPC2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app) 