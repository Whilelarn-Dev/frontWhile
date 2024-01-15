// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAaZB6iiFSyucL7LfZFYRFqMKfZnd9XyI",
  authDomain: "mycustomgpt-61fbe.firebaseapp.com",
  projectId: "mycustomgpt-61fbe",
  storageBucket: "mycustomgpt-61fbe.appspot.com",
  messagingSenderId: "609504913684",
  appId: "1:609504913684:web:45bcb026704413ef9dfa01",
  measurementId: "G-FGZG3ZLBV6"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);


interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  id: string;
  messages: number;
}
// Example type definition for the user object
export type FirebaseUser =Pick<User,"displayName" | "email"  | "photoURL"| "id">;
