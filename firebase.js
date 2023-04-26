
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { initializeFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBTN8RJE_omUJo5JUi0K_-7SZ74wC77Jhg",
  authDomain: "mikeappprojectmain.firebaseapp.com",
  databaseURL: "https://mikeappprojectmain-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mikeappprojectmain",
  storageBucket: "mikeappprojectmain.appspot.com",
  messagingSenderId: "860315743786",
  appId: "1:860315743786:web:a7b7d52db7867f584d3553"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export function signIn(email, password){
    return signInWithEmailAndPassword(auth, email, password)
}

export function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
}

