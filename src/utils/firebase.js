// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6WBimLfildcQN9bYKrcpdreyGvoahU-4",
  authDomain: "netflixgpt-f4dc2.firebaseapp.com",
  projectId: "netflixgpt-f4dc2",
  storageBucket: "netflixgpt-f4dc2.appspot.com",
  messagingSenderId: "163492181149",
  appId: "1:163492181149:web:f99319b3cfe1f19e80d074",
  measurementId: "G-MF0LYD1DXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
