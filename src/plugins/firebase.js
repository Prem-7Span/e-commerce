// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCODIHBgW_FQfIn4mW6qqyUNu-2JUxmOts",
  authDomain: "e-commerce-f288f.firebaseapp.com",
  projectId: "e-commerce-f288f",
  storageBucket: "e-commerce-f288f.appspot.com",
  messagingSenderId: "405140833534",
  appId: "1:405140833534:web:02614e3b000aa2551d11af",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);

export default authentication;
