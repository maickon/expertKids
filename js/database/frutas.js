// FRUTAS — 18 entidades com atributos ricos e curiosidades
KNOWLEDGE_BASE.entities.push(

// ── MUITO COMUNS (difficulty 1) ───────────────────────────────────────────────

{
    id: "maca",
    label: "Maçã",
    type: "fruta",
    emoji: "🍎",
    image: "/img/database/maca.jpg",
    difficulty: 1,
    tags: ["fruta", "alimento", "saudavel", "doce", "vermelha"],
    attributes: {
        taste: "doce e levemente azeda",
        color: "vermelha ou verde",
        format: "redonda",
        grows_in: "macieira",
        vitamin: "vitamina C e fibras",
        texture: "crocante e firme",
        season: "outono"
    },
    fun_fact: "Existem mais de 7.500 variedades de maçã no mundo! E ela flutua na água porque 25% do seu volume é ar."
},

{
    id: "banana",
    label: "Banana",
    type: "fruta",
    emoji: "🍌",
    image: "/img/database/banana.jpg",
    difficulty: 1,
    tags: ["fruta", "alimento", "saudavel", "doce", "amarela"],
    attributes: {
        taste: "muito doce",
        color: "amarela",
        format: "comprida e curvada",
        grows_in: "bananeira",
        vitamin: "potássio e vitamina B6",
        texture: "macia e cremosa",
        season: "ano todo no Brasil"
    },
    fun_fact: "A banana cresce apontando para cima, em direção ao sol! E o bananeiro é tecnicamente uma erva gigante, não uma árvore."
},

{
    id: "laranja",
    label: "Laranja",
    type: "fruta",
    emoji: "🍊",
    image: "/img/database/laranja.jpg",
    difficulty: 1,
    tags: ["fruta", "alimento", "saudavel", "azeda", "laranja"],
    attributes: {
        taste: "azedinha e doce",
        color: "laranja",
        format: "redonda",
        grows_in: "laranjeira",
        vitamin: "muita vitamina C",
        texture: "suculenta",
        season: "inverno e outono"
    },
    fun_fact: "Uma única laranja já tem vitamina C suficiente para o dia inteiro de uma criança! Ela ajuda a proteger o corpo de gripes."
},

{
    id: "uva",
    label: "Uva",
    type: "fruta",
    emoji: "🍇",
    image: "/img/database/uva.jpg",
    difficulty: 1,
    tags: ["fruta", "alimento", "saudavel", "doce", "roxa"],
    attributes: {
        taste: "doce e levemente azeda",
        color: "roxa, verde ou vermelha",
        format: "pequena e redonda em cacho",
        grows_in: "videira",
        vitamin: "vitaminas do complexo B e antioxidantes",
        texture: "suculenta e com casca fina",
        season: "verão e outono"
    },
    fun_fact: "A uva cresce em cachos e uma videira pode viver por mais de 100 anos produzindo frutos! O suco de uva é feito espremendo ela toda."
},

{
    id: "melancia",
    label: "Melancia",
    type: "fruta",
    emoji: "🍉",
    image: "/img/database/melancia.jpg",
    difficulty: 1,
    tags: ["fruta", "alimento", "saudavel", "doce", "grande", "vermelha"],
    attributes: {
        taste: "muito doce e refrescante",
        color: "verde por fora e vermelha por dentro",
        format: "oval e grande",
        grows_in: "planta rasteira no chão",
        vitamin: "vitamina A e C, licopeno",
        texture: "molhada e refrescante",
        season: "verão"
    },
    fun_fact: "A melancia é 92% de água! Por isso é tão refrescante no calor. Uma melancia grande pode pesar mais de 10 quilos."
},

{
    id: "morango",
    label: "Morango",
    type: "fruta",
    emoji: "🍓",
    image: "/img/database/morango.jpg",
    difficulty: 1,
    tags: ["fruta", "alimento", "saudavel", "azeda", "vermelha", "pequena"],
    attributes: {
        taste: "doce e azedinho",
        color: "vermelho brilhante com pintinhas",
        format: "coração pontudo",
        grows_in: "planta baixinha no chão",
        vitamin: "vitamina C e manganês",
        texture: "macia com sementes na casca",
        season: "primavera"
    },
    fun_fact: "O morango não é tecnicamente uma fruta — é um receptáculo! As sementinhas na casca é que são as verdadeiras frutas. Mas a gente come tudo junto!"
},

{
    id: "abacaxi",
    label: "Abacaxi",
    type: "fruta",
    emoji: "🍍",
    image: "/img/database/abacaxi.jpg",
    difficulty: 1,
    tags: ["fruta", "alimento", "saudavel", "azeda", "amarela", "tropical"],
    attributes: {
        taste: "doce e azedo ao mesmo tempo",
        color: "amarelo por dentro e casca verde-marrom espinhosa",
        format: "ovalado com folhas na coroa",
        grows_in: "planta com espinhos no chão",
        vitamin: "vitamina C e bromelaína",
        texture: "fibroso e suculento",
        season: "verão"
    },
    fun_fact: "O abacaxi tem uma enzima chamada bromelaína que dissolve proteínas — é por isso que a língua fica coçando quando você come muito!"
},

{
    id: "pera",
    label: "Pêra",
    type: "fruta",
    emoji: "🍐",
    image: "/img/database/pera.jpg",
    difficulty: 1,
    tags: ["fruta", "alimento", "saudavel", "doce", "verde"],
    attributes: {
        taste: "doce e suave",
        color: "verde ou amarela",
        format: "gota com base larga e pescoço fino",
        grows_in: "pereira",
        vitamin: "fibras e vitamina C",
        texture: "macia e granulada",
        season: "outono"
    },
    fun_fact: "A pêra amadurece de dentro para fora! Quando está dura por fora já pode estar bem madura e doce por dentro."
},

// ── COMUNS (difficulty 2) ─────────────────────────────────────────────────────

{
    id: "limao",
    label: "Limão",
    type: "fruta",
    emoji: "🍋",
    image: "/img/database/limao.jpg",
    difficulty: 1,
    tags: ["fruta", "alimento", "saudavel", "azedo", "amarelo"],
    attributes: {
        taste: "muito azedo",
        color: "amarelo ou verde",
        format: "oval pequeno",
        grows_in: "limoeiro",
        vitamin: "vitamina C em abundância",
        texture: "suculento e ácido",
        season: "ano todo"
    },
    fun_fact: "O limão é tão ácido que pode limpar ferrugem e brilhar panelas! Mas tem tanta vitamina C que é muito saudável para o corpo."
},

{
    id: "manga",
    label: "Manga",
    type: "fruta",
    emoji: "🥭",
    image: "/img/database/manga.jpg",
    difficulty: 2,
    tags: ["fruta", "alimento", "saudavel", "doce", "amarela", "tropical"],
    attributes: {
        taste: "muito doce e perfumado",
        color: "amarela, laranja e vermelha",
        format: "oval com caroço grande",
        grows_in: "mangueira",
        vitamin: "vitamina A e C",
        texture: "fibrosa e suculenta",
        season: "verão"
    },
    fun_fact: "A mangueira é uma árvore que pode viver por mais de 300 anos! E uma única árvore pode produzir centenas de mangas por ano."
},

{
    id: "melao",
    label: "Melão",
    type: "fruta",
    emoji: "🍈",
    image: "/img/database/melao.jpg",
    difficulty: 2,
    tags: ["fruta", "alimento", "saudavel", "doce", "amarela", "grande"],
    attributes: {
        taste: "doce e suave",
        color: "casca amarela ou verde, por dentro laranja ou branco",
        format: "oval grande",
        grows_in: "planta rasteira",
        vitamin: "vitamina A e potássio",
        texture: "macia e bem suculenta",
        season: "verão"
    },
    fun_fact: "O melão tem mais de 80% de água e menos açúcar que a melancia. É primo da melancia e do pepino — todos da mesma família!"
},

{
    id: "pessego",
    label: "Pêssego",
    type: "fruta",
    emoji: "🍑",
    image: "/img/database/pessego.jpg",
    difficulty: 2,
    tags: ["fruta", "alimento", "saudavel", "doce", "laranja"],
    attributes: {
        taste: "doce e levemente azedo",
        color: "laranja e rosado",
        format: "redondo com sulco no meio",
        grows_in: "pessegueiro",
        vitamin: "vitamina A e C",
        texture: "pele aveludada e polpa macia",
        season: "verão"
    },
    fun_fact: "O pêssego é parente da cereja, ameixa e amêndoa! Todos têm um caroço duro no meio. A China é o maior produtor de pêssego do mundo."
},

{
    id: "cereja",
    label: "Cereja",
    type: "fruta",
    emoji: "🍒",
    image: "/img/database/cereja.jpg",
    difficulty: 2,
    tags: ["fruta", "alimento", "saudavel", "doce", "vermelha", "pequena"],
    attributes: {
        taste: "doce ou azedinha",
        color: "vermelha escura",
        format: "pequena e redonda com cabinho",
        grows_in: "cerejeira",
        vitamin: "vitamina C e antioxidantes",
        texture: "firme com pele brilhante",
        season: "primavera e verão"
    },
    fun_fact: "A cerejeira do Japão (sakura) é famosa por suas flores rosas lindas na primavera! Mas as cerejeiras japonesas produzem frutas pequenas e amargas."
},

{
    id: "coco",
    label: "Coco",
    type: "fruta",
    emoji: "🥥",
    image: "/img/database/coco.jpg",
    difficulty: 2,
    tags: ["fruta", "alimento", "saudavel", "tropical", "grande"],
    attributes: {
        taste: "adocicado e cremoso",
        color: "casca marrom dura, por dentro branco",
        format: "oval com três buracos",
        grows_in: "coqueiro na praia",
        vitamin: "gorduras boas e potássio",
        texture: "duro por fora, cremoso por dentro",
        season: "ano todo nos trópicos"
    },
    fun_fact: "A água de coco verde é tão pura e rica em minerais que já foi usada como soro em emergências médicas durante guerras!"
},

{
    id: "kiwi",
    label: "Kiwi",
    type: "fruta",
    emoji: "🥝",
    image: "/img/database/kiwi.jpg",
    difficulty: 2,
    tags: ["fruta", "alimento", "saudavel", "azeda", "verde", "exotica"],
    attributes: {
        taste: "azedinho e adocicado",
        color: "casca marrom peluda, por dentro verde brilhante",
        format: "oval pequeno",
        grows_in: "videira trepadeira",
        vitamin: "mais vitamina C que a laranja!",
        texture: "macia com sementes pretas",
        season: "inverno"
    },
    fun_fact: "O kiwi tem mais vitamina C do que a laranja! E pode ser comido com casca — ela também é nutritiva, só um pouco peluda."
},

// ── MENOS COMUNS (difficulty 3) ──────────────────────────────────────────────

{
    id: "abacate",
    label: "Abacate",
    type: "fruta",
    emoji: "🥑",
    image: "/img/database/abacate.jpg",
    difficulty: 2,
    tags: ["fruta", "alimento", "saudavel", "verde", "gordura_boa"],
    attributes: {
        taste: "cremoso e levemente amanteigado",
        color: "casca verde escura, por dentro verde claro",
        format: "pera com caroço grande",
        grows_in: "abacateiro",
        vitamin: "gorduras boas e vitamina E",
        texture: "cremoso como manteiga",
        season: "ano todo no Brasil"
    },
    fun_fact: "O abacate é tecnicamente uma fruta com caroço — como a pêssego! E as gorduras do abacate são as mesmas do azeite de oliva — muito saudáveis."
},

{
    id: "mirtilo",
    label: "Mirtilo",
    type: "fruta",
    emoji: "🫐",
    image: "/img/database/mirtilo.jpg",
    difficulty: 3,
    tags: ["fruta", "alimento", "saudavel", "azeda", "azul", "pequena", "exotica"],
    attributes: {
        taste: "levemente azedo e doce",
        color: "azul arroxeado",
        format: "pequena esfera com coroa",
        grows_in: "arbusto baixo",
        vitamin: "antioxidantes poderosos e vitamina C",
        texture: "firme com casca fina",
        season: "verão"
    },
    fun_fact: "O mirtilo é uma das frutas com mais antioxidantes do mundo! Esses compostos ajudam o cérebro a funcionar melhor — é alimento de superpoder."
}

);
