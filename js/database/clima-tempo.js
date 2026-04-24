// CLIMA E TEMPO — 11 entidades (fenômenos do dia a dia)
// CORREÇÃO: era KNOWLEDGE_BASE.push() — corrigido para KNOWLEDGE_BASE.entities.push()
KNOWLEDGE_BASE.entities.push(

{
    id: "sol",
    label: "Sol",
    type: "clima",
    emoji: "☀️",
    image: "/img/database/sol.jpg",
    difficulty: 1,
    tags: ["clima", "astro", "dia", "quente", "natureza"],
    attributes: {
        feeling: "quente",
        color: "amarelo e laranja",
        period: "dia",
        effect: "ilumina e aquece a Terra",
        type_of: "estrela"
    },
    fun_fact: "O Sol é tão grande que cabem mais de 1 milhão de Terras dentro dele! Mas mesmo assim é uma estrela de tamanho mediano."
},

{
    id: "chuva",
    label: "Chuva",
    type: "clima",
    emoji: "🌧️",
    image: "/img/database/chuva.jpg",
    difficulty: 1,
    tags: ["clima", "agua", "nuvem", "natureza"],
    attributes: {
        feeling: "molhado e fresco",
        sound: "ploc ploc",
        item_needed: "guarda-chuva",
        comes_from: "nuvens",
        effect: "molha o chão e rega as plantas"
    },
    fun_fact: "A água da chuva que cai hoje pode ter caído antes há milhões de anos! Ela fica girando em um ciclo eterno na natureza."
},

{
    id: "vento",
    label: "Vento",
    type: "clima",
    emoji: "🌬️",
    image: "/img/database/vento.jpg",
    difficulty: 2,
    tags: ["clima", "ar", "invisivel", "natureza"],
    attributes: {
        feeling: "fresco ou frio",
        sound: "assovia nas árvores",
        visibility: "invisível",
        effect: "move folhas e voa pipas",
        comes_from: "diferença de temperatura no ar"
    },
    fun_fact: "O vento é ar em movimento! Ele é invisível mas você pode sentir e ver seus efeitos — como a folha que cai voando."
},

{
    id: "neve",
    label: "Neve",
    type: "clima",
    emoji: "❄️",
    image: "/img/database/neve.jpg",
    difficulty: 2,
    tags: ["clima", "frio", "inverno", "agua", "natureza"],
    attributes: {
        feeling: "muito gelado",
        color: "branco",
        texture: "macia e fria",
        effect: "cobre tudo de branco",
        made_of: "gotinhas de água congeladas"
    },
    fun_fact: "Cada floco de neve é único no mundo — não existe dois flocos exatamente iguais! São como impressões digitais do inverno."
},

{
    id: "trovao",
    label: "Trovão",
    type: "clima",
    emoji: "⚡",
    image: "/img/database/trovao.jpg",
    difficulty: 2,
    tags: ["clima", "tempestade", "barulhento", "natureza"],
    attributes: {
        sound: "muito forte e assustador",
        happens_with: "tempestade",
        color: "branco brilhante",
        effect: "ilumina o céu por um segundo",
        comes_after: "raio"
    },
    fun_fact: "O trovão é o barulho que o raio faz ao aquecer o ar super rápido! Primeiro você vê o raio, depois ouve o trovão porque a luz é mais rápida."
},

{
    id: "arco_iris",
    label: "Arco-íris",
    type: "clima",
    emoji: "🌈",
    image: "/img/database/arco_iris.jpg",
    difficulty: 2,
    tags: ["clima", "fenomeno", "colorido", "natureza", "luz"],
    attributes: {
        colors: "sete cores",
        appearance: "arco colorido no céu",
        shape: "meio círculo",
        needs: "sol e chuva ao mesmo tempo",
        color_sequence: "vermelho, laranja, amarelo, verde, azul, anil e violeta"
    },
    fun_fact: "O arco-íris na verdade é um círculo completo! Mas como estamos no chão, só conseguimos ver a metade de cima."
},

{
    id: "nuvem",
    label: "Nuvem",
    type: "clima",
    emoji: "☁️",
    image: "/img/database/nuvem.jpg",
    difficulty: 1,
    tags: ["clima", "agua", "ceu", "natureza"],
    attributes: {
        feeling: "úmida e leve",
        color: "branca ou cinza",
        made_of: "gotinhas microscópicas de água",
        effect: "faz sombra e traz chuva",
        type_of: "vapor d'água condensado"
    },
    fun_fact: "Uma nuvem pode pesar mais de 500 toneladas de água! Mesmo parecendo leve, ela é formada por bilhões de gotinhas minúsculas."
},

{
    id: "neblina",
    label: "Neblina",
    type: "clima",
    emoji: "🌫️",
    image: "/img/database/neblina.jpg",
    difficulty: 2,
    tags: ["clima", "agua", "visibilidade", "natureza"],
    attributes: {
        feeling: "úmido e fresco",
        visibility: "reduzida — difícil enxergar longe",
        made_of: "gotinhas de água no ar, como nuvem no chão",
        effect: "deixa o ar cinza e molhado",
        color: "cinza ou branco"
    },
    fun_fact: "A neblina é basicamente uma nuvem que está rente ao chão! Ela se forma quando o ar quente úmido encontra uma superfície fria."
},

{
    id: "granizo",
    label: "Granizo",
    type: "clima",
    emoji: "🌨️",
    image: "/img/database/granizo.jpg",
    difficulty: 3,
    tags: ["clima", "gelo", "chuva", "natureza", "raro"],
    attributes: {
        feeling: "gelado e barulhento",
        color: "branco transparente",
        made_of: "bolinhas de gelo",
        effect: "faz barulho no telhado e pode quebrar vidros",
        comes_from: "nuvens de tempestade muito frias"
    },
    fun_fact: "O maior grão de granizo já registrado tinha o tamanho de um melão pequeno! Caiu nos EUA em 2010 e pesava quase 900 gramas."
},

{
    id: "tempestade",
    label: "Tempestade",
    type: "clima",
    emoji: "⛈️",
    image: "/img/database/tempestade.jpg",
    difficulty: 2,
    tags: ["clima", "chuva", "vento", "raio", "natureza"],
    attributes: {
        feeling: "assustador e perigoso",
        sound: "trovão, chuva e vento",
        effect: "pode causar inundações e raios",
        made_of: "chuva forte + vento + raios",
        safety: "fique dentro de casa e longe das janelas"
    },
    fun_fact: "Acontecem cerca de 40.000 tempestades por dia no mundo inteiro! E a cada segundo, cerca de 100 raios caem na superfície da Terra."
},

{
    id: "geada",
    label: "Geada",
    type: "clima",
    emoji: "🥶",
    image: "/img/database/geada.jpg",
    difficulty: 3,
    tags: ["clima", "gelo", "inverno", "natureza", "frio"],
    attributes: {
        feeling: "muito frio",
        color: "branco brilhante nas folhas e chão",
        made_of: "cristais de gelo que se formam no chão e plantas",
        effect: "congela plantas e deixa o chão branco",
        occurs: "madrugadas de inverno muito frias"
    },
    fun_fact: "A geada pode destruir plantações inteiras em uma só noite! Fazendeiros ficam de olho na previsão do tempo para proteger as colheitas."
}

);
