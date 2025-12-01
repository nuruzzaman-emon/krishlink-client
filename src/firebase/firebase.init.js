// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRcFoepKmFiOuNkX-ABCwhznvGTNwwURY",
  authDomain: "krish-link.firebaseapp.com",
  projectId: "krish-link",
  storageBucket: "krish-link.firebasestorage.app",
  messagingSenderId: "108746635350",
  appId: "1:108746635350:web:e336d5777954f74fc4a3f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
