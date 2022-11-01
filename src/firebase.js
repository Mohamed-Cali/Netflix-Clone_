import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCTAJQENLHnw2kVPydtthAO8Y0jXL6De4E",
  authDomain: "netflix-2-0-3a20f.firebaseapp.com",
  databaseURL: "https://netflix-2-0-3a20f-default-rtdb.firebaseio.com",
  projectId: "netflix-2-0-3a20f",
  storageBucket: "netflix-2-0-3a20f.appspot.com",
  messagingSenderId: "80158185152",
  appId: "1:80158185152:web:a1db1f8f124e60ecd53f25"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;