const CACHE = "finance-wallet-v1";
const ASSETS = [
  "/finance-wallet/",
  "/finance-wallet/index.html",
  "/finance-wallet/manifest.json",
  "/finance-wallet/icon-192.png",
  "/finance-wallet/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

