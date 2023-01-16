// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIg8OEAe2HA6XTfWrvVJrkFdpA7GLqzMU",
    authDomain: "fir-basic-setup-eee6d.firebaseapp.com",
    projectId: "fir-basic-setup-eee6d",
    storageBucket: "fir-basic-setup-eee6d.appspot.com",
    messagingSenderId: "110093615142",
    appId: "1:110093615142:web:fe1c820bd95c245e97e6e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
