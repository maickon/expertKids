// ALIMENTOS — 15 entidades (nutrição, grupos alimentares e hábitos saudáveis)
KNOWLEDGE_BASE.entities.push(

// ── CARBOIDRATOS (difficulty 1) ───────────────────────────────────────────────

{
    id: "arroz",
    label: "Arroz",
    type: "alimento",
    emoji: "🍚",
    image: "/img/database/arroz.jpg",
    difficulty: 1,
    tags: ["alimento", "carboidrato", "base", "brasileiro"],
    attributes: {
        group: "carboidrato",
        good_for: "dar energia para o corpo",
        meal: "almoço e jantar",
        origin: "planta",
        color: "branco ou integral"
    },
    fun_fact: "O arroz é o alimento mais consumido no mundo! Mais da metade da humanidade come arroz todos os dias."
},

{
    id: "feijao",
    label: "Feijão",
    type: "alimento",
    emoji: "🫘",
    image: "/img/database/feijao.jpg",
    difficulty: 1,
    tags: ["alimento", "proteina", "fibra", "brasileiro"],
    attributes: {
        group: "proteína vegetal",
        good_for: "construir músculos e dar energia",
        meal: "almoço e jantar",
        origin: "planta",
        color: "preto, carioca ou vermelho"
    },
    fun_fact: "Arroz com feijão juntos formam uma proteína completa! Separados, cada um tem uma parte da proteína; juntos, completam o que o corpo precisa."
},

{
    id: "pao",
    label: "Pão",
    type: "alimento",
    emoji: "🍞",
    image: "/img/database/pao.jpg",
    difficulty: 1,
    tags: ["alimento", "carboidrato", "cafe", "cotidiano"],
    attributes: {
        group: "carboidrato",
        good_for: "energia para o dia todo",
        meal: "café da manhã",
        origin: "trigo (planta)",
        color: "dourado e branco por dentro"
    },
    fun_fact: "O pão mais antigo do mundo tem 14.000 anos! Foi encontrado na Jordânia e era feito de grãos selvagens moídos em pedra."
},

{
    id: "batata",
    label: "Batata",
    type: "alimento",
    emoji: "🥔",
    image: "/img/database/batata.jpg",
    difficulty: 1,
    tags: ["alimento", "carboidrato", "vegetal", "versatil"],
    attributes: {
        group: "carboidrato",
        good_for: "energia e vitaminas",
        meal: "almoço, jantar e lanche",
        origin: "planta (tubérculo)",
        color: "bege e amarela por dentro"
    },
    fun_fact: "A batata veio das montanhas dos Andes, na América do Sul, há mais de 8.000 anos! Os Incas tinham mais de 3.000 variedades diferentes."
},

// ── PROTEÍNAS (difficulty 1) ──────────────────────────────────────────────────

{
    id: "ovo",
    label: "Ovo",
    type: "alimento",
    emoji: "🥚",
    image: "/img/database/ovo.jpg",
    difficulty: 1,
    tags: ["alimento", "proteina", "versatil", "nutritivo"],
    attributes: {
        group: "proteína animal",
        good_for: "construir músculos e fornecer vitaminas",
        meal: "café da manhã, almoço ou jantar",
        origin: "animal (galinha)",
        color: "casca branca ou marrom, clara e gema"
    },
    fun_fact: "O ovo é chamado de 'alimento completo' — tem proteína, gordura boa, vitaminas e minerais. É um dos alimentos mais nutritivos que existem!"
},

{
    id: "frango",
    label: "Frango",
    type: "alimento",
    emoji: "🍗",
    image: "/img/database/frango.jpg",
    difficulty: 1,
    tags: ["alimento", "proteina", "carne", "popular"],
    attributes: {
        group: "proteína animal",
        good_for: "construir e reparar músculos",
        meal: "almoço e jantar",
        origin: "animal (galinha)",
        color: "branco ou dourado assado"
    },
    fun_fact: "O frango é a carne mais consumida no Brasil e no mundo! O país é o maior exportador de frango do planeta."
},

{
    id: "peixe_alimento",
    label: "Peixe",
    type: "alimento",
    emoji: "🐟",
    image: "/img/database/peixe_alimento.jpg",
    difficulty: 2,
    tags: ["alimento", "proteina", "omega3", "saudavel"],
    attributes: {
        group: "proteína animal com ômega-3",
        good_for: "cérebro, coração e músculos",
        meal: "almoço e jantar",
        origin: "animal (aquático)",
        color: "branco, rosado ou laranja"
    },
    fun_fact: "O ômega-3 do peixe é um nutriente que ajuda o cérebro a pensar melhor e a memória a funcionar! Por isso dizem que comer peixe 'alimenta o cérebro'."
},

// ── LATICÍNIOS (difficulty 1) ─────────────────────────────────────────────────

{
    id: "leite",
    label: "Leite",
    type: "alimento",
    emoji: "🥛",
    image: "/img/database/leite.jpg",
    difficulty: 1,
    tags: ["alimento", "laticinios", "calcio", "crianca"],
    attributes: {
        group: "laticínio (cálcio e proteína)",
        good_for: "ossos e dentes fortes",
        meal: "café da manhã e lanche",
        origin: "animal (vaca)",
        color: "branco"
    },
    fun_fact: "O cálcio do leite é essencial para crianças crescerem com ossos fortes! Uma criança precisa de pelo menos 3 porções de laticínios por dia."
},

{
    id: "queijo",
    label: "Queijo",
    type: "alimento",
    emoji: "🧀",
    image: "/img/database/queijo.jpg",
    difficulty: 1,
    tags: ["alimento", "laticinios", "calcio", "gostoso"],
    attributes: {
        group: "laticínio (cálcio e proteína)",
        good_for: "ossos fortes e proteína",
        meal: "café da manhã, lanche e jantar",
        origin: "animal (leite de vaca, cabra ou ovelha)",
        color: "amarelo ou branco"
    },
    fun_fact: "Existem mais de 1.800 tipos de queijo no mundo! O queijo mais antigo tem mais de 3.000 anos e foi encontrado em múmias egípcias."
},

// ── VEGETAIS E VERDURAS (difficulty 1) ───────────────────────────────────────

{
    id: "cenoura",
    label: "Cenoura",
    type: "alimento",
    emoji: "🥕",
    image: "/img/database/cenoura.jpg",
    difficulty: 1,
    tags: ["alimento", "vegetal", "vitamina_a", "laranja"],
    attributes: {
        group: "vegetal (vitamina A)",
        good_for: "olhos e pele saudáveis",
        meal: "almoço, jantar e lanche",
        origin: "planta (raiz)",
        color: "laranja"
    },
    fun_fact: "A vitamina A da cenoura é que faz os olhos verem bem no escuro! Mas você não vai enxergar como gato — só ajuda a manter a visão saudável."
},

{
    id: "brocolis",
    label: "Brócolis",
    type: "alimento",
    emoji: "🥦",
    image: "/img/database/brocolis.jpg",
    difficulty: 1,
    tags: ["alimento", "vegetal", "vitaminas", "verde", "saudavel"],
    attributes: {
        group: "vegetal (vitaminas C, K e ferro)",
        good_for: "imunidade, ossos e defesa do corpo",
        meal: "almoço e jantar",
        origin: "planta (flor)",
        color: "verde"
    },
    fun_fact: "O brócolis é tão nutritivo que é chamado de 'supervegetal'! Tem vitamina C, ferro, cálcio e substâncias que protegem o corpo de doenças."
},

{
    id: "tomate",
    label: "Tomate",
    type: "alimento",
    emoji: "🍅",
    image: "/img/database/tomate.jpg",
    difficulty: 1,
    tags: ["alimento", "vegetal", "vitamina_c", "vermelho"],
    attributes: {
        group: "vegetal/fruta (vitamina C e licopeno)",
        good_for: "imunidade e coração saudável",
        meal: "almoço, jantar e salada",
        origin: "planta",
        color: "vermelho"
    },
    fun_fact: "O tomate é tecnicamente uma fruta, não um vegetal! Tem sementes dentro como as frutas. Mas culinariamente é tratado como vegetal."
},

// ── GORDURAS BOAS E OUTROS (difficulty 2) ────────────────────────────────────

{
    id: "mel",
    label: "Mel",
    type: "alimento",
    emoji: "🍯",
    image: "/img/database/mel.jpg",
    difficulty: 2,
    tags: ["alimento", "natural", "doce", "abelha"],
    attributes: {
        group: "açúcar natural (energia rápida)",
        good_for: "energia e imunidade",
        meal: "café da manhã e lanche",
        origin: "animal (abelhas processam néctar de flores)",
        color: "dourado"
    },
    fun_fact: "O mel nunca estraga! Foram encontrados potes de mel em tumbas egípcias com mais de 3.000 anos — ainda comestíveis."
},

{
    id: "agua",
    label: "Água",
    type: "alimento",
    emoji: "💧",
    image: "/img/database/agua.jpg",
    difficulty: 1,
    tags: ["alimento", "essencial", "hidratacao", "vida"],
    attributes: {
        group: "essencial — não é nutriente, é vida",
        good_for: "tudo! hidrata cada célula do corpo",
        meal: "o dia todo",
        origin: "natureza",
        color: "transparente"
    },
    fun_fact: "Nosso corpo é formado por 60% de água! Podemos ficar semanas sem comer, mas apenas 3 dias sem beber água."
},

{
    id: "macarrao",
    label: "Macarrão",
    type: "alimento",
    emoji: "🍝",
    image: "/img/database/macarrao.jpg",
    difficulty: 1,
    tags: ["alimento", "carboidrato", "popular", "versatil"],
    attributes: {
        group: "carboidrato",
        good_for: "energia e saciedade",
        meal: "almoço e jantar",
        origin: "trigo (planta)",
        color: "amarelo"
    },
    fun_fact: "O macarrão foi inventado na China há mais de 4.000 anos! Só chegou à Itália séculos depois. Hoje é um dos alimentos mais amados do mundo."
}

);
