import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, child, get } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import {getDatabase as database} from  "firebase/firestore"
// import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhVVL2W5VXf3ErqZKk9Sz8UHiVFp6ZcFM",
    authDomain: "donation-app-99565.firebaseapp.com",
    databaseURL: "https://donation-app-99565-default-rtdb.firebaseio.com",
    projectId: "donation-app-99565",
    storageBucket: "donation-app-99565.appspot.com",
    messagingSenderId: "574340148701",
    appId: "1:574340148701:web:47d7a50abfd49a042c5a34"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const databas = getDatabase(app)
const db = getFirestore(app);
// const firestoredatabase=database(app)
const storage = getStorage(app)
export { auth, databas,storage,db }
