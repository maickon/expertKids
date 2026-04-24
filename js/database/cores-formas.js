// CORES E FORMAS — 8 cores + 7 formas geométricas
KNOWLEDGE_BASE.entities.push(

// ── CORES (difficulty 1) ──────────────────────────────────────────────────────

{
    id: "vermelho",
    label: "Vermelho",
    type: "cor",
    emoji: "🔴",
    image: "/img/database/vermelho.jpg",
    difficulty: 1,
    tags: ["cor", "primaria", "quente"],
    attributes: {
        type_of: "cor primária",
        feels_like: "quente, animado e chamativo",
        examples: "maçã, morango, bombeiro, semáforo de parar",
        mixed_with: "amarelo → laranja / azul → roxo"
    },
    fun_fact: "O vermelho é a cor que o olho humano enxerga mais facilmente! Por isso os sinais de parar e os bombeiros usam vermelho."
},

{
    id: "azul",
    label: "Azul",
    type: "cor",
    emoji: "🔵",
    image: "/img/database/azul.jpg",
    difficulty: 1,
    tags: ["cor", "primaria", "frio"],
    attributes: {
        type_of: "cor primária",
        feels_like: "calmo, frio e tranquilo",
        examples: "céu, mar, água, mirtilo",
        mixed_with: "amarelo → verde / vermelho → roxo"
    },
    fun_fact: "O azul é a cor favorita da maioria das pessoas no mundo! E o cérebro associa o azul a calma e confiança."
},

{
    id: "amarelo",
    label: "Amarelo",
    type: "cor",
    emoji: "🟡",
    image: "/img/database/amarelo.jpg",
    difficulty: 1,
    tags: ["cor", "primaria", "quente"],
    attributes: {
        type_of: "cor primária",
        feels_like: "alegre, luminoso e energético",
        examples: "sol, banana, girassol, abelha",
        mixed_with: "azul → verde / vermelho → laranja"
    },
    fun_fact: "O amarelo é a cor mais visível para o olho humano em ambientes iluminados! Por isso táxis e avisos de perigo são amarelos."
},

{
    id: "verde",
    label: "Verde",
    type: "cor",
    emoji: "🟢",
    image: "/img/database/verde.jpg",
    difficulty: 1,
    tags: ["cor", "secundaria", "natureza"],
    attributes: {
        type_of: "cor secundária (azul + amarelo)",
        feels_like: "fresco, natural e tranquilizante",
        examples: "folhas, grama, sapo, brócolis",
        mixed_with: "é formada por azul + amarelo"
    },
    fun_fact: "O verde é a cor que o olho humano mais facilmente distingue em diferentes tonalidades — por isso hospitais e escolas usam muito verde!"
},

{
    id: "laranja",
    label: "Laranja",
    type: "cor",
    emoji: "🟠",
    image: "/img/database/laranja.jpg",
    difficulty: 1,
    tags: ["cor", "secundaria", "quente"],
    attributes: {
        type_of: "cor secundária (vermelho + amarelo)",
        feels_like: "alegre, quente e acolhedor",
        examples: "laranja, cenoura, outono, pôr do sol",
        mixed_with: "é formada por vermelho + amarelo"
    },
    fun_fact: "A cor laranja recebeu o nome da fruta laranja! Antes de existir a fruta na Europa, as pessoas chamavam essa cor de 'amarelo-avermelhado'."
},

{
    id: "roxo",
    label: "Roxo",
    type: "cor",
    emoji: "🟣",
    image: "/img/database/roxo.jpg",
    difficulty: 1,
    tags: ["cor", "secundaria", "frio"],
    attributes: {
        type_of: "cor secundária (vermelho + azul)",
        feels_like: "misterioso, criativo e especial",
        examples: "uva, lavanda, beringela, ameixa",
        mixed_with: "é formada por vermelho + azul"
    },
    fun_fact: "Na Antiguidade, o roxo era mais valioso que o ouro! Fazer tinta roxa exigia milhares de caracóis marinhos, então só reis usavam essa cor."
},

{
    id: "branco",
    label: "Branco",
    type: "cor",
    emoji: "⬜",
    image: "/img/database/branco.jpg",
    difficulty: 1,
    tags: ["cor", "neutro", "luz"],
    attributes: {
        type_of: "não é cor primária — é a mistura de todas as cores da luz",
        feels_like: "limpo, puro e calmo",
        examples: "neve, nuvens, papel, leite, dente",
        mixed_with: "não se mistura — é ausência de cor no pigmento"
    },
    fun_fact: "A luz branca do sol contém TODAS as cores do arco-íris! Um prisma de vidro pode separar as cores, mostrando que o branco é feito de tudo."
},

{
    id: "preto",
    label: "Preto",
    type: "cor",
    emoji: "⬛",
    image: "/img/database/preto.jpg",
    difficulty: 1,
    tags: ["cor", "neutro", "escuridao"],
    attributes: {
        type_of: "ausência de luz ou mistura de todas as tintas",
        feels_like: "forte, elegante e sério",
        examples: "noite, pneu, carvão, piano, letra impressa",
        mixed_with: "misturando todas as tintas chega-se ao preto"
    },
    fun_fact: "O material mais negro do mundo reflete menos de 0,04% da luz — ele parece um buraco no espaço! Foi criado por cientistas e chama-se Vantablack."
},

// ── FORMAS (difficulty 1-2) ───────────────────────────────────────────────────

{
    id: "circulo",
    label: "Círculo",
    type: "forma",
    emoji: "⭕",
    image: "/img/database/circulo.jpg",
    difficulty: 1,
    tags: ["forma", "redondo", "geometrica"],
    attributes: {
        sides: "nenhum lado — é completamente redondo",
        corners: "zero cantos",
        examples: "bola, sol, pizza, moeda, roda",
        characteristic: "todos os pontos da borda são equidistantes do centro"
    },
    fun_fact: "O círculo é a forma mais perfeita da natureza! Gotas de água, bolhas de sabão e planetas tendem ao círculo por causa da física."
},

{
    id: "quadrado",
    label: "Quadrado",
    type: "forma",
    emoji: "🟥",
    image: "/img/database/quadrado.jpg",
    difficulty: 1,
    tags: ["forma", "geometrica", "4lados"],
    attributes: {
        sides: "quatro lados iguais",
        corners: "quatro cantos de 90°",
        examples: "janela, quadro, dado, azulejo",
        characteristic: "todos os lados e todos os ângulos são iguais"
    },
    fun_fact: "O quadrado é um caso especial do retângulo! Todo quadrado é retângulo, mas nem todo retângulo é quadrado."
},

{
    id: "triangulo",
    label: "Triângulo",
    type: "forma",
    emoji: "🔺",
    image: "/img/database/triangulo.jpg",
    difficulty: 1,
    tags: ["forma", "geometrica", "3lados"],
    attributes: {
        sides: "três lados",
        corners: "três cantos",
        examples: "pizza fatiada, pirâmide, sinal de trânsito, telhado",
        characteristic: "a forma mais rígida e resistente da geometria"
    },
    fun_fact: "O triângulo é a forma mais resistente! Por isso pontes e torres de energia elétrica são cheias de triângulos — eles não deformam sob pressão."
},

{
    id: "retangulo",
    label: "Retângulo",
    type: "forma",
    emoji: "▅",
    image: "/img/database/retangulo.jpg",
    difficulty: 1,
    tags: ["forma", "geometrica", "4lados"],
    attributes: {
        sides: "quatro lados — dois compridos e dois curtos",
        corners: "quatro cantos de 90°",
        examples: "porta, livro, televisão, cartão, caixa",
        characteristic: "lados opostos são iguais e paralelos"
    },
    fun_fact: "O retângulo é a forma mais comum nas construções humanas! Portas, janelas, tijolos e telas de celular são quase todos retangulares."
},

{
    id: "estrela",
    label: "Estrela",
    type: "forma",
    emoji: "⭐",
    image: "/img/database/estrela.jpg",
    difficulty: 2,
    tags: ["forma", "geometrica", "pontas"],
    attributes: {
        sides: "cinco pontas",
        corners: "cinco pontas salientes e cinco reentrantes",
        examples: "estrela do mar, estrela de natal, estrelas do céu",
        characteristic: "forma com pontas saindo de um centro"
    },
    fun_fact: "As estrelas reais no céu são na verdade esferas de gás! Parecem ter pontas por causa de como a luz se espalha nos nossos olhos."
},

{
    id: "coracao_forma",
    label: "Coração (forma)",
    type: "forma",
    emoji: "❤️",
    image: "/img/database/coracao.jpg",
    difficulty: 1,
    tags: ["forma", "simbolo", "amor"],
    attributes: {
        sides: "forma curva sem lados retos",
        corners: "uma ponta embaixo e dois arcos em cima",
        examples: "símbolo de amor, emoji, biscoito, balão",
        characteristic: "símbolo universal de amor e carinho"
    },
    fun_fact: "O símbolo do coração não se parece nada com o coração de verdade! Ele pode ter vindo da forma de folhas de hera usadas na Grécia Antiga como símbolo de amor."
},

{
    id: "losango",
    label: "Losango",
    type: "forma",
    emoji: "🔶",
    image: "/img/database/losango.jpg",
    difficulty: 2,
    tags: ["forma", "geometrica", "4lados"],
    attributes: {
        sides: "quatro lados iguais",
        corners: "quatro cantos — dois apontados e dois largos",
        examples: "pipas, sinais de trânsito, tabuleiro de xadrez",
        characteristic: "quadrado inclinado — lados iguais mas ângulos diferentes"
    },
    fun_fact: "O losango é um quadrado 'tombado'! Se você girar um quadrado 45 graus, ele vira um losango. São matematicamente parecidos."
}

);
