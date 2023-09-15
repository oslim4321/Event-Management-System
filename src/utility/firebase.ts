// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuZ55PIRlG21jg24CZdSJW3rKGYLB83zw",
  authDomain: "event-management-547bb.firebaseapp.com",
  projectId: "event-management-547bb",
  storageBucket: "event-management-547bb.appspot.com",
  messagingSenderId: "720011212186",
  appId: "1:720011212186:web:e0228b7c883dff9d497623"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage(app);
