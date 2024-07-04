// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIx0ERp5Btuwr-M0mtczi4tk8JYfaXG8Q",
  authDomain: "metrofood-61f0c.firebaseapp.com",
  projectId: "metrofood-61f0c",
  storageBucket: "metrofood-61f0c.appspot.com",
  messagingSenderId: "868767695162",
  appId: "1:868767695162:web:8a150bdf425a536bb55003",
  measurementId: "G-9Z52CW11LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);