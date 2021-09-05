
import firebase from 'firebase/app';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkxoTUJzKcHeT36KcDBYkLWPTAorj7e9s",
  authDomain: "todo-b88ac.firebaseapp.com",
  projectId: "todo-b88ac",
  storageBucket: "todo-b88ac.appspot.com",
  messagingSenderId: "886283106057",
  appId: "1:886283106057:web:e408bd2e1cfe8ab97245d8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db= firebase.firestore();
db.settings({ timestampsInSnapshots : true})

export default db;