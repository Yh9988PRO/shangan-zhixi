const CACHE_NAME = 'shangan-zhixi-v1';
const URLs_TO_CACHE = [
  '.',
  'index.html',
  'logo.png',
  'manifest.json',
  '信源数据.json',
  '公众号数据_最新.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLs_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});