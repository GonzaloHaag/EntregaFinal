
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCzRU6sP0-it8NqriYmTBPUxk0NWL5ay1U",
  authDomain: "proyectofinal-reactjs-fc282.firebaseapp.com",
  projectId: "proyectofinal-reactjs-fc282",
  storageBucket: "proyectofinal-reactjs-fc282.appspot.com",
  messagingSenderId: "997265621752",
  appId: "1:997265621752:web:00340e94892800795ab10d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)