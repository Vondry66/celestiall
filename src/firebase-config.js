import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBCVeqfwuOd40DwK1z64eHZ200fr3uFyF0",
  authDomain: "celestiall-f4d6d.firebaseapp.com",
  projectId: "celestiall-f4d6d",
  storageBucket: "celestiall-f4d6d.appspot.com",
  messagingSenderId: "549876388287",
  appId: "1:549876388287:web:103b9e5b67e0a27726110a",
  measurementId: "G-JHDQ36JB8Q",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const name = result.user.displayName;
    const profilePic = result.user.photoURL;

    localStorage.setItem('name', name);
    localStorage.setItem('profilePic', profilePic);
  }).catch((err) => {
    console.log(err);
  });
};