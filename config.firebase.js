// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyJlAbh7xakH2MfjXh1xVjFonpRsx9Xs4",
  authDomain: "segredos-secretos.firebaseapp.com",
  projectId: "segredos-secretos",
  storageBucket: "segredos-secretos.appspot.com",
  messagingSenderId: "163690187617",
  appId: "1:163690187617:web:620ac97525d200fb32d320",
  measurementId: "G-XWV63YRQH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)

export {app}
