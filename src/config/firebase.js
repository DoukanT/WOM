// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword, updateCurrentUser,signInWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXZjCwxVb8D9QAF4_KHGeMAQ_802DVp08",
  authDomain: "womauth.firebaseapp.com",
  projectId: "womauth",
  storageBucket: "womauth.appspot.com",
  messagingSenderId: "825952162766",
  appId: "1:825952162766:web:69d61bf2d61238a124119f"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app)

export const signUp = async(name, email, password) => {
  await createUserWithEmailAndPassword(auth,email,password);
  await updateCurrentUser(auth,{displayName: name})


}

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth,email,password)

  
}

