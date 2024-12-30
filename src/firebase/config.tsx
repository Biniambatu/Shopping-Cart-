import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJSTzL5Oe-M4So2ghCwHJdK4xsXdOR_nA",
  authDomain: "shopping-cart-d176b.firebaseapp.com",
  projectId: "shopping-cart-d176b",
  storageBucket: "shopping-cart-d176b.firebasestorage.app",
  messagingSenderId: "907622969620",
  appId: "1:907622969620:web:b8cf3001254bd844cc5201"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 
export const auth = getAuth(app)
export const Provider = new GoogleAuthProvider()