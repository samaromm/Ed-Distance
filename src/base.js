import firebase from 'firebase'
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyABWSfRT9Hvvs9IQ-XJ558nbObQetGj668",
    authDomain: "ed-distance.firebaseapp.com",
    databaseURL: "https://ed-distance.firebaseio.com",
    projectId: "ed-distance",
    storageBucket: "ed-distance.appspot.com",
    messagingSenderId: "1038316067044",
    appId: "1:1038316067044:web:f664c176a2b1ee047df4f1",
    measurementId: "G-R78MQL33LR"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
  