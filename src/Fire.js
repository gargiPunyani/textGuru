// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZQ34SzKLItSuFm1MmA_MmajRlpJi8gis",
  authDomain: "gymm-80cf2.firebaseapp.com",
  databaseURL: "https://gymm-80cf2-default-rtdb.firebaseio.com",
  projectId: "gymm-80cf2",
  storageBucket: "gymm-80cf2.appspot.com",
  messagingSenderId: "109182274740",
  appId: "1:109182274740:web:36f0339dfe6b5c80abdbe1",
  measurementId: "G-JYZJY9Z8PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)

export {auth, app};