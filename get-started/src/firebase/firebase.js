// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDarQRUVzRnIQbiO4KgNbNqI3z7HILto1Y",
  authDomain: "hualex-51074.firebaseapp.com",
  projectId: "hualex-51074",
  storageBucket: "hualex-51074.appspot.com",
  messagingSenderId: "601383236035",
  appId: "1:601383236035:web:65eb6f0650c4a7eec00d76",
  measurementId: "G-DCQDQCY8PC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth }