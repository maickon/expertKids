// OBJETOS — 20 entidades (móveis, veículos, eletrônicos, escola, cotidiano)
KNOWLEDGE_BASE.entities.push(

// ── MÓVEIS (difficulty 1) ─────────────────────────────────────────────────────

{
    id: "mesa",
    label: "Mesa",
    type: "objeto",
    emoji: "🪵",
    image: "/img/database/mesa.jpg",
    difficulty: 1,
    tags: ["objeto", "movel", "casa", "sala"],
    attributes: { material: "madeira", location: "sala ou cozinha", color: "marrom", used_for: "comer e estudar", wheels: 0 },
    fun_fact: "A mesa mais antiga conhecida tem mais de 3.000 anos e foi encontrada no Egito!"
},

{
    id: "cama",
    label: "Cama",
    type: "objeto",
    emoji: "🛏️",
    image: "/img/database/cama.jpg",
    difficulty: 1,
    tags: ["objeto", "movel", "casa", "quarto"],
    attributes: { material: "madeira e tecido", location: "quarto", color: "branco", used_for: "dormir e descansar", wheels: 0 },
    fun_fact: "Passamos cerca de um terço da vida dormindo! Uma boa cama ajuda o cérebro a guardar o que aprendemos."
},

{
    id: "cadeira",
    label: "Cadeira",
    type: "objeto",
    emoji: "🪑",
    image: "/img/database/cadeira.jpg",
    difficulty: 1,
    tags: ["objeto", "movel", "casa", "escola"],
    attributes: { material: "madeira ou plástico", location: "sala, cozinha ou escola", color: "marrom ou azul", used_for: "sentar", wheels: 0 },
    fun_fact: "A primeira cadeira da história foi criada no Egito Antigo, há mais de 4.000 anos, e era só para reis e faraós!"
},

{
    id: "sofa",
    label: "Sofá",
    type: "objeto",
    emoji: "🛋️",
    image: "/img/database/sofa.jpg",
    difficulty: 1,
    tags: ["objeto", "movel", "casa", "sala"],
    attributes: { material: "tecido ou couro", location: "sala", color: "cinza ou marrom", used_for: "relaxar e assistir TV", wheels: 0 },
    fun_fact: "O sofá foi inventado no século XVII na França. Antes disso, as pessoas só tinham cadeiras duras para sentar!"
},

// ── VEÍCULOS (difficulty 1-2) ─────────────────────────────────────────────────

{
    id: "carro",
    label: "Carro",
    type: "objeto",
    emoji: "🚗",
    image: "/img/database/carro.jpg",
    difficulty: 1,
    tags: ["objeto", "veiculo", "transporte", "terrestre"],
    attributes: { material: "metal e plástico", location: "rua e garagem", color: "várias cores", used_for: "se transportar", wheels: 4, speed: "rápido" },
    fun_fact: "O primeiro carro do mundo foi inventado em 1885 e andava mais devagar que uma bicicleta!"
},

{
    id: "bicicleta",
    label: "Bicicleta",
    type: "objeto",
    emoji: "🚲",
    image: "/img/database/bicicleta.jpg",
    difficulty: 1,
    tags: ["objeto", "veiculo", "transporte", "terrestre", "saudavel"],
    attributes: { material: "metal", location: "rua e parque", color: "azul", used_for: "pedalar e se exercitar", wheels: 2, speed: "moderada" },
    fun_fact: "A bicicleta não polui o ar e faz bem à saúde! É o veículo mais eficiente que o ser humano já inventou."
},

{
    id: "onibus",
    label: "Ônibus",
    type: "objeto",
    emoji: "🚌",
    image: "/img/database/onibus.jpg",
    difficulty: 1,
    tags: ["objeto", "veiculo", "transporte", "terrestre", "coletivo"],
    attributes: { material: "metal", location: "ruas da cidade", color: "amarelo ou azul", used_for: "transportar muitas pessoas", wheels: 6, speed: "moderada" },
    fun_fact: "Um ônibus pode transportar até 80 pessoas ao mesmo tempo — o equivalente a quase 40 carros na rua!"
},

{
    id: "aviao",
    label: "Avião",
    type: "objeto",
    emoji: "✈️",
    image: "/img/database/aviao.jpg",
    difficulty: 1,
    tags: ["objeto", "veiculo", "transporte", "aereo"],
    attributes: { material: "alumínio e aço", location: "aeroporto e céu", color: "branco e cinza", used_for: "voar entre cidades e países", wheels: 0, speed: "muito rápido" },
    fun_fact: "Um avião comercial voa a quase 900 km/h — percorrendo o Brasil inteiro em menos de 4 horas!"
},

{
    id: "barco",
    label: "Barco",
    type: "objeto",
    emoji: "⛵",
    image: "/img/database/barco.jpg",
    difficulty: 1,
    tags: ["objeto", "veiculo", "transporte", "aquatico"],
    attributes: { material: "madeira ou fibra", location: "mar, rio ou lago", color: "branco ou azul", used_for: "navegar na água", wheels: 0, speed: "lenta a moderada" },
    fun_fact: "Os barcos existem há mais de 10.000 anos! Os primeiros eram apenas troncos de árvore usados para atravessar rios."
},

{
    id: "trem",
    label: "Trem",
    type: "objeto",
    emoji: "🚂",
    image: "/img/database/trem.jpg",
    difficulty: 2,
    tags: ["objeto", "veiculo", "transporte", "terrestre", "coletivo"],
    attributes: { material: "aço", location: "trilhos e estações", color: "cinza ou vermelho", used_for: "transportar pessoas e cargas longas distâncias", wheels: 8, speed: "muito rápido" },
    fun_fact: "O trem bala japonês chega a 603 km/h — mais rápido que muitos aviões pequenos! Ele levita sobre os trilhos sem nem tocar neles."
},

// ── ELETRÔNICOS E COTIDIANO (difficulty 1-2) ──────────────────────────────────

{
    id: "computador",
    label: "Computador",
    type: "objeto",
    emoji: "💻",
    image: "/img/database/computador.jpg",
    difficulty: 2,
    tags: ["objeto", "eletronico", "tecnologia", "trabalho"],
    attributes: { material: "metal e plástico", location: "escritório e casa", color: "prata ou preto", used_for: "trabalhar, aprender e criar", wheels: 0 },
    fun_fact: "O primeiro computador do mundo ocupava uma sala inteira e pesava mais de 27 toneladas!"
},

{
    id: "telefone",
    label: "Celular",
    type: "objeto",
    emoji: "📱",
    image: "/img/database/telefone.jpg",
    difficulty: 1,
    tags: ["objeto", "eletronico", "tecnologia", "comunicacao"],
    attributes: { material: "vidro e metal", location: "bolso e mão", color: "preto ou branco", used_for: "ligar e comunicar", wheels: 0 },
    fun_fact: "O celular de hoje tem mais poder de processamento do que os computadores usados para levar o homem à Lua em 1969!"
},

{
    id: "geladeira",
    label: "Geladeira",
    type: "objeto",
    emoji: "🧊",
    image: "/img/database/geladeira.jpg",
    difficulty: 1,
    tags: ["objeto", "eletrodomestico", "cozinha", "frio"],
    attributes: { material: "metal e plástico", location: "cozinha", color: "branco ou inox", used_for: "conservar alimentos frescos", wheels: 0 },
    fun_fact: "Antes da geladeira ser inventada, as pessoas guardavam alimentos em poços de gelo no subsolo para mantê-los frios!"
},

// ── ESCOLA (difficulty 1) ─────────────────────────────────────────────────────

{
    id: "livro",
    label: "Livro",
    type: "objeto",
    emoji: "📚",
    image: "/img/database/livro.jpg",
    difficulty: 1,
    tags: ["objeto", "escola", "leitura", "educacao"],
    attributes: { material: "papel e papelão", location: "escola, biblioteca e casa", color: "colorido", used_for: "aprender e imaginar histórias", wheels: 0 },
    fun_fact: "O livro mais vendido da história é a Bíblia — com mais de 5 bilhões de cópias! E Harry Potter já vendeu mais de 600 milhões."
},

{
    id: "mochila",
    label: "Mochila",
    type: "objeto",
    emoji: "🎒",
    image: "/img/database/mochila.jpg",
    difficulty: 1,
    tags: ["objeto", "escola", "transporte", "educacao"],
    attributes: { material: "tecido e zíper", location: "escola e viagens", color: "colorida", used_for: "carregar livros e materiais", wheels: 0 },
    fun_fact: "A mochila moderna foi inventada para soldados carregarem seus equipamentos. Só depois virou item escolar!"
},

{
    id: "lapis",
    label: "Lápis",
    type: "objeto",
    emoji: "✏️",
    image: "/img/database/lapis.jpg",
    difficulty: 1,
    tags: ["objeto", "escola", "escrita", "educacao"],
    attributes: { material: "madeira e grafite", location: "escola e casa", color: "amarelo", used_for: "escrever e desenhar", wheels: 0 },
    fun_fact: "Um único lápis consegue traçar uma linha de 56 km ou escrever mais de 45.000 palavras antes de acabar!"
},

{
    id: "tesoura",
    label: "Tesoura",
    type: "objeto",
    emoji: "✂️",
    image: "/img/database/tesoura.jpg",
    difficulty: 1,
    tags: ["objeto", "escola", "ferramenta", "educacao"],
    attributes: { material: "metal e plástico", location: "escola e casa", color: "prata e colorida", used_for: "cortar papel e tecido", wheels: 0 },
    fun_fact: "A tesoura foi inventada há mais de 3.000 anos! A versão em forma de X que usamos hoje surgiu no século I d.C."
},

// ── OUTROS OBJETOS COTIDIANOS (difficulty 1-2) ───────────────────────────────

{
    id: "relogio",
    label: "Relógio",
    type: "objeto",
    emoji: "⌚",
    image: "/img/database/relogio.jpg",
    difficulty: 2,
    tags: ["objeto", "acessorio", "tempo", "cotidiano"],
    attributes: { material: "metal e vidro", location: "pulso ou parede", color: "prata ou dourado", used_for: "ver que horas são", wheels: 0 },
    fun_fact: "Antes do relógio, as pessoas usavam o sol para saber o horário! O relógio de sol é uma das invenções mais antigas da humanidade."
},

{
    id: "guarda_chuva",
    label: "Guarda-chuva",
    type: "objeto",
    emoji: "☂️",
    image: "/img/database/guarda_chuva.jpg",
    difficulty: 1,
    tags: ["objeto", "acessorio", "chuva", "protecao"],
    attributes: { material: "tecido e metal", location: "bolsa e porta de casa", color: "colorido", used_for: "se proteger da chuva", wheels: 0 },
    fun_fact: "O guarda-chuva foi inventado há mais de 4.000 anos — mas no começo era só para se proteger do sol, não da chuva!"
},

{
    id: "foguete",
    label: "Foguete",
    type: "objeto",
    emoji: "🚀",
    image: "/img/database/foguete.jpg",
    difficulty: 3,
    tags: ["objeto", "veiculo", "transporte", "espaco", "tecnologia"],
    attributes: { material: "alumínio e titânio", location: "base espacial e espaço", color: "branco e cinza", used_for: "viajar para o espaço", wheels: 0, speed: "extremamente rápido" },
    fun_fact: "Um foguete precisa atingir 28.000 km/h para escapar da gravidade da Terra — isso é 23 vezes mais rápido que o som!"
}

);
