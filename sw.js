self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('financas-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './ícone_192.png',
        './ícone_512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
