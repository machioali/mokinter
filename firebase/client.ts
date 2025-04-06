// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDmGGNUpkx0qm6zjvdys5UMJNWlphkxc0s",
  authDomain: "mockinter-97ece.firebaseapp.com",
  projectId: "mockinter-97ece",
  storageBucket: "mockinter-97ece.firebasestorage.app",
  messagingSenderId: "1017942847439",
  appId: "1:1017942847439:web:0ccb15057b210114816cba",
  measurementId: "G-BNQSR310Q6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);