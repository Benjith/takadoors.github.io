'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fb1113839976b5a47e5b3e8feb008a30",
"version.json": "67d8d303701c905e669d0b3e6ee9fca6",
"index.html": "b294850e28ea4b1ce925baf3578f9969",
"/": "b294850e28ea4b1ce925baf3578f9969",
"main.dart.js": "5f405068a8f76b5b32b4f3dd385ecd9c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "262892a68f7c4db5a53bb894f11f6415",
"icons/Icon-192.png": "801542b428a3447a217526b5bbcd6dce",
"icons/Icon-maskable-192.png": "801542b428a3447a217526b5bbcd6dce",
"icons/Icon-maskable-512.png": "14d2dabd5c98ae62435febfcc4b147ee",
"icons/Icon-512.png": "14d2dabd5c98ae62435febfcc4b147ee",
"manifest.json": "3b1f3d897c655adaaf845f16eb8a1052",
"assets/AssetManifest.json": "c77121cdabfe93df4729a2ca9c1d709c",
"assets/NOTICES": "1df7bb5ae6cfa629a0958f4b55eb2157",
"assets/FontManifest.json": "42234e1a478e250d2fd48c1460cec594",
"assets/AssetManifest.bin.json": "3122d04810218613c45ef41bf70af6e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7f87f3dcd878db8fc02839cf856ebd8d",
"assets/fonts/MaterialIcons-Regular.otf": "31408c5c9c7fca72dbb28b2a60d8e52c",
"assets/assets/language/en.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/language/ar.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/icon/ic_link.svg": "2d6301765b4774940b040e141bdfc43c",
"assets/assets/icon/printer.json": "9b68367bd8e5020b9594c51db9dd99e9",
"assets/assets/icon/stock.json": "3f3121b7a34ef01d36d4f7f037f0b0dd",
"assets/assets/icon/ic_stock_report.svg": "d9014424a634eac4d65faded39f209f6",
"assets/assets/icon/ic_report.svg": "6b4ebdf40456602316a09fec638c8b86",
"assets/assets/icon/loading_report.json": "8eb6f0ac6614e38cf2cb8f66627ea08b",
"assets/assets/icon/ic_no_stock.svg": "ce5493b584f9292dd30fccfe92d285cf",
"assets/assets/icon/add_user.json": "25c73d9584785106be381ac360fc76b3",
"assets/assets/icon/forma_1_copy.svg": "9a0750dba68ed6c606fc6814e0b1be47",
"assets/assets/icon/ic_available.svg": "b1b9f0698f9f407afc3676a90ff85c59",
"assets/assets/icon/ic_order.svg": "7302d8477be15edd244e0285dda6abf3",
"assets/assets/icon/ic_group.svg": "879a52ffa64cb1eda4a42cc283e53672",
"assets/assets/icon/logo.png": "b2a96a809edd6cb992cb2e533358d62a",
"assets/assets/icon/ic_save.svg": "6f69e52b64c59f63bece58bb54b6922f",
"assets/assets/icon/ic_create.svg": "96026f5b65f95d1c743b798337922da8",
"assets/assets/icon/ic_damaged.svg": "5472644e497f23139d1a2c9e1a556531",
"assets/assets/icon/order.json": "4015993c71c673bf1609b9f18b8db269",
"assets/assets/icon/profile.json": "e31a81c80ed52cd279502314d8edb39f",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
