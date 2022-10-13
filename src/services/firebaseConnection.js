// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyApcnSLn60_VQ7eTqxExKAVH_Ru7aVGKQk",
  authDomain: "tarefas-b7610.firebaseapp.com",
  projectId: "tarefas-b7610",
  storageBucket: "tarefas-b7610.appspot.com",
  messagingSenderId: "619948576165",
  appId: "1:619948576165:web:c3eb386dc950a90bd4ec4c",
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
