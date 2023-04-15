const cache_version = 'v1.01';
const asset_files = [
    'index.html',
    'Main/main.css',
    'main.js',
    'Main/svg/background-l.svg'
];


self.addEventListener('install', async e => {
    const cache = await caches.open(cache_version);
    await cache.addAll(asset_files);
});


self.addEventListener('activate', async e => {
    const cache_names = await caches.keys();
    await Promise.all(
        cache_names
            .filter(name => name != cache_version)
            .map(name => caches.delete(name))
    );
});


self.addEventListener('fetch', e => {
    console.log('Fetch', e.request.url);
    e.respondWith(cacheFirst(e.request));
});

async function cacheFirst (request) {
    const cached = await caches.match(request);
    return cached ?? await fetch(request);
}