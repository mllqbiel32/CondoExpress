self.addEventListener('push', function(event) {
  const data = event.data?.json() || {};
  const title = data.title || 'CondoExpress';
  const options = {
    body: data.body || 'Você tem uma nova mensagem'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});