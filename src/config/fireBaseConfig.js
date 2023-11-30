import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFHfKFYz3G13CNP79BLu-Nybsum7olL90",
  authDomain: "e-commerce-b2a81.firebaseapp.com",
  projectId: "e-commerce-b2a81",
  storageBucket: "e-commerce-b2a81.appspot.com",
  messagingSenderId: "119705067092",
  appId: "1:119705067092:web:5fc9b3156cc5dcc74417c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
