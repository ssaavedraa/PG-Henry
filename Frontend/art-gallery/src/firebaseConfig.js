
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore'

import { getFirestore } from "firebase/firestore";


import 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCPRKM1ZgNoza4iYHE35CnyAhz3c7dWTYU",
  authDomain: "sanart-5.firebaseapp.com",
  projectId: "sanart-5",
  storageBucket: "sanart-5.appspot.com",
  messagingSenderId: "235527689975",
  appId: "1:235527689975:web:7bae1a21e037877054a5f2",
  measurementId: "G-LEJXP8Y0VL"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
export {
    
    app,
    provider,
    db
}