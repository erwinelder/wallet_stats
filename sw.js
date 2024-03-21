const cache_version = 'v3.2.5';
const asset_files = [
    'index.html',
    'Main/main.css',
    'main.js',
    'language.js',
    'Main/svg/background-l.svg',
    'Main/svg/background-d.svg',
    'Main/svg/background-b.svg',
    'Main/sounds/notification_1.mp3',
    'Main/sounds/notification_2.mp3',
    'Main/sounds/notification_3.mp3',
];


self.addEventListener('install', async () => {
    const cache = await caches.open(cache_version);
    await cache.addAll(asset_files);
});


self.addEventListener('activate', async () => {
    const cache_names = await caches.keys();
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

    if (cached) {
        return cached;
    }

    try {
        const response = await fetch(request);
        const cache = await caches.open(cache_version);
        await cache.put(request, response.clone());
        return response;
    } catch (error) {
        console.error('Error fetching resource:', error);
    }
}