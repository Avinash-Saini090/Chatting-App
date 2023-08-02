import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCpptRsi7e_RMz2hmTlNmGw5ltCc6lQCmY",
    authDomain: "chat-web-app-3ee14.firebaseapp.com",
    projectId: "chat-web-app-3ee14",
    storageBucket: "chat-web-app-3ee14.appspot.com",
    messagingSenderId: "237941037845",
    appId: "1:237941037845:web:b28b3c242037b66168e71c"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();