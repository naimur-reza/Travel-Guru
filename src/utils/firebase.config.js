// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkgntYTWbRWhnlnLD-zsGBHxnjbYbOVLc",
  authDomain: "travelar-guru.firebaseapp.com",
  projectId: "travelar-guru",
  storageBucket: "travelar-guru.appspot.com",
  messagingSenderId: "532288541779",
  appId: "1:532288541779:web:19e77bb71e29497e3322a6",
  measurementId: "G-789V9LZHJ9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
