/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({ 
    apiKey: "AIzaSyCpptRsi7e_RMz2hmTlNmGw5ltCc6lQCmY",
    authDomain: "chat-web-app-3ee14.firebaseapp.com",
    projectId: "chat-web-app-3ee14",
    storageBucket: "chat-web-app-3ee14.appspot.com",
    messagingSenderId: "237941037845",
    appId: "1:237941037845:web:b28b3c242037b66168e71c"
});

firebase.messaging();