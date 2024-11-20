const CACHE_NAME = 'image-gallery-cache-v1';
const ASSETS_TO_CACHE = [
    '/index.html',
    '/offline.html',
    '/css/',
     '/html/',
    '/js/',
    '/assets/images/', // Cache all images
];

// Install Service Worker and cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
    console.log('Service Worker installed');
});

// Activate Service Worker and remove old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => 
            Promise.all(keys.map((key) => {
                if (key !== CACHE_NAME) return caches.delete(key);
            }))
        )
    );
    console.log('Service Worker activated');
});

// Fetch resources from cache or network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request).then((response) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        }).catch(() => caches.match('/offline.html'))
    );
});
