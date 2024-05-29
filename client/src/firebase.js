// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-433a5.firebaseapp.com",
  projectId: "mern-estate-433a5",
  storageBucket: "mern-estate-433a5.appspot.com",
  messagingSenderId: "581764298650",
  appId: "1:581764298650:web:1fb6fdbbe1d4550f522c23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);