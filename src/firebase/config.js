// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfFSLGvGBaOHzkMbiwNR1xlTQ9d3pSSvM",
  authDomain: "glambeauty-95f06.firebaseapp.com",
  projectId: "glambeauty-95f06",
  storageBucket: "glambeauty-95f06.appspot.com",
  messagingSenderId: "346581390662",
  appId: "1:346581390662:web:d5057d4269ae4dda290147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)