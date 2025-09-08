import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-messaging.js";

const firebaseConfig = {
    apiKey: "AIzaSyDcCLGpLqYnxsaOrpjkc3JN-1CoJ97ODfA",
    authDomain: "ms-notifications-66fae.firebaseapp.com",
    projectId: "ms-notifications-66fae",
    storageBucket: "ms-notifications-66fae.firebasestorage.app",
    messagingSenderId: "502023854276",
    appId: "1:502023854276:web:bf13a785821dcfd479d191",
    measurementId: "G-XWZV1JC9S6"
};
const vapidKey = 'BCT81sZ2WORXOZB7hfcqtm6xycllg0KkRNBpS9bo0Bk2piFimhsqx0fdEzzHPTnUkNSZjGuLRarrHMX2dXbpDag';

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export async function showToken() {
    try {
        const registration = await navigator.serviceWorker.register('../firebase-messaging-sw.js');
        console.log('Vapid Key:', vapidKey);
        console.log('App configurada:', app);
        console.log('Registration:', registration);

        const token = await getToken(messaging, {
            vapidKey,
            serviceWorkerRegistration: registration
        });

        if (token) {
            document.getElementById('token').value = token;
            console.log('Token generado:', token);
        } else {
            console.warn('No se pudo obtener token. Asegúrate de que el permiso fue concedido.');
        }

        onMessage(messaging, payload => {
            console.log('Mensaje recibido en primer plano:', payload);
        });
    } catch (err) {
        console.error('Error obteniendo el token:', err);
    }
}

