import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCtWRrwE8yYXVw1G9Z5McwHcVjmLueg0vg",
  authDomain: "e-commerce-db-95b25.firebaseapp.com",
  databaseURL: "https://e-commerce-db-95b25.firebaseio.com",
  projectId: "e-commerce-db-95b25",
  storageBucket: "e-commerce-db-95b25.appspot.com",
  messagingSenderId: "759197199886",
  appId: "1:759197199886:web:9479b0371270984bce965f",
  measurementId: "G-XL9L8E32GX"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
