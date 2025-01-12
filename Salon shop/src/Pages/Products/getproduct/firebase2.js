import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADhcMpcxVkHYhOKQD8zMhTU_YA2SqIOA4",
  authDomain: "salon-f0b4a.firebaseapp.com",
  projectId: "salon-f0b4a",
  storageBucket: "salon-f0b4a.firebasestorage.app",
  messagingSenderId: "1099216024558",
  appId: "1:1099216024558:web:0c9877b64c78409a12d4ff",
  measurementId: "G-9NLPXR90H0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
