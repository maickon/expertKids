// ─────────────────────────────────────────────────────────────────────────────
// ExpertKids Service Worker
// Bump CACHE_VERSION a cada novo deploy para acionar o fluxo de atualização.
// ─────────────────────────────────────────────────────────────────────────────
const CACHE_VERSION = 'v9';
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
    // Imagens — ícones e logos
    'img/icon.png',
    'img/logo.png',
    'img/192.png',
    'img/512.png',
    // Imagens — banco de dados
    'img/database/abacate.jpg',
    'img/database/abacaxi.jpg',
    'img/database/abelha.jpg',
    'img/database/agua.jpg',
    'img/database/amarelo.jpg',
    'img/database/amizade.jpg',
    'img/database/arco_iris.jpg',
    'img/database/arroz.jpg',
    'img/database/artista.jpg',
    'img/database/astronauta.jpg',
    'img/database/aviao.jpg',
    'img/database/azul.jpg',
    'img/database/banana.jpg',
    'img/database/barco.jpg',
    'img/database/batata.jpg',
    'img/database/bicicleta.jpg',
    'img/database/boca.jpg',
    'img/database/bombeiro.jpg',
    'img/database/bondade.jpg',
    'img/database/borboleta.jpg',
    'img/database/braco.jpg',
    'img/database/branco.jpg',
    'img/database/brocolis.jpg',
    'img/database/cabelo.jpg',
    'img/database/cachoeira.jpg',
    'img/database/cachorro.jpg',
    'img/database/cadeira.jpg',
    'img/database/cama.jpg',
    'img/database/camelo.jpg',
    'img/database/carro.jpg',
    'img/database/cavalo.jpg',
    'img/database/cenoura.jpg',
    'img/database/cerebro.jpg',
    'img/database/cereja.jpg',
    'img/database/chuva.jpg',
    'img/database/cientista.jpg',
    'img/database/circulo.jpg',
    'img/database/cobra.jpg',
    'img/database/coco.jpg',
    'img/database/coelho.jpg',
    'img/database/cometa.jpg',
    'img/database/computador.jpg',
    'img/database/coracao.jpg',
    'img/database/coragem.jpg',
    'img/database/coruja.jpg',
    'img/database/cozinheiro.jpg',
    'img/database/crocodilo.jpg',
    'img/database/dente.jpg',
    'img/database/dentista.jpg',
    'img/database/deserto.jpg',
    'img/database/elefante.jpg',
    'img/database/empatia.jpg',
    'img/database/enfermeiro.jpg',
    'img/database/engenheiro.jpg',
    'img/database/estomago.jpg',
    'img/database/estrela.jpg',
    'img/database/estrelas.jpg',
    'img/database/fazendeiro.jpg',
    'img/database/feijao.jpg',
    'img/database/floresta.jpg',
    'img/database/foguete.jpg',
    'img/database/frango.jpg',
    'img/database/galinha.jpg',
    'img/database/gato.jpg',
    'img/database/geada.jpg',
    'img/database/geladeira.jpg',
    'img/database/generosidade.jpg',
    'img/database/girafa.jpg',
    'img/database/golfinho.jpg',
    'img/database/granizo.jpg',
    'img/database/gratidao.jpg',
    'img/database/guarda_chuva.jpg',
    'img/database/hipopotamo.jpg',
    'img/database/honestidade.jpg',
    'img/database/inverno.jpg',
    'img/database/kiwi.jpg',
    'img/database/lago.jpg',
    'img/database/lapis.jpg',
    'img/database/laranja.jpg',
    'img/database/leao.jpg',
    'img/database/leite.jpg',
    'img/database/limao.jpg',
    'img/database/lingua.jpg',
    'img/database/livro.jpg',
    'img/database/losango.jpg',
    'img/database/lua.jpg',
    'img/database/maca.jpg',
    'img/database/macaco.jpg',
    'img/database/macarrao.jpg',
    'img/database/manga.jpg',
    'img/database/mao.jpg',
    'img/database/mar.jpg',
    'img/database/marte.jpg',
    'img/database/medico.jpg',
    'img/database/mel.jpg',
    'img/database/melancia.jpg',
    'img/database/melao.jpg',
    'img/database/mesa.jpg',
    'img/database/mirtilo.jpg',
    'img/database/mochila.jpg',
    'img/database/montanha.jpg',
    'img/database/morango.jpg',
    'img/database/motorista.jpg',
    'img/database/musico.jpg',
    'img/database/nariz.jpg',
    'img/database/neblina.jpg',
    'img/database/neve.jpg',
    'img/database/nuvem.jpg',
    'img/database/olho.jpg',
    'img/database/onibus.jpg',
    'img/database/outono.jpg',
    'img/database/ouvido.jpg',
    'img/database/ovelha.jpg',
    'img/database/ovo.jpg',
    'img/database/paciencia.jpg',
    'img/database/pao.jpg',
    'img/database/passaro.jpg',
    'img/database/pato.jpg',
    'img/database/pe.jpg',
    'img/database/peixe_alimento.jpg',
    'img/database/peixe_animal.jpg',
    'img/database/pera.jpg',
    'img/database/perna.jpg',
    'img/database/perseveranca.jpg',
    'img/database/pessego.jpg',
    'img/database/pinguim.jpg',
    'img/database/policial.jpg',
    'img/database/polvo.jpg',
    'img/database/porco.jpg',
    'img/database/praia.jpg',
    'img/database/preto.jpg',
    'img/database/primavera.jpg',
    'img/database/professora.jpg',
    'img/database/pulmao.jpg',
    'img/database/quadrado.jpg',
    'img/database/queijo.jpg',
    'img/database/relogio.jpg',
    'img/database/respeito.jpg',
    'img/database/responsabilidade.jpg',
    'img/database/retangulo.jpg',
    'img/database/rio.jpg',
    'img/database/roxo.jpg',
    'img/database/sapo.jpg',
    'img/database/saturno.jpg',
    'img/database/sistema_solar.jpg',
    'img/database/sofa.jpg',
    'img/database/sol.jpg',
    'img/database/solidariedade.jpg',
    'img/database/tartaruga.jpg',
    'img/database/telefone.jpg',
    'img/database/tempestade.jpg',
    'img/database/terra.jpg',
    'img/database/tesoura.jpg',
    'img/database/tigre.jpg',
    'img/database/tomate.jpg',
    'img/database/trem.jpg',
    'img/database/triangulo.jpg',
    'img/database/trovao.jpg',
    'img/database/tubarao.jpg',
    'img/database/urso.jpg',
    'img/database/uva.jpg',
    'img/database/vaca.jpg',
    'img/database/vento.jpg',
    'img/database/verao.jpg',
    'img/database/verde.jpg',
    'img/database/vermelho.jpg',
    'img/database/veterinario.jpg',
    'img/database/vulcao.jpg',
    'img/database/zebra.jpg',
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
