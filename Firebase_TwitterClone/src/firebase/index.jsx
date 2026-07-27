// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRh4wNJGNf5AxOgacLyn5GRvn1iZwN09c",
    authDomain: "twitter-clone-166cd.firebaseapp.com",
    projectId: "twitter-clone-166cd",
    storageBucket: "twitter-clone-166cd.firebasestorage.app",
    messagingSenderId: "202590711560",
    appId: "1:202590711560:web:766910a0d9ad7297d2c6bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication kurulumu
export const auth = getAuth(app);

// google saglayicisinin kurulumu
export const provider = new GoogleAuthProvider();