// ─────────────────────────────────────────────────────────────────────────────
// ExpertKids Service Worker
// Bump CACHE_VERSION a cada novo deploy para acionar o fluxo de atualização.
// ─────────────────────────────────────────────────────────────────────────────
const CACHE_VERSION = 'v8';
const CACHE_NAME    = `expertkids-${CACHE_VERSION}`;

// Arquivos que serão cacheados imediatamente na instalação (precache)
const PRECACHE = [
    // Páginas
    'app.html',
    'index.html',
    'termos.html',
    'privacidade.html',
    'escolas.html',
    'manifest.json',
    // Scripts
    'js/config.js',
    'js/app.js',
    'js/generator.js',
    'js/knowledgeBase.js',
    'js/templates.js',
    'js/payment.js',
    // Database (essencial para modo offline)
    'js/database/animais.js',
    'js/database/clima-tempo.js',
    'js/database/corpos-celestes.js',
    'js/database/elementos-da-natureza.js',
    'js/database/estacoes-do-ano.js',
    'js/database/frutas.js',
    'js/database/objetos.js',
    'js/database/corpo-humano.js',
    'js/database/cores-formas.js',
    'js/database/profissoes.js',
    'js/database/alimentos.js',
    'js/database/valores-humanos.js',
    // Imagens
    'img/icon.png',
    'img/logo.png',
    'img/192.png',
    'img/512.png',
    // Áudios
    'audios/correct.mp3',
    'audios/wrong.mp3',
    'audios/click.mp3',
    'audios/reading_basic.mp3',
    'audios/classification.mp3',
    'audios/counting.mp3',
    'audios/vocabulary.mp3',
];

// ── Instalação: precache + NÃO chama skipWaiting automaticamente ─────────────
// O skipWaiting será acionado apenas quando o usuário clicar em "Atualizar".
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
    );
});

// ── Ativação: remove caches antigos e assume controle das abas abertas ────────
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

// ── Fetch: estratégias por tipo de requisição ─────────────────────────────────
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // 1. API externa → network-only (sem cache; retorna erro offline graciosamente)
    if (url.hostname === 'api.mksoft.com.br') {
        event.respondWith(
            fetch(request).catch(() =>
                new Response(JSON.stringify({ error: 'offline' }), {
                    status: 503,
                    headers: { 'Content-Type': 'application/json' },
                })
            )
        );
        return;
    }

    // 2. Requisições de navegação (GET de páginas HTML) → cache-first
    if (request.mode === 'navigate') {
        event.respondWith(
            caches.match(request)
                .then(cached => cached || fetch(request)
                    .then(response => {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(c => c.put(request, clone));
                        return response;
                    })
                )
                .catch(() => caches.match('app.html'))
        );
        return;
    }

    // 3. Recursos locais (mesmo origin) → cache-first com fallback de rede
    if (url.origin === self.location.origin) {
        event.respondWith(
            caches.match(request).then(cached => {
                if (cached) return cached;
                return fetch(request).then(response => {
                    if (response && response.status === 200) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(c => c.put(request, clone));
                    }
                    return response;
                });
            })
        );
        return;
    }

    // 4. CDN externos (Tailwind, jQuery, Google Fonts) → cache-first com fallback
    // Respostas opacas (cross-origin sem CORS) são cacheadas mas com cautela.
    event.respondWith(
        caches.match(request).then(cached => {
            if (cached) return cached;
            return fetch(request).then(response => {
                // Só cacheia respostas válidas e não-opacas para evitar corrompimento
                if (response && response.status === 200 && response.type !== 'opaque') {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(c => c.put(request, clone));
                }
                return response;
            }).catch(() => new Response('', { status: 408 }));
        })
    );
});

// ── Mensagens da página → permite ativar nova versão sob demanda ──────────────
self.addEventListener('message', event => {
    if (event.data?.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
