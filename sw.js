// 최소 SW: 설치 신호 + 현재 탭 제어 + 얕은 fetch 패스스루
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());

// 일부 크롬/런처는 fetch 핸들러가 있어야 '설치 가능'로 판단하기도 함
self.addEventListener('fetch', (event) => {
  // 그대로 네트워크로 전달 (캐싱 안 함)
  event.respondWith(fetch(event.request).catch(() => fetch(event.request)));
});
