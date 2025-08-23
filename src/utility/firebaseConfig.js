// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP4dBFOxiE8PfrJSYBrRebR0XcyM48NZk",
  authDomain: "ferdowsmall.firebaseapp.com",
  projectId: "ferdowsmall",
  storageBucket: "ferdowsmall.firebasestorage.app",
  messagingSenderId: "971605349395",
  appId: "1:971605349395:web:7828d4a4c03dccc8bcdbe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getfirestore(App);

export { app as firebaseApp, db}