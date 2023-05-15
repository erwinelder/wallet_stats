const cache_version = 'v2.4.8';
const asset_files = [
    'index.html',
    'Main/main.css',
    'main.js',
    'Main/svg/background-l.svg',
    'Main/svg/background-d.svg',
    'Main/svg/background-b.svg'
];


self.addEventListener('install', async e => {
    const cache = await caches.open(cache_version);
    await cache.addAll(asset_files);
});


self.addEventListener('activate', async e => {
    const cache_names = await caches.keys();
    console.log(cache_names);
    await Promise.all(
        cache_names
            .filter(name => name !== cache_version)
            .map(name => caches.delete(name))
    );
});


self.addEventListener('fetch', e => {
    e.respondWith(cacheFirst(e.request));
});

async function cacheFirst (request) {
    const cached = await caches.match(request);
    return cached ?? await fetch(request);
}