import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAvYWBmBheeQAQB6rkmrlF42_8wYu-hbiE",
  authDomain: "e-commerce-9312d.firebaseapp.com",
  projectId: "e-commerce-9312d",
  storageBucket: "e-commerce-9312d.appspot.com",
  messagingSenderId: "149166034706",
  appId: "1:149166034706:web:2f87b2aa3d35e54e20adcb"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);


export default app;