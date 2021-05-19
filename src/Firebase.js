import  firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiQ4DSUjPyT6cD36WF5UQv2ZMChsl0x-k",
    authDomain: "clone-bf039.firebaseapp.com",
    projectId: "clone-bf039",
    storageBucket: "clone-bf039.appspot.com",
    messagingSenderId: "943743718858",
    appId: "1:943743718858:web:2a1917d05e09b1a1712b33",
    measurementId: "G-N8C7NY9EGP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;