importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBK3ptWyBo5nxB9SjFZkMLVvP",
  authDomain: "condoexpress-a20e0.firebaseapp.com",
  projectId: "condoexpress-a20e0",
  storageBucket: "condoexpress-a20e0.firebasestorage.app",
  messagingSenderId: "800579097935",
  appId: "1:800579097935:web:7ef0b0de349b3",
  measurementId: "G-9E1MW2B2VY"
});

const messaging = firebase.messaging();
