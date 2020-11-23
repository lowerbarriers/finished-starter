---
layout: compress
permalink: /service-worker.js
---

const OFFLINE = 'runtime';
const PRECACHE = 'precache-v{{ site.time | date: "%Y%m%d%H%M" }}';
const RUNTIME = 'runtime';

const OFFLINE_URL = 'offline.html';
const PRECACHE_URLS = [
  'index.html',
  './',
  './?source=pwa',
  'assets/css/style.css',
  'assets/js/behavior.js'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const offlineCache = await caches.open(OFFLINE);
    await offlineCache.add(new Request(OFFLINE_URL, {cache: 'reload'}));

    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting());
  })());
});

self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME, OFFLINE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});

self.addEventListener('fetch', event => {
  let tryInCachesFirst = caches.open(PRECACHE).then(cache => {
    return cache.match(event.request).then(response => {
      if (!response) {
        return handleNoCacheMatch(event);
      }

      // Update cache record in the background
      fetchFromNetworkAndCache(event);

      // Reply with stale data
      return response
    });
  });

  event.respondWith(tryInCachesFirst);
});

/**
 * Fetch from network and cache.
 *
 * @param event
 * @returns {Promise<* | void>}
 */
let fetchFromNetworkAndCache = (event) => {
  // DevTools will trigger these o-i-c requests, which this can't handle.
  if (event.request.cache === 'only-if-cached'
    && event.request.mode !== 'same-origin'
  ) {
    return;
  }

  return fetch(event.request).then(result => {
    // foreign requests may be res.type === 'opaque' and missing a url
    if (!result.url) return result;

    // regardless, we don't want to cache other origins' assets
    if (new URL(result.url).origin !== location.origin) return result;

    return caches.open(PRECACHE).then(cache => {
      cache.put(event.request, result.clone());
      return result;
    });
  }).catch(err => console.error(event.request.url, err));
};

/**
 * Circular call for non-match, in case we want to do something different.
 *
 * @param event
 * @returns {Promise<*|void>}
 */
let handleNoCacheMatch = (event) => {
  return fetchFromNetworkAndCache(event);
};
