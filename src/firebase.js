import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA2GG0vti7q5nK9MbGTwGUE56j92cckeVI",
    authDomain: "whatsapp-clone-ee037.firebaseapp.com",
    projectId: "whatsapp-clone-ee037",
    storageBucket: "whatsapp-clone-ee037.appspot.com",
    messagingSenderId: "103773727569",
    appId: "1:103773727569:web:b6bd7186488f85d9738170",
    measurementId: "G-3H8FZFXLTN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;