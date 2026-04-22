const CACHE_NAME = 'expertkids-v1';
const ASSETS = [
    'app.html',
    'index.html',
    'js/app.js',
    'js/generator.js',
    'js/knowledgeBase.js',
    'js/templates.js',
    'audios/correct.mp3',
    'audios/wrong.mp3',
    'audios/click.mp3',
    'audios/reading_basic.mp3',
    'audios/classification.mp3',
    'audios/counting.mp3',
    'audios/vocabulary.mp3'
];

// Instalação do Service Worker e Cache de arquivos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Cacheando recursos para modo offline...');
            return cache.addAll(ASSETS);
        })
    );
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
});

// Interceptação de requisições para servir do Cache primeiro (Cache-First)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
