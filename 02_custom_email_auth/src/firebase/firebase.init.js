// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeG-fmE34TIBpXrxIF6uviH49Sxs3r1DQ",
    authDomain: "custom-email-auth-ef42b.firebaseapp.com",
    projectId: "custom-email-auth-ef42b",
    storageBucket: "custom-email-auth-ef42b.appspot.com",
    messagingSenderId: "52479708141",
    appId: "1:52479708141:web:a71da4a3af7415cac475e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;