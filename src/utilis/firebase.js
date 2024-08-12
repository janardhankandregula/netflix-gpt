// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7CWWPW0e3VMWTnHUGO3UEJY-3ERci_w0",
  authDomain: "netflix-gpt-6694b.firebaseapp.com",
  projectId: "netflix-gpt-6694b",
  storageBucket: "netflix-gpt-6694b.appspot.com",
  messagingSenderId: "777348770451",
  appId: "1:777348770451:web:15f56329fa66549a1dfb66",
  measurementId: "G-F9XZ389LNZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
