import firebase from 'firebase/compat/app'
import  'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-__7GiVPeDXHy8WFaU1NbC6QWJdBEMEs",
    authDomain: "notesapp-c9cfa.firebaseapp.com",
    projectId: "notesapp-c9cfa",
    storageBucket: "notesapp-c9cfa.appspot.com",
    messagingSenderId: "607692835943",
    appId: "1:607692835943:web:18f93881106af6968418c2",
    measurementId: "G-P1BNR2Q2YV"
  };

  if (!firebase.apps.length){

    firebase.initializeApp(firebaseConfig);
  }

  export { firebase};