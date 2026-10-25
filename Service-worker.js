
const CACHE_NAME = "parkour-x-v1";

const APP_FILES = [
  "/parkourxacademy/",
  "/parkourxacademy/index.html",
  "/parkourxacademy/style.css",
  "/parkourxacademy/script.js",
  "/parkourxacademy/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.all(
        APP_FILES.map(async (url) => {
          try {
            const response = await fetch(url);

            if (response.ok) {
              await cache.put(url, response);
            }
          } catch (error) {
            // Skip unavailable files during installation.
          }
        })
      );
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("parkour-x-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, copy);
          });
        }

        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request);

        if (cached) return cached;

        if (request.mode === "navigate") {
          return (
            (await caches.match("/parkourxacademy/index.html")) ||
            Response.error()
          );
        }

        return Response.error();
      })
  );
});
