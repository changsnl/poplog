'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "52e34dd39198e37f55c45024a837ddf4",
".git/config": "2593fdcb6c6f65fc758827222133cf3e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4116e60520667759b8ce2eb2d8f8dec6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dbc6baa2fc07d1ee14bdd528ea0ef78a",
".git/logs/refs/heads/gh-pages": "dbc6baa2fc07d1ee14bdd528ea0ef78a",
".git/logs/refs/remotes/origin/gh-pages": "bbea1a12c5ce621ac92eb983326351ed",
".git/objects/06/028145b1dc96ff53f97f886f5934feb0369d75": "352e4f381aaa47e4fcc827ff7fd72bfa",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/0bcf2f6ad8c83d9682c085e375024b5ef221ff": "977122d450507a73a256d69347001345",
".git/objects/1c/9b137ad949c3600247c258982cb68aaaebcac8": "7f178f2e77890bb00139515daece4cb1",
".git/objects/1d/092ec708080e668418e45c66b6b5566c9b7a88": "2d63f02dbb9a4fd32a2779be956b73e6",
".git/objects/1d/cfadcf77377a34ac536b60e88b183f0b77811d": "aea79345f5ade4c349e025437399bc1a",
".git/objects/29/81b966015bd617385c060920edfe16f082a7f1": "3b7f7824e9deacf4d1de0ae986f48ac1",
".git/objects/2c/11b01c3ecffad6dd45523f9b0839062b705cd5": "cb2f3048cdd94faa49ca0cc5592ea998",
".git/objects/2f/580546e9fcb6657cd719498e47bac4ebf4a1da": "6db33db4bc055a56706c43b6dda317b9",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/43/c0e8521333a76356a60da4749af14b4563ceca": "6cb5dfd1eeb98bbfc1bb1ea98b8f7714",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/56/22e6d0cde25da591693ddc22dd1bff14a795f2": "366c5b1e8a534f4670601fad35158bf4",
".git/objects/57/f0be225f6ce498304e0b26a089d008426afd32": "fb0fe1cabea2fc12a372e91d9f3b9ae5",
".git/objects/5b/7fa03038b61e8860571cc1baa30f6801a3b03b": "866939d4088dcaf0a8a3fff01caa0d3e",
".git/objects/5f/4a71217d85f13bb50ab0b160421ad287316cdc": "733294fed9944d3d2923783b01d59e25",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/89467d010d89c894d6c0c366ec612952f336ad": "83ab80e6530f00f39a88ed2f4779b319",
".git/objects/6e/ad2d1cf15aace264f907db56a09ca2518b0536": "b6dbe47510e9cc6551a32d8aa087462d",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/72/4cff8336636439c78aebcaa3bb6e180ef6912c": "c3019fc26aae1b6a706151ec60f71edf",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/83/ad5f23112c31978d5a4e0197c0032df7ecca8f": "aa76ca28b404ee8bc8dced06af5c317f",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/96/e8a2236a17681e67c55802ef30673ad5238c13": "f6e8ee95a16bc3e76ca9025fad70616e",
".git/objects/9c/17335a59ce880e41db959e9fdcd4996b496658": "a3a528ad4be35594333d699d469b3271",
".git/objects/9d/b40f1324760374eb7112ff69c513f9e9c8689d": "952056376d35c1d037de3bba9358ca7a",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/55457d0717841003008f7a78edc1dde82dcffc": "511425fd611f8f61016d6de308594602",
".git/objects/ad/c3cdf65893c31206d8bb072343eb5eb2e07f7e": "076b59d2ad3d9668371965a8e01aff73",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/7872ab7cc3094e80fc45de83a28fc47144ca70": "3b65cd848a8e08959282362081440d44",
".git/objects/b1/dbe13aefc96fff09393d7a6653befde67fa3f9": "af050b2a94e7d047980c288c8ee99f83",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bd/24c56df7fc9212de4504fdf49d195f82923f7e": "76f5f1e37baa5aa6db9e271f5d833785",
".git/objects/c0/96e8a7c830d3163ffc9e8313e5a8f055a62520": "0e378ad6595cf2c3352da919e2f3a377",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cc/617922ccdbb57859be7553e418900c70b16f06": "dd0c2552bea0aaf01c140a07a8dfb0a7",
".git/objects/d2/95589a366e329651647b387a3d64f1739fc67a": "e2a7b97c1561de3cfaebbdc9d28b631d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/df/4817fa7a55605ca5d338d890537dfd1909ec8d": "83e768a2b08b78027ef57ffef8cfacc5",
".git/objects/e1/1ec294835e9506854bb64f569fb55085864282": "87799e1568195400a3fdb1f4bbfea4cb",
".git/objects/e4/f2793bdffc266dd68a64f250399ee95aec094c": "e71f242c80fa165d95c517b285967489",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ff5a100be5fa0160aceef6eddcc51964df8c9e": "e033d2fc0ae15a3e0344b858790c5b34",
".git/objects/ec/5571263482889694e86384541ee46ec6366c6a": "b4edc762b983cc6513955853dab748eb",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f9/12ee73fc1c73a3daabf04643cbb338b8c73ceb": "200a388102e0ecd0f3e6a06fbd18bb2e",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/87b0ce3aea579ea04b22357ff8923901300434": "97f9f5bc1316cd74b115a10373374b6a",
".git/objects/ff/cda48ae2d5bdd8a6e63eb7615880190facfcb0": "f6fce2755a5fde58a4750cf3843701d3",
".git/refs/heads/gh-pages": "39d36bcd9d3a6631500657c8c384cfa2",
".git/refs/remotes/origin/gh-pages": "39d36bcd9d3a6631500657c8c384cfa2",
"assets/AssetManifest.bin": "ba604e77af25620b50c7eb31e50337c4",
"assets/AssetManifest.bin.json": "0d2b7db5ed2875111a657d1601dd349a",
"assets/assets/brand.png": "6b4f72e388e7ff500f9a9ff1eb0b8119",
"assets/assets/cir640.png": "2e0e5d1206fcf9b40578b9698d87f067",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "364bfb03fb503bf8d8d362bf430d480e",
"assets/NOTICES": "dad96a7d2839d6e4522c14a3a9fb9b7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "c3843993532b964f21d7161152ff5388",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7f851504190dfd0a2812b4067703f224",
"/": "7f851504190dfd0a2812b4067703f224",
"main.dart.js": "4e22eb621021e7b9ed217ae190a977ed",
"manifest.json": "b42bd1ac49c74a002e21a335de704055",
"version.json": "da4707f3bb6e36b654c3359b38d15ccb"};
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
