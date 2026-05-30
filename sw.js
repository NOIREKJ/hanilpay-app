// 최소 서비스 워커 — PWA "홈 화면 추가" 자격 충족용.
// 네트워크 우선, 실패 시 가벼운 폴백만.
self.addEventListener("install", (e)=>{ self.skipWaiting(); });
self.addEventListener("activate", (e)=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", (e)=>{
  // 기본 동작 사용 (캐시 안 함). 필요 시 나중에 정적 자원 캐시 추가.
});
