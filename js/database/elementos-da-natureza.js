// ELEMENTOS DA NATUREZA — 9 entidades (geografia física)
KNOWLEDGE_BASE.entities.push(

{
    id: "rio",
    label: "Rio",
    type: "natureza",
    emoji: "🏞️",
    image: "/img/database/rio.jpg",
    difficulty: 1,
    tags: ["natureza", "agua", "doce", "geografía"],
    attributes: {
        water_type: "doce",
        movement: "corre sempre para o mar",
        color: "azul ou verde",
        home_of: "peixes e jacarés",
        importance: "fornece água para beber e irrigar"
    },
    fun_fact: "O rio Amazonas no Brasil é o maior do mundo em volume de água! Carrega mais água do que qualquer outro rio do planeta."
},

{
    id: "mar",
    label: "Mar",
    type: "natureza",
    emoji: "🌊",
    image: "/img/database/mar.jpg",
    difficulty: 1,
    tags: ["natureza", "agua", "salgada", "geografía", "grande"],
    attributes: {
        water_type: "salgada",
        size: "enorme — cobre 70% da Terra",
        color: "azul",
        home_of: "peixes, baleias e corais",
        importance: "regula o clima do planeta"
    },
    fun_fact: "Mais de 80% do fundo do mar ainda não foi explorado pelo ser humano! O oceano é o grande desconhecido da Terra."
},

{
    id: "montanha",
    label: "Montanha",
    type: "natureza",
    emoji: "⛰️",
    image: "/img/database/montanha.jpg",
    difficulty: 1,
    tags: ["natureza", "terrestre", "alto", "geografía"],
    attributes: {
        height: "muito alta",
        top: "pico nevado",
        feeling: "frio e ventoso no topo",
        made_of: "rocha",
        importance: "de onde nascem muitos rios"
    },
    fun_fact: "O Monte Everest, a montanha mais alta do mundo, ainda cresce alguns milímetros a cada ano por causa do movimento das placas da Terra!"
},

{
    id: "vulcao",
    label: "Vulcão",
    type: "natureza",
    emoji: "🌋",
    image: "/img/database/vulcao.jpg",
    difficulty: 2,
    tags: ["natureza", "terrestre", "fogo", "geografía", "perigo"],
    attributes: {
        feature: "expulsa lava e cinzas",
        heat: "extremamente quente e perigoso",
        shape: "cone com abertura no topo",
        made_of: "rocha e magma",
        importance: "cria novas ilhas e solo fértil"
    },
    fun_fact: "O Havaí foi formado por vulcões submarinos! As ilhas foram crescendo ao longo de milhares de anos com a lava que endurecia."
},

{
    id: "floresta",
    label: "Floresta",
    type: "natureza",
    emoji: "🌳",
    image: "/img/database/floresta.jpg",
    difficulty: 1,
    tags: ["natureza", "vegetacao", "ar", "geografía", "verde"],
    attributes: {
        color: "verde",
        content: "árvores, animais e plantas",
        air: "muito puro e fresco",
        importance: "produz o oxigênio que respiramos",
        home_of: "mais da metade dos animais da Terra"
    },
    fun_fact: "A Floresta Amazônica produz 20% do oxigênio que respiramos no planeta! Por isso ela é chamada de pulmão do mundo."
},

{
    id: "deserto",
    label: "Deserto",
    type: "natureza",
    emoji: "🏜️",
    image: "/img/database/deserto.jpg",
    difficulty: 2,
    tags: ["natureza", "terrestre", "seco", "geografía", "quente"],
    attributes: {
        water_type: "muito pouca chuva",
        temperature: "quente de dia, frio à noite",
        color: "areia amarela e marrom",
        home_of: "cactos, camelos e cobras",
        importance: "abriga vida extremamente adaptada"
    },
    fun_fact: "O deserto mais frio do mundo é a Antártida, não o Saara! Um deserto é definido pela pouca chuva, não pelo calor — e a Antártida quase não recebe chuva."
},

{
    id: "cachoeira",
    label: "Cachoeira",
    type: "natureza",
    emoji: "💦",
    image: "/img/database/cachoeira.jpg",
    difficulty: 2,
    tags: ["natureza", "agua", "doce", "geografía", "belo"],
    attributes: {
        water_type: "doce",
        movement: "cai de uma altura gerando névoa",
        sound: "barulho forte de água caindo",
        made_of: "água de rio que cai em desnível",
        importance: "alimenta rios e forma piscinas naturais"
    },
    fun_fact: "As cataratas do Iguaçu, entre Brasil e Argentina, são maiores que as cataratas do Niágara! São consideradas uma das maiores maravilhas naturais do mundo."
},

{
    id: "lago",
    label: "Lago",
    type: "natureza",
    emoji: "🏔️",
    image: "/img/database/lago.jpg",
    difficulty: 1,
    tags: ["natureza", "agua", "doce", "geografía", "calmo"],
    attributes: {
        water_type: "geralmente doce",
        movement: "parada ou levemente ondulada",
        color: "azul ou verde",
        home_of: "peixes, patos e sapos",
        importance: "reserva de água doce e habitat natural"
    },
    fun_fact: "O Lago Baikal, na Rússia, é o lago mais profundo do mundo com 1.600 metros! Contém 20% de toda a água doce líquida da superfície da Terra."
},

{
    id: "praia",
    label: "Praia",
    type: "natureza",
    emoji: "🏖️",
    image: "/img/database/praia.jpg",
    difficulty: 1,
    tags: ["natureza", "agua", "areia", "geografía", "verao"],
    attributes: {
        water_type: "salgada (mar)",
        texture: "areia fina ou pedras",
        color: "areia bege ou branca",
        home_of: "caranguejos, tartarugas e gaivotas",
        importance: "lazer, turismo e proteção da costa"
    },
    fun_fact: "A areia da praia é feita de rochas que foram trituradas pelo mar por milhões de anos! Cada grãozinho de areia já foi parte de uma rocha enorme."
}

);
