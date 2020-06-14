import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBKzjuktV9UP23Bz1RkcpGcaQwMsP4ovfw",
    authDomain: "clothing-db-36e94.firebaseapp.com",
    databaseURL: "https://clothing-db-36e94.firebaseio.com",
    projectId: "clothing-db-36e94",
    storageBucket: "clothing-db-36e94.appspot.com",
    messagingSenderId: "520808573742",
    appId: "1:520808573742:web:8fdf09b2928b206f4ee8bf",
    measurementId: "G-49YK6T8T6X"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;