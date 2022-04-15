import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBsAkrfQVos5Hf6VuARVgS8a-SpjgoZ6g8",
    authDomain: "twitter-clone-a4461.firebaseapp.com",
    projectId: "twitter-clone-a4461",
    storageBucket: "twitter-clone-a4461.appspot.com",
    messagingSenderId: "96535948440",
    appId: "1:96535948440:web:39dbec5bc4a56e441bb4ed",
    measurementId: "G-GFSNQY0DGW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
  
export default db;