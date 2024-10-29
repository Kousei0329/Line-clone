import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore"

//firebase⇒web⇒アプリの追加⇒アプリの登録
//⇒firebaseConfigg以下を張り付け
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBAiorvtWkPeT6aXHcar-pNrruHLqo0KOc",
    authDomain: "line-clone-9c2be.firebaseapp.com",
    projectId: "line-clone-9c2be",
    storageBucket: "line-clone-9c2be.appspot.com",
    messagingSenderId: "966539766001",
    appId: "1:966539766001:web:30c1b4a3a7056a6ab5a150"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth}