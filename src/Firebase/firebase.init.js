// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVttedrLG2f_bkjffHMUZ_omq5cIQksYQ",
  authDomain: "dragon-news-63777.firebaseapp.com",
  projectId: "dragon-news-63777",
  storageBucket: "dragon-news-63777.firebasestorage.app",
  messagingSenderId: "154649000206",
  appId: "1:154649000206:web:5f8eccbef8b5fb11b43f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);