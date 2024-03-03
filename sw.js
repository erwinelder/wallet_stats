const cache_name_prefix = 'app-cache-';
const cache_version = 'v3.2.3';
const asset_files = [
    'index.html',
    'Main/main.css',
    'scripts/language.js',
    'main.js',
    'Main/svg/background-l.svg',
    'Main/svg/background-d.svg',
    'Main/svg/background-b.svg',
    'Main/sounds/notification_1.mp3',
    'Main/sounds/notification_2.mp3',
    'Main/sounds/notification_3.mp3'
];


self.addEventListener('install', async () => {
    const cache = await caches.open(cache_version);
    await cache.addAll(asset_files);
});


self.addEventListener('activate', async () => {
    await fetchCache();
});

async function fetchCache() {
    const cache_names = await caches.keys();
    const current_cache = cache_names.find(name => name.startsWith(cache_name_prefix));

    console.log(cache_names);

    if (!current_cache) {
        // Create a new cache with the correct name and add files
        const cache = await caches.open(`${cache_name_prefix}${cache_version}`);
        await cache.addAll(asset_files);
    }

    await Promise.all(
        cache_names
            .filter(name => name !== cache_version)
            .map(name => caches.delete(name))
    );
}


self.addEventListener('fetch', async e => {
    await fetchCache();
    const cached = await caches.match(e.request);
    const response = cached ?? await fetch(e.request);
    e.respondWith(response);
});