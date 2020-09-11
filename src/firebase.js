import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAeOShEFDPCsuI-kKRjDoc0iqc3urtHjVM",
  authDomain: "clone-304cf.firebaseapp.com",
  databaseURL: "https://clone-304cf.firebaseio.com",
  projectId: "clone-304cf",
  storageBucket: "clone-304cf.appspot.com",
  messagingSenderId: "664256997569",
  appId: "1:664256997569:web:cccbc79ed874e3157f4c40",
  measurementId: "G-YN4S5PZ30Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };