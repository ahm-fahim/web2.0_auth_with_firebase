// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_projectId,
    projectId: process.env.REACT_APP_storageBucket,
    storageBucket: process.env.REACT_APP_messagingSenderId,
    messagingSenderId: process.env.REACT_APP_appId,
    appId: process.env.REACT_APP_authDomain,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
