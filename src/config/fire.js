import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABWSfRT9Hvvs9IQ-XJ558nbObQetGj668",
    authDomain: "ed-distance.firebaseapp.com",
    databaseURL: "https://ed-distance.firebaseio.com",
    projectId: "ed-distance",
    storageBucket: "ed-distance.appspot.com",
    messagingSenderId: "1038316067044",
    appId: "1:1038316067044:web:91d3f82f172174d37df4f1",
    measurementId: "G-Y1NSTG19JG"
  };
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();