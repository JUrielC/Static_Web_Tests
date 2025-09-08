
import { getToken, onMessage } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-messaging.js";


export async function showToken(messaging, vapidKey, registration) {
    try {
    

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

