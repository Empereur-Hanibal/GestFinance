// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBb8VZ43B4h-0sZ8kQME9w7FPLOP9QiEZU",
    authDomain: "gestfinance-4905d.firebaseapp.com",
    projectId: "gestfinance-4905d",
    storageBucket: "gestfinance-4905d.appspot.com",
    messagingSenderId: "1044910424267",
    appId: "1:1044910424267:web:66387395fa1e7bb5c11b4e",
    measurementId: "G-X438QKJDF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);