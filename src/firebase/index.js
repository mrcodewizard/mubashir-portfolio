// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNqO5ixqx2NFzCYyd2ZOfZ4GlAy_2PmpU",
  authDomain: "portfolio-app-54cc8.firebaseapp.com",
  projectId: "portfolio-app-54cc8",
  storageBucket: "portfolio-app-54cc8.appspot.com",
  messagingSenderId: "905128161695",
  appId: "1:905128161695:web:1ce755eda0da5643e5cdaa",
  measurementId: "G-FSRCRSGMMT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
