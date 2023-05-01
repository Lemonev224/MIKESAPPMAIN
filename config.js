// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTN8RJE_omUJo5JUi0K_-7SZ74wC77Jhg",
  authDomain: "mikeappprojectmain.firebaseapp.com",
  databaseURL: "https://mikeappprojectmain-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mikeappprojectmain",
  storageBucket: "mikeappprojectmain.appspot.com",
  messagingSenderId: "860315743786",
  appId: "1:860315743786:web:a7b7d52db7867f584d3553"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

