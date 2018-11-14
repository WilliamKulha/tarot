const staticAssests = [
    './',
    './img',
    './css',
    './js'
];

self.addEventListener('install', async event => {
    const cache = await caches.open('sosotris-static')
    cache.addAll(staticAssets);
})