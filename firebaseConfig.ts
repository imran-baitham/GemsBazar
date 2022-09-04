import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAXClyjb1779I5MGzBUKc7WvJHojSTgIFY",
  authDomain: "gemsbazar-7c014.firebaseapp.com",
  projectId: "gemsbazar-7c014",
  storageBucket: "gemsbazar-7c014.appspot.com",
  messagingSenderId: "308124987304",
  appId: "1:308124987304:web:069f31bf24209eadf8f79d",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
