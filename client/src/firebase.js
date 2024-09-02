// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-cebed.firebaseapp.com",
  projectId: "mern-estate-cebed",
  storageBucket: "mern-estate-cebed.appspot.com",
  messagingSenderId: "689183609114",
  appId: "1:689183609114:web:28fe31ce8cafd0d014dca3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);