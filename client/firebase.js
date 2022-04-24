// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ON9MVn8JjvJqLd5-m2Ves5HAO3uONFE",
  authDomain: "boilerair-92cf5.firebaseapp.com",
  projectId: "boilerair-92cf5",
  storageBucket: "boilerair-92cf5.appspot.com",
  messagingSenderId: "206961991730",
  appId: "1:206961991730:web:c9e16765998ab38b0d1c2b",
  measurementId: "G-GS8VFHRR7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =  getAuth();

export { auth }
