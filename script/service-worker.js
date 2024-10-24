const cacheName = 'image-gallery-cache-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/assets/images/', // Cache all images folder
    // Add other resources like CSS, JS files
  'slideshow.js',
  '/css',
  '/html',
  '/script'
];

// Install the service worker and cache all the resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(assetsToCache);
        })
    );
});

// Fetch resources from the cache or network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
