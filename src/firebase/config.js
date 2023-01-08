import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxuyTCf30hA0wo2Hz0Ricyk2s7bHCwQV4",
  authDomain: "bulka-music.firebaseapp.com",
  projectId: "bulka-music",
  storageBucket: "bulka-music.appspot.com",
  messagingSenderId: "719446206294",
  appId: "1:719446206294:web:8b9a57061ca59f1e83d8f7",
};

firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
