
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyB6sjffBr1oEOle7sU2HhBiVe8mdyMHIyU",
  authDomain: "tik-tok-clone-72f74.firebaseapp.com",
  projectId: "tik-tok-clone-72f74",
  storageBucket: "tik-tok-clone-72f74.appspot.com",
  messagingSenderId: "626592939135",
  appId: "1:626592939135:web:31a10784c6704821ee534a",
  measurementId: "G-QPQGT2546K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
