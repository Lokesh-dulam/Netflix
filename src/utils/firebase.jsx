// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4sd1VW8lH0UUwJUso6cssXvexKET6jnY",
  authDomain: "netflix-loki.firebaseapp.com",
  projectId: "netflix-loki",
  storageBucket: "netflix-loki.appspot.com",
  messagingSenderId: "603563003094",
  appId: "1:603563003094:web:e6f944f873641e21b1cd77",
  measurementId: "G-XDTDFQCTGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()