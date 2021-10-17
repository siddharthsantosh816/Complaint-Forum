import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAF8gUXUiEqXTTN5DF09JZXtlqIudXaFSA",
  authDomain: "compliant-forum-c9559.firebaseapp.com",
  databaseURL: "https://compliant-forum-c9559-default-rtdb.firebaseio.com",
  projectId: "compliant-forum-c9559",
  storageBucket: "compliant-forum-c9559.appspot.com",
  messagingSenderId: "1012583805794",
  appId: "1:1012583805794:web:b1200b2dd5ccafeb39323b"
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

