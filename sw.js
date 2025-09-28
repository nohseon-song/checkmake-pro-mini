self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
// 오프라인 캐싱 불필요. 설치 신호만 주면 충분.
