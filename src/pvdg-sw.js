/* eslint-disable no-console */
const AWS_PRODUCTION_CLOUDFRONT = 'https://dt3s8ap74m6pw.cloudfront.net';
const AWS_STAGE_CLOUDFRONT = 'https://d2b64jbw6hxz4f.cloudfront.net';

const DEBUG = false;

const { assets } = global.serviceWorkerOption;
const CACHE_NAME = new Date().toISOString();
let updatedAssets = [...assets, './'];

const isProduction = () => {
  return !!location.href.match(/stage/);
};

let assetsToCache = updatedAssets
  .map(path => {
    const baseUrl = isProduction() ? AWS_PRODUCTION_CLOUDFRONT : AWS_STAGE_CLOUDFRONT;

    return new URL(path, baseUrl).toString();
  });

self.addEventListener('install', event => {
  if (DEBUG) {
    console.log('[SW] Install event');
  }

  event.waitUntil(
    global.caches
      .open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(assetsToCache);
      })
      .then(() => {
        if (DEBUG) {
          console.log('Cached assets: main', assetsToCache);
        }
      })
      .catch(error => {
        console.error(error);
        throw error;
      })
  );
});

self.addEventListener('activate', event => {
  if (DEBUG) {
    console.log('[SW] Activate event');
  }

  event.waitUntil(
    global.caches.keys()
      .then(cacheNames => {
        return Promise
          .all(
            cacheNames
              .map(cacheName => {
                // Delete the caches that are not the current one.
                if (cacheName.indexOf(CACHE_NAME) === 0) {
                  return null;
                }

                return global.caches.delete(cacheName);
              })
          );
      })
  );
});

self.addEventListener('message', event => {
  switch (event.data.action) {

    case 'skipWaiting':
      if (self.skipWaiting) {
        self.skipWaiting();
        self.clients.claim();
      }
      break;
    default:
      break;

  }
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== 'GET') {
    if (DEBUG) {
      console.log(`[SW] Ignore non GET request ${request.method}`);
    }
    return;
  }

  const requestUrl = new URL(request.url);

  if (requestUrl.origin !== AWS_STAGE_CLOUDFRONT) {
    if (DEBUG) {
      console.log(`[SW] Ignore difference origin ${requestUrl.origin}`);
    }
    return;
  }

  const resource = global.caches.match(request)
    .then(response => {
      if (response) {
        if (DEBUG) {
          console.log(`[SW] fetch URL ${requestUrl.href} from cache`);
        }

        return response;
      }

      return fetch(request)
        .then(responseNetwork => {
          if (!responseNetwork || !responseNetwork.ok) {
            if (DEBUG) {
              console.log(
                `[SW] URL [${requestUrl.toString()}] wrong responseNetwork: ${responseNetwork.status} ${responseNetwork.type}`
              );
            }

            return responseNetwork;
          }

          if (DEBUG) {
            console.log(`[SW] URL ${requestUrl.href} fetched`);
          }

          const responseCache = responseNetwork.clone();

          global.caches
            .open(CACHE_NAME)
            .then(cache => {
              return cache.put(request, responseCache);
            })
            .then(() => {
              if (DEBUG) {
                console.log(`[SW] Cache asset: ${requestUrl.href}`);
              }
            });

          return responseNetwork;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return global.caches.match('./');
          }

          return null;
        });
    });

  event.respondWith(resource);
});