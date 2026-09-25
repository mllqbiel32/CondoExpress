// Service Worker CondoExpress

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Manipulador de notificações Push
self.addEventListener('push', function(event) {
  const data = event.data?.json() || {};
  const title = data.title || 'CondoExpress';
  const options = {
    body: data.body || 'Você tem uma nova mensagem',
    icon: 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'.9em\' font-size=\'90\'>📦</text></svg>'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
