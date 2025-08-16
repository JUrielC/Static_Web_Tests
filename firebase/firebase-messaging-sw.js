importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDcCLGpLqYnxsaOrpjkc3JN-1CoJ97ODfA",
    authDomain: "ms-notifications-66fae.firebaseapp.com",
    projectId: "ms-notifications-66fae",
    storageBucket: "ms-notifications-66fae.firebasestorage.app",
    messagingSenderId: "502023854276",
    appId: "1:502023854276:web:bf13a785821dcfd479d191",
    measurementId: "G-XWZV1JC9S6"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
    console.log('[firebase-messaging-sw.js] Recibido en background:', payload);
    self.registration.showNotification(payload.data.title, {
        body: payload.data.body,
       /*  icon: '/icon.png' */
    });
});