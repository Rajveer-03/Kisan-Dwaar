import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA6nHyjbkg6xb7l7p2Ttg51o54P2LbKjNQ",
    authDomain: "kisandwaar.firebaseapp.com",
    projectId: "kisandwaar",
    storageBucket: "kisandwaar.firebasestorage.app",
    messagingSenderId: "855208303143",
    appId: "1:855208303143:web:02f7d3d03b6b39fd2a8c02",
    measurementId: "G-2NG8VDZ860"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { db, auth, provider, firebaseApp, storage };