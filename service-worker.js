const CACHE = "finance-wallet-v1";
const FILES = [
  "/finance-wallet/",
  "/finance-wallet/index.html",
  "/finance-wallet/manifest.json",
  "/finance-wallet/icon-192.png",
  "/finance-wallet/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
