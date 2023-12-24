// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,User} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAad11SI5M5MwFnQj0sktn0a1v5DBhhNsI",
  authDomain: "turnkey-life-392509.firebaseapp.com",
  projectId: "turnkey-life-392509",
  storageBucket: "turnkey-life-392509.appspot.com",
  messagingSenderId: "466792946637",
  appId: "1:466792946637:web:b1b7d8cfe43d865c320284",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



// Example type definition for the user object
export type FirebaseUser =Pick<User,"displayName" | "email"  | "photoURL"| "uid">;
