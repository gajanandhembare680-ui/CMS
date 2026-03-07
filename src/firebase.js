// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXTdAxSP-ROJ0MFIufx-WKk-r2HhOTN7w",
    authDomain: "complaint-management-sys-b2250.firebaseapp.com",
    projectId: "complaint-management-sys-b2250",
    storageBucket: "complaint-management-sys-b2250.firebasestorage.app",
    messagingSenderId: "908442936065",
    appId: "1:908442936065:web:5da8e4f4a720061921b100",
    measurementId: "G-EW8LS00EPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);