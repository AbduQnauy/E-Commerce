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

export const createUserProfileDocument = async userAuth => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //   console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt });
    } catch (error) {
      console.log(`Error while creating user document: ${error.message}`);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
