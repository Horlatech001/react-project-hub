import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth, db };
