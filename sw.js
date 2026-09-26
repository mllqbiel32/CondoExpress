// Importa os scripts do Firebase para o Service Worker funcionar em background
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Configuração do Firebase (substitua pelas mesmas chaves que você já usa no seu index.html)
firebase.initializeApp({
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
});

const messaging = firebase.messaging();

// Esta função é acionada quando o celular recebe uma notificação com o app fechado
messaging.onBackgroundMessage((payload) => {
  console.log('[sw.js] Mensagem recebida em segundo plano: ', payload);
  
  const notificationTitle = payload.notification.title || 'Nova Encomenda!';
  const notificationOptions = {
    body: payload.notification.body || 'Uma nova encomenda chegou para você.',
    icon: '/icon.png' // Ícone que vai aparecer na notificação
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
