// 최소 SW: 설치 신호 + 현재 탭 제어 + 얕은 캐시(안정성)
const CACHE = 'cm-mini-v1';
const ASSETS = [
  './',
  './manifest.json',
  './icons/app-icon-192.png',
  './icons/app-icon-256.png',
  './icons/app-icon-512.png',
  './icons/apple-touch-icon-mini.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 캐시 우선, 실패 시 네트워크(매우 얕게만)
  event.respondWith(
    caches.match(event.request).then(r => r || fetch(event.request))
  );
});
