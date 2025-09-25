
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKNYJOnnfVjvUqeIWfCXYNQeV0DULUHEc",
    authDomain: "devinterviews-37203.firebaseapp.com",
    projectId: "devinterviews-37203",
    storageBucket: "devinterviews-37203.firebasestorage.app",
    messagingSenderId: "567688654485",
    appId: "1:567688654485:web:b5d406aded3e46f599359c",
    measurementId: "G-BSEWCQDS7Q"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);