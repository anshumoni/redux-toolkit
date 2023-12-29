// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAFhcR9Xd5GDqsm7WT6OoFYt-fH1EsyGvs",
  authDomain: "react-cart-b4418.firebaseapp.com",
  databaseURL: "https://react-cart-b4418-default-rtdb.firebaseio.com",
  projectId: "react-cart-b4418",
  storageBucket: "react-cart-b4418.appspot.com",
  messagingSenderId: "460761860879",
  appId: "1:460761860879:web:30ec1f4372a31bfa834c7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}