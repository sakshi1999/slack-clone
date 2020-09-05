import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2A8giDcOcmB4G6vZxU4hyWYdZTTVmGQU",
  authDomain: "slack-clone-7ac01.firebaseapp.com",
  databaseURL: "https://slack-clone-7ac01.firebaseio.com",
  projectId: "slack-clone-7ac01",
  storageBucket: "slack-clone-7ac01.appspot.com",
  messagingSenderId: "532699213937",
  appId: "1:532699213937:web:b8fc774f0fe5b1157a6bd0",
  measurementId: "G-CSMYP3ZDTR"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
 // provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  export {db, auth, provider}
  export default db;

  
