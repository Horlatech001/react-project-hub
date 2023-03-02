import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
export const firebaseConfig = {
  apiKey: "AIzaSyC9xd__DEzVXRQrHfWtDv_gwelMU-9bDUo",
  authDomain: "admin-page-6e59d.firebaseapp.com",
  projectId: "admin-page-6e59d",
  storageBucket: "admin-page-6e59d.appspot.com",
  messagingSenderId: "740591100157",
  appId: "1:740591100157:web:1e5ffc454b792396679e94",
  measurementId: "G-LMJTKHKBNC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);
